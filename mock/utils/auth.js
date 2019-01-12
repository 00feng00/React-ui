var db =require('./db')
exports.getUser= async (request)=>{
    var userId=request.auth.credentials.userId;
    var result= await db("user").select().where({id:userId})
    return result[0]
}