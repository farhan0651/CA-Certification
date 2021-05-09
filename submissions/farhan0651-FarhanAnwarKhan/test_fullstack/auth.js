const jwt=require('jsonwebtoken');

module.exports=(req,res,next)=>
{
    try{
    const token=req.headers.authorization.split(" ")[1];
    const decoded=jwt.verify(token,"covid");
    req.userdata=decoded;
    next();
    }
    catch(error){
        res.json("Token Failed").status(401);
    }
}