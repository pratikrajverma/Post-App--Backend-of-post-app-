const Post = require('../modals/postModal');

const createpost = async (req,res) =>{
    try{
        const {title,body} = req.body;
        const postcreated = await Post.create({title,body});

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
        const posts = await Post.find().populate('comments').populate('likes').exec();
        res.status(200).json({
            success:true,
            posts:posts
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
 