const Post = require('../modals/postModal');
const Like = require('../modals/likeModal');
 
 

const likepost = async(req,res)=>{
    try{
        const {post, user} = req.body;

        //create new like object according to Like model
        const like = new Like({post, user});
        const saveLike =  await like.save();

        //find and update post document
        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {likes: saveLike._id}}, {new: true})
        .populate('likes')
        .exec();
        

        
        res.status(200).json({
            success: true,
            message: "  liked successfully",
            post:updatedPost

        })

    }
    catch (error) {
        res.status(400).json({message: error.message});
    }
}



//..................................(  dislikes  )-------------------------------------------

const dislikepost = async(req,res)=>{
    try{
        //fetch postId and likeId
        const{post,like} = req.body;
        
        //find and delete like document
        await Like.findByIdAndDelete({_id: like});

        //find and update post document
        const updatedPost = await Post.findByIdAndUpdate(post, {$pull: {likes: like}}, {new: true})
        .populate('likes')
        .exec();

        
            
        res.status(200).json({
            success: true,
            message: "disliked successfully",
            post:updatedPost

        })
    }
    catch (error) {
        res.status(400).json({message: error.message});
    }
}



module.exports = {likepost, dislikepost};