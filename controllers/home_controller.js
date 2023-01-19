

module.exports.home = function(req,res){
    return res.render('home',{
        title:"Home"
    });
}


// test
// module.exports.about = function(req,res){
//     return res.end(`<h1> Ravi Bisht Coding ninja </h1>`);
// }