const Post = require('../modals/postModal');
const Like = require('../modals/likeModal');
const likeModal = require('../modals/likeModal');
 

const likepost = async(req,res)=>{
    try{
        const {post, user} = req.body;
        const like = new Like({post, user});
        const saveLike =  await like.save();

        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {likes: saveLike._id}}, {new: true}).populate('likes').exec();
        
        res.json({ 
            post:updatedPost
        })

    }
    catch (error) {
        res.status(400).json({message: error.message});
    }
}



//....................dislikes--------------------

const dislikepost = async(req,res)=>{
    try{
        const{post,like} = req.body;
        //find and delete like document

        const disliked = await Like.findByIdAndDelete({_id: like});

        //find and update post document
        const updatedPost = await Post.findByIdAndUpdate(post, {$pull: {likes: like}}, {new: true}).populate('likes').exec();

        res.json({  
            post:updatedPost
        })

    }
    catch (error) {
        res.status(400).json({message: error.message});
    }
}



module.exports = {likepost, dislikepost};