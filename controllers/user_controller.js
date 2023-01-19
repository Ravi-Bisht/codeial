// module.exports.profile = function(req,res){

//     return res.end(`<h1>User profile</h1>`)

// }

module.exports.profile = function(req,res){

    return res.render('users_profile',{
        title:"User"
    })

}