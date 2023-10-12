const { Pool } = require('pg');
require('dotenv').config();

// Declare a config object to pass into new Pool()

const config = {
  max: 5,
  idleTimeoutMillis: 30000
};

// user - 'ydpwqckz'
// database - 'ydpwqckz' 
// password - 'zfIxtEVDAxWvTo8tdJs63HaotaoCU1g4'
// server -  peanut.db.elephantsql.com AKA 'host'

// uri - postgres://ydpwqckz:zfIxtEVDAxWvTo8tdJs63HaotaoCU1g4@peanut.db.elephantsql.com/ydpwqckz

// Add properties to config depending on NODE_ENV value
if(process.env.NODE_ENV === 'development') {
  config.user = process.env.DEV_USER;
  config.database = process.env.DEV_DATABASE;
  config.password = process.env.DEV_PASSWORD;
  config.host = process.env.DEV_HOST;
  config.port = process.env.DEV_PORT;
} else if (process.env.NODE_ENV === 'production') {
  config.user = process.env.RDS_USERNAME;
  config.database = process.env.RDS_DB_NAME;
  config.password = process.env.RDS_PASSWORD;
  config.host = process.env.RDS_HOSTNAME;
  config.port = process.env.RDS_PORT;
}

//PG_URI = process.env.PG_URI
//console.log('pgUri', PG_URI)

// console.log('process.env is:')
// console.log(process.env);

const pool = new Pool(config); 

pool.on('error', function (err, client) {
  console.error('idle client error', err.message, err.stack);
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  }
};