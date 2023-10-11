const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();
// const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();

const UserRouter = require('./Routes/UserRouter');
const PostRouter = require('./Routes/PostRouter');

const sessionController = require('./Controllers/sessionController');
// const corsOptions = {
//     origin: true, //included origin as true
//     credentials: true, //included credentials as true
// };

const PORT = process.env.PORT || 3000;
app.use(cookieParser());
// app.use(cors(corsOptions));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
  // changed to ./dist instead of ../dist
  app.use(express.static(path.join(__dirname, '../dist')));
}

app.use('/user', UserRouter);

app.use('/post', sessionController.checkSession, PostRouter);

app.use((req, res) => res.status(404).send('Oops! This is not the right page'));

app.use((err, req, res, next) => {
  const defaultError = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultError, err);
  console.log(errorObj.log);
  res.status(errorObj.status).send(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
