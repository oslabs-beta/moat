const db = require('../Models/UserModel.js');
const bcrypt = require('bcrypt');
require('dotenv').config();

const SALT_WORK_FACTOR = Number(process.env.SALTROUNDS);

const userController = {};


/**
 * 
 * @param {Object} req.body 
 * @param {String} req.body.username Username to add, must be unique, required
 * @param {String} req.body.password Password to add, required
 * @param {String} req.body.email Email to add, required
 * @param {Object} res.locals
 * @param {Number} res.locals.userId User id created from inserting into DB 
 * @param {Function} next When invoked without an argument, moves to next middleware
 * @returns undefined | error object
 */
userController.createUser = async (req, res, next) => {
    try {
        const { username, password, email } = req.body;
        const hashedPW = await bcrypt.hash(password, SALT_WORK_FACTOR);
        const params = [username, hashedPW, email];
        const insertUserQuery = `
        INSERT INTO users (username, password, email) 
        VALUES ($1, $2, $3)
        RETURNING id;`
        const result = await db.query(insertUserQuery, params);
        res.locals.userId = await result.rows[0].id;
        return next();
    } catch(err) {
        return next({
            log: `userController.createUser: Error ${err}`,
            message: { err: 'Error occurred in userController.createUser'}
        });
    }
}

/**
 * 
 * 
 * This middleware checks a users username and password from a POST request. If
 * the user is found, it stores the user_id on res.locals.userId and moves to next middleware.
 * Otherwise it throws an error.
 * 
 * @param {Object} req.body 
 * @param {String} req.body.username
 * @param {String} req.body.password
 * @param {Object} res.locals
 * @param {Number} res.locals.userId User id created from inserting into DB 
 * @param {Function} next When invoked without an argument, moves to next middleware
 * @returns undefined | error object
 */
userController.verifyUser = async (req, res, next) => {    
    try {
        const { username, password } = req.body;
        const params = [username];
        const verifyUserQuery = `
        SELECT * 
        FROM users 
        WHERE username = $1;`
        const databasePW = await db.query(verifyUserQuery, params);

        if(databasePW.rows.length < 1) {
            await bcrypt.compare(password, password);
            return res.status(409).json({ message: 'Username or password incorrect.'});
        }
        const match = await bcrypt.compare(password, databasePW.rows[0].password);
        // res.locals.userInfo = {user: databasePW.rows}
        res.locals.userId = databasePW.rows[0].id;
        if (match) {
            return next();
        } else {
            return res.status(409).json({message: 'Username or password incorrect.'})
        }
    } catch(err) {
        return next({
            log: `userController.verifyUser: Error ${err}`,
            message: { err: 'Error occurred in userController.verifyUser'}
        });
    }
}

/**
 * Gets the user info from a logged in users Id
 * @param {Integer} res.locals.userId
 * @returns
 * @param {Object} res.locals.user
 * @param {String} res.locals.user.username
 */
userController.getUsername = async (req, res, next) =>{
    try { 
    const query = 'SELECT username FROM users WHERE id=$1'
    const params = [res.locals.userId];
    
   const dbquery = await db.query(query, params);
   res.locals.user = dbquery.rows[0];
   return next();
    } catch (err) {
        return next({
            log: `userController.getUsername Error ${err}`,
            message: { err: 'Error occurred in userController.getUsername'}
        });
    }
}


module.exports = userController;