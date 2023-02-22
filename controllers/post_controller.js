// module.exports.post = function (req, res){
//     return res.end(`<h1>User Post</h1>`)
// };

const post = require('../models/post');
module.exports.create = function(req,res){
    post.create({
        content : req.body.content,
        user : req.user._id
    }, function(err,post){
        if(err){console.log("error in creating the post"); return }

        return res.redirect('back');
    })
}