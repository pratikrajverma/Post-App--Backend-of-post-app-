const Post = require('../modals/postModal');

const createpost = async (req,res) =>{
    try{
        //fetch data from req body
        const {title,body} = req.body;

        //create new post object in mongodb according to Post model
        const postcreated = await Post.create({title,body});

        //send created post back to the client as a response
        res.status(200).json({
            success:true,
            post:postcreated,
            message:"Post created successfully",
        })
    }
    catch(err)
    {
        res.status(400).json({
            success:false,
            error:err,
            message:"Post creation me error he",
        })
        console.error(err);
    }
}


const  getAllposts = async (req, res) => {
    try{
        //fetch all posts from mongodb and populate their comments and likes
        const Allpost = await Post.find()
        .populate('comments')
        .populate('likes')
        .exec();

        
        res.status(200).json({
            success:true,
            posts:Allpost
        })
    }
    catch(err)
    {
        res.status(400).json({
            success:false,
            error:err,
            message:"Post creation me error he",
        })
        console.error(err);
    }
}

module.exports = {createpost, getAllposts};
 