const express = require('express');
const router = express.Router();

 
const {createcomment} = require('../controller/CommentController'); ////yaha {} isliye laga he kyuki hum multiple function ko uske nam se nikal sakte he
const { createpost,getAllposts } = require('../controller/PostController');
const { likepost, dislikepost } = require('../controller/LikeController');
 





//mapping create
 
router.post('/comments/create', createcomment)

router.post('/post/create', createpost)

router.get('/posts', getAllposts); 
   
router.post('/likes/like', likepost)

router.post('/likes/dislike', dislikepost)

 


module.exports = router;