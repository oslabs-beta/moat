const db = require('../Models/UserModel.js');

sessionController = {};

/**
 * isLoggedIn - find the appropriate session for this request in the database, then
 * verify whether or not the session is still valid.
 */
// sessionController.isLoggedIn = async (req, res, next) => {
//   try{
//     const SSID = req.cookies.ssid;
//   console.log(SSID, req.cookies)
//   const text = 'SELECT id FROM user_sessions WHERE session_token=$1';
//   const response = await db.query(text, [SSID]);
//   //if there is no session verify user is needed!
//   // if there is a response, we can kind of bypass verify user
//   if (response.rows.length > 0) return res.status(301).json({isLoggedIn:true});
//   else next();
//   }  catch(err){
//     next({
//       log: `sessionController.isLoggedIn: Error ${err}`,
//       message: { err: 'Error occurred in sessionController.isLoggedIn'}
//   })
//   }

// };
  
/**
 * startSession - create and save a new Session into the database.
 */
sessionController.startSession = async (req, res, next) => {
  try {
    const text = 'INSERT INTO user_sessions (session_token, users_id) VALUES ($1, $2)';
    const params = [res.locals.token, res.locals.userId];
    await db.query(text, params);
    next();
  }
  catch(err){
    next({
      log: `sessionController.startSession: Error ${err}`,
      message: { err: 'Error occurred in sessionController.startSession'}
  })
  }
    // Session.create()
};

/**
 * 
 * Should check the cookie and pass the userId to the next piece of middleware
 * 
 * @param {Object} req.cookies 
 * @param {Number} req.cookies.ssid ssid cookie for a user
 * @param {Object} res.locals
 * @returns
 * @param {Number} res.locals.userId The userId of the user associated with the given session
 */
sessionController.checkSession = async(req, res, next) => {
// 
  try {
    const ssid = req.cookies.ssid;
    const text = 'SELECT users_id FROM user_sessions WHERE session_token = $1';
    const response = await db.query(text, [ssid]);
    await console.log( 'this is it', response.rows[0])
    if (response.rows.length) {
      res.locals.userId = response.rows[0].users_id;
      return next();

    }
    /**
     * {
     *  isLoggedIn: false
     *  data: []
     * }
     * 
     */
    else {
      console.log('ran false')
      return res.status(301).json({'isLoggedIn': false});
    }
  } catch (err) {
    next({
      log: `sessionController.checkSession: Error ${err}`,
      message: { err: 'Error occurred in sessionController.checkSession'}
  })
  }
}

// sessionController.startSession = async (req, res, next) => {
//     //write code here
//     const exists = await Session.findOne({cookieId: res.locals.id}).then(results => {if(results) {return true} else {return false}})
//     if(!exists){
//       await Session.create({cookieId: `${res.locals.id}`})
//       console.log("created session");
//     }
//     next();
//   };

//   module.exports = sessionController;

module.exports = sessionController;
