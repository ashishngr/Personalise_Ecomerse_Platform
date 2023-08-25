const jwt = require("jsonwebtoken"); 
const {ObjectId} = require("mongodb"); 

const {ERRORS} = require("../Constant"); 
const VisitorUser = require("../models/visitor_user"); 


const VisitorUserAuthHelper = module.exports; 

VisitorUserAuthHelper.createVisitorToken = async(paylod) => {
    try {
        const token = jwt.sign(
            paylod, 
            process.env.SECRET_KEY, 
            {expiresIn: '420m'}
        ); 
        return token; 
    } catch (error) {
        throw error; 
    }
}; 
VisitorUserAuthHelper.validateVisitorToken = async(req, res, next) => {
    let token = req.headers['x-client-token']; 
    if(!token){
        return res.status(403).send(ERRORS.NO_VISITOR_TOEKN);
    }
    try {
        const tokenPayload = jwt.verify(token, process.env.SECRET_KEY); 
        const visitorUser = await VisitorUser.findOne({_id: visitor_user_id}); 
        if(!visitorUser){
            throw 'Visitor user does not exist'
        }
        req.visitorUser = visitorUser;
    } catch (error) {
        return res.status(401).send({ERRORS: INVALID_VISITOR_TOKEN});
    }
}


