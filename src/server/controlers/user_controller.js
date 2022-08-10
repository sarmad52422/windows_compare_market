const list = async(req,res) => {

    console.log('Profile = '+req.profile)
    res.send({express:'response from user controller '+req.profile})

}
const addUser = async (req,res) =>{
    const body = {req}
    res.send("adding user "+body)
}
const findUser = async (req,res)=>{
    res.send("find user with ID "+req.userId)

}
const findFriend = async (req,res)=>{
    console.log("finding frined  "+req.friendId)
    res.send({express:"Loading Friend Profile from user with  "+req.userId+" and friend id with"+req.friendId})

}
const searchById = async(req,res,next,id) =>{
    req.userId = id;
    next()
}
const searchFriend = async (req,res,next,id) =>{
    req.friendId = id;
    next()
}
module.exports = {
    list,
    addUser,
    searchById,
    findUser,
    searchFriend,
    findFriend
}

