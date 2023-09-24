const postController = require('./../Controllers/postController');
const pool = require('./../Models/UserModel');

describe('postController', () => {
    describe('postController.getPosts', () => {
        let req;
        let res;
        let next;
        beforeEach(()=>{
            req = {query: {category: undefined}};
            res = {locals: {}};
            next = jest.fn();
        })
        
        it('Should get all posts when category is not specified', async() => {
            const text = `
            SELECT * 
            FROM posts;
            `
            const results = await pool.query(text, []);
            const rows = await results.rows;
            await postController.getPosts(req, res, next)
            expect(res.locals.allPosts).not.toBe(undefined);
            expect(res.locals.allPosts.length).toEqual(rows.length);
            expect(next.mock.calls[0][0]).toEqual(undefined); //Checks next was called with no args
            expect(next).toBeCalledTimes(1);
        })

        it('Should get all posts belonging to a correctly specified category', async()=>{
            const categories = ['algorithms']
            req = {query: {category: categories[0]}};
            const text = `
            SELECT * 
            FROM posts 
            WHERE category=($1);
            `;
            const values = [categories[0]];
            const results = await pool.query(text, values);
            const rows = await results.rows;
            await postController.getPosts(req, res, next);
            expect(res.locals.allPosts).not.toBe(undefined);
            expect(res.locals.allPosts.length).toEqual(rows.length);
            expect(next.mock.calls[0][0]).toEqual(undefined);
            expect(next).toBeCalledTimes(1);

        })

        it('Should return an error if the category is not a defined category', async() => {
            const category = 'FakeCategory';
            req = {query: {category: category}}
            await pool.query(req, res, next);
            expect(res.locals.allPosts).toBe(undefined);
            expect(next.mock.calls[0][0]).toBeInstanceOf(object);
        })
    })

    describe('postController.votePost', () => {
        let req;
        let res;
        let next;
        let text;
        beforeEach(() => {
            req = {body: {postId: 1}};
            res = {locals: {userId: 3}};
            next = jest.fn();
            text = `
            SELECT *
            FROM posts
            WHERE id=($1);
            `
        })
        it('Should increment voting when user votes', async() => {
            const results = await pool.query(text, [req.body.postId]);
            const voteCount = await results.rows[0].upvotes;
            await postController.votePost(req, res, next);
            const results2 = await pool.query(text, [req.body.postId]);
            const voteCount2 = await results2.rows[0].upvotes;

            expect(voteCount2).toEqual(voteCount+1);
        })

        it('Should remove voting when user votes again', async() => {
            const results = await pool.query(text, [req.body.postId]);
            const voteCount = await results.rows[0].upvotes;
            await postController.votePost(req, res, next);
            const results2 = await pool.query(text, [req.body.postId]);
            const voteCount2 = await results2.rows[0].upvotes;

            expect(voteCount2).toEqual(voteCount-1);
        })

        it('Should return an error if the postId does not exist', async() => {
            let req = {body: {postId: 10000}};
            await postController.votePost(req, res, next);
            expect(next.mock.calls[0][0]).toBeInstanceOf(Object);
        })
    
    })

    describe('postController.createPost', () => {
        it('Should return an error if properties passed in are undefined', async()=>{
            const req = {
                body: {
                    title: 'Test title',
                    category:'Test category',
                    link: 'http://fakeurl.com',
                    description: 'Test description'
                }
            }
            const res = {locals: {userId: '1'}};
            const next = jest.fn();
            await postController.createPost(req, res, next);
            expect(next.mock.calls[0][0]).toBeInstanceOf(Object);
        })

        it('Should add post to the database', async()=>{
            const req = {
                body: {
                    title: 'Test title',
                    type: 'Test type',
                    category:'Test category',
                    link: 'http://fakeurl.com',
                    description: 'Test description'
                }
            }
            const res = {locals: {userId: '1'}};
            const next = jest.fn();

            const text = `
            SELECT * 
            FROM posts;
            `
            const results = await pool.query(text, []);
            const rows = await results.rows;

            await postController.createPost(req, res, next);

            const results2 = await pool.query(text, []);
            const rows2 = await results.rows;

            expect(next.mock.calls[0][0]).toBe(undefined);
            expect(next).toBeCalledTimes(1);
            expect(rows2.length).toEqual(rows.length + 1);
            
        })

    })


})