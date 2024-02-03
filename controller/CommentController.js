const Post = require('../modals/postModal');
const Comment = require('../modals/commentModal');

const createcomment = async (req,res) =>{
    try{
        //fetch data from req body 
        const {post,user,body} = req.body; 
    
        //create new comment object according to Comment model 
        const comment = new Comment({post,user,body});      //Jab aap new Comment({post, user, body}) likhte hain, aap ek naya Comment object create kar rahe hain jiska structure Comment model ke schema ke mutabiq hoga. Is document ko aap database mein save kar sakte hain,

        //save new comment into the database
        const saveComment = await comment.save();       //ab aap comment.save()  iss  line se aap comment document ko database mein save kar rahe hain, aur saved document ko saveComment variable mein store kar rahe hain.

        //find post by Id and add the new comment to its comment array 
        const updatedPost = await Post.findByIdAndUpdate(post,     {$push: {comments: saveComment._id }},    {new: true}).populate('comments').exec();         
                                                            
                                                                //post: Yeh parameter identify karta hai ki kaunsa post update karna hai. Ismein aapko post ka unique identifier (usually _id) milna chahiye.
                                                                //$push: {comment: saveComment._id }: Yeh parameter batata hai ki aap kya update karna chahte hain. $push operator ka use hota hai arrays ke elements ko add karne ke liye. Yahan, comment field ke array mein saveComment._id ko push kiya ja raha hai. Isse post document ke comment array mein ek new comment ka reference add ho jaata hai.  Agar aap $push operator ko specify nahi karte hain, toh entire array comment ko overwrite kar diya jayega aur saveComment._id hi array ke eklaute element ban jayega. Yani ki, previous comments ko replace kar diya jayega.
                                                                //{new: true}: Yeh parameter optional hota hai. Agar new: true set kiya gaya hai, toh updated document ko return karta hai. Agar nahi set kiya gaya hai ya new: false hai, toh original document ko return karta hai (before update).
                                                                //populate('comment');  is line ka use tab he  Jab aap ek document mein dusre document ka reference rakhte hain (for example, ek document mein dusre document ke _id ko store karte hain), to .populate() method ke istemal se aap asli (referenced) documents ko retrieve kar sakte hain.       
                                                                //.exec() method Mongoose mein ek method hai jo ek query ko execute karne ke liye use hota hai. Is method ka use promises ke sath milake asynchrony ke situations mein kiya jata hai.
        res.json({
            post:updatedPost        //ye client ko response de rahe he after updating comment in Post document 
        });

    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: "Error while creating comment",
        });
    } 
    



}


module.exports = {createcomment};

 

