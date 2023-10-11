const express = require('express');

const postController = require('../Controllers/postController');

const router = express.Router();

//when there is a post request to the /creatpost endpoint and invoke the create post method on post controller
// add return statement as best practice
router.post('/createpost', postController.createPost, (req, res) => {
    return res.status(200).json({ message: 'Created post!'})
})

router.get('/getposts', postController.getPosts, (req, res) => {
    return res.status(200).json({'isLoggedIn': true, 'data': res.locals.allPosts})
})

// add return statement as best practice
router.patch('/vote', postController.votePost, (req, res) => {
    return res.status(200).json({ message: 'Voted post!'})
})



module.exports = router;