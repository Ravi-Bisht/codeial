const Post = require('../models/post');

module.exports.home = function(req,res){


    // Post.find({},function(err,posts){

    //     return res.render('home',{
    //         title:"Codeial | Home",
    //         posts : posts
    //     });

    // });


    // populate the user of each post 

    Post.find({}).populate('user').exec(function(err,posts){
        return res.render('home',{
            title:"Codeial | Home",
            posts : posts
        });
    })
    
}


// test
// module.exports.about = function(req,res){
//     return res.end(`<h1> Ravi Bisht Coding ninja </h1>`);
// }