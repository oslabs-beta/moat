cookieController = {};

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

cookieController.setSSIDCookie =(req, res, next) => {
    // generate session ID
    const number = makeid(32); 
    res.cookie('ssid', number, {httpOnly:true});
    res.locals.token = number;
    return next()
}

cookieController.removeSSIDCookie = (req, res, next) => {
  res.clearCookie('ssid');
  return next();
}

module.exports = cookieController;