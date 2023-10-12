const pool = require('./../Models/UserModel');
const userController = require('./../Controllers/userController');

describe('userController', () => {

    describe('userController.createUser', () => {
        let req;
        let res;
        let next;
        beforeEach(() => {
            req = {body: {username: 'chad', password: 'pass1', email: 'testemail@gmail.com'}}
            res = {locals: {}};
            next = jest.fn();
        })
        it('Should create a new user in the database', async() => {
            const text = `
            SELECT *
            FROM users;`
            const results = await pool.query(text, []);
            const rowsLength = await results.rows.length;
            await userController.createUser(req, res, next);
            const resultPost = await pool.query(text, []);
            const rowsPostLength = await resultPost.rows.length;
            expect(rowsPostLength).toEqual(rowsLength+1);
        })

        it('Should return an error if a user by the user_id already exists', async() => {
            req.body.email = 'uniqueemail@gmail.com';
            const text = `
            SELECT *
            FROM users;`
            const results = await pool.query(text, []);
            const rowsLength = await results.rows.length;
            await userController.createUser(req, res, next);
            const resultPost = await pool.query(text, []);
            const rowsPostLength = await resultPost.rows.length;
            expect(next.mock.calls[0][0]).toBeInstanceOf(Object);
            expect(rowsPostLength).toEqual(rowsLength);
        })

        it('Should return an error if a user with that email already exists', async() => {
            req.body.username = 'uniqueUser';
            const text = `
            SELECT *
            FROM users;`
            const results = await pool.query(text, []);
            const rowsLength = await results.rows.length;
            await userController.createUser(req, res, next);
            const resultPost = await pool.query(text, []);
            const rowsPostLength = await resultPost.rows.length;
            
            expect(next.mock.calls[0][0]).toBeInstanceOf(Object);
            expect(rowsPostLength).toEqual(rowsLength);
        })

        it('Should return an error if the required fields are not sent', async() => {
            req = {body: {username: 'username123', password: 'password123'}};
            await userController.createUser(req, res, next);
            expect(next.mock.calls[0][0]).toBeInstanceOf(Object);
        })
    })

    describe('userController.verifyUser', () => {
        let req;
        let res;
        let next;
        beforeEach(() => {
            req = {body: {}};
            res = {locals: {}};
            next = jest.fn();
        })
        it('Should store the user_id on res.locals.userId and go to next middleware', async() => {
            const username = 'user1';
            const password = '1234';
            req.body.username = username;
            req.body.password = password;
            await userController.verifyUser(req, res, next);
            expect(res.locals.userId).toBe(4);
            expect(next.mock.calls[0][0]).toBe(undefined)
        })

        it('Should throw an error for incorrect username or password', async() => {
            const username = 'user1';
            const password = 'password';
            req.body.username = username;
            req.body.password = password;
            await userController.verifyUser(req, res, next);
            expect(next.mock.calls[0][0]).toBeInstanceOf(Object);
            expect(next).toBeCalledTimes(1);
        })

        it('Should throw an error for missing a field', async() => {
            const username = 'user1';
            req.body.username = username;
            await userController.verifyUser(req, res, next);
            expect(next.mock.calls[0][0]).toBeInstanceOf(Object);
            expect(next).toBeCalledTimes(1);
        })
    })
})