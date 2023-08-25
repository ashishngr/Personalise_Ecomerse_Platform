const jwt = require('jsonwebtoken'); 
const {ERRORS} = require('../Constant'); 

const AdminAuthHelper = module.exports; 

AdminAuthHelper.createJWTToken = (payload) => {
    try {
        const token = jwt.sign(
            payload, 
            process.env.SECRET_KEY
        )
        return token;
        
    } catch (error) {
       throw error
    }
}
AdminAuthHelper.validateToken = (req, res) =>{
    let token = req.headers['x-auth-token'];
    if(!token){
        return res.status(403).send(ERRORS.NO_AUTH_TOKEN); 
    }
    try {
       const verifyToken = jwt.verify(token, process.env.SECRET_KEY); 
       req.user = verifyToken.user; 
    } catch (error) {
        return res.status(401).send(ERRORS.INVALID_AUTH_TOKEN)
    }
}