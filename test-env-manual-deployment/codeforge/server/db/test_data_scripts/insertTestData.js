const pool = require('../../Models/UserModel');
const format = require('pg-format')
const bcrypt = require('bcrypt');
require('dotenv').config();

// Should move this to separate file, .env perhaps?
const SALT_ROUNDS = Number(process.env.SALTROUNDS);

// Setup test data for users
const text = `
INSERT INTO users(username, password, email)
VALUES %L;`

const values = [
    ['john$456', '1234', 'thebestemail@gmail.com'],
    ['yeezuspeezus', '789', 'emailnumerodos@gmail.com'],
    ['testuser', 'pass', 'testuser@gmail.com'],
    ['user1', '1234', 'user1@gmail.com'],
]

/**
 * Perform hashing on the passwords
 */
values.forEach((element, index, array) => {
    array[index][1] = bcrypt.hashSync(element[1], SALT_ROUNDS); 
})

// Setup test data for posts
const postsQuery = `
INSERT INTO posts(user_id, title, link, description, category, type)
VALUES %L;`

const postsValues = [
    ['1', 'JavaScript Algorithms and Data Structures tutorial from FreeCodeCamp', 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/', 'A step by step tutorial on algorithms and data structures.', 'Algorithms', 'tutorial'],
    ['1', 'JavaScript Algorithms and Data Structures tutorial from FreeCodeCamp', 'https://www.youtube.com/watch?v=hQAHSlTtcmY', 'A 30 minute YouTube video on React.', 'React', 'video'],
    ['1', 'Test', 'https://mui.com/material-ui/react-text-field/', 'Help learning react, it\'s a pain', 'Algorithms', 'article'],
    ['2', 'Learn React', 'https://mui.com/material-ui/react-dialog/', 'Help learning react, it\'s a pain', 'Algorithms', 'article'],
]

// Define async function for inserting data
// need users to be inserted first
// otherwise we violate foreign key required constraint
async function performQueries(){
    await pool.query(format(text, values), []);
    await pool.query(format(postsQuery, postsValues), [])
}

// Call function
performQueries();
