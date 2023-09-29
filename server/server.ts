import express, { Express, Request, Response, NextFunction } from 'express';
import { User } from './userModel';
import { join } from 'path';

const app: Express = express();
const port = 3000;

app.use(express.json());
//TODO: This line of code doesn't work, we need to figure out TS errors preventing the static fetching
app.use(express.static(join(__dirname, '../client/assets')));

//TODO: Bundling is broken, we get an error when we try to display the home page
// This only comes into play when we build the app and run it in production mode
if (process.env.NODE_ENV === 'production') {
  // statically serve everything in the build folder on the route '/dist'
  app.use('/dist', express.static(join(__dirname, '../dist')));
  // serve index.html on the route '/'
  app.get('/', (req: Request, res: Response) => res.status(200).sendFile(join(__dirname, '../index.html')));
}

// A test route to confirm the server functions as expected
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server :)');
});

//TODO: Make controller and router files, and move all business logic into them
// This makes a test user, NOTE: need to manually delete it each time
app.post('/test', async (req: Request, res: Response, next: NextFunction) => {
  try {
    await User.create({ username: 'max', password: 'hello', email: 'socool@gmail.com' });
    res.send('test user made :)');
  } catch {
    return next({ message: { err: 'AHHHHHHH' }})
    //res.send('oopsies there might be a user with that username already');
  }
});

// This tests that we can get info from the database
app.get('/test', async (req: Request, res: Response) => {
  const result = await User.find({});
  res.send(result);
});

// Unknown route handler
app.use((req: Request, res: Response) => res.sendStatus(404));

//TODO: Validate error handling is working correctly
// Global Error Handler
app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  const defaultErr = {
    log: err,
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = { ...defaultErr, err };
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
