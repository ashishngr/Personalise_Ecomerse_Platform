const {VisitorUser} = require("../models/visitor_user"); 
const mongoose = require("mongoose"); 
const uuidv4 = require("uuid"); 

const { ERRORS } = require("../Constant"); 
const ErrorUtils = require("../Utils/error_utils"); 
const EmailUtils = require("../Utils/email_utils"); 
const PasswordUtils = require("../Utils/password_utils"); 

const VisitorUserController = module.exports; 

VisitorUserController.signup = async(req, res) => {
    try {
        const {first_name, last_name, email, password, role} = req.body; 
        if(!first_name || !last_name || !email || !password){
            return ErrorUtils.APIErrorResponse(res, ERRORS.GENERIC_BAD_REQUEST);
        }; 
        if(!EmailUtils.isValidEmail(email)){
            return ErrorUtils.APIErrorResponse(res, ERRORS.GENERIC_BAD_REQUEST);
        }
        if(!PasswordUtils.isValidPassword(password)){
            return ErrorUtils.APIErrorResponse(res, ERRORS.GENERIC_BAD_REQUEST);
        }

        
        let visitorUser = await VisitorUser.findOne({ email }); 
        if(visitorUser){
            return ErrorUtils.APIErrorResponse(res, ERRORS.VISITOR_USER_ALREADY_EXISTS);
        }
        visitorUser = new VisitorUser({
            first_name, 
            last_name, 
            email, 
            password, 
            role
        })
        await visitorUser.save(); 
        const payload = {
            adminUser: {
                id: adminUser.id, 
                role: visitorUser.role
            }
        }; 
        const accessToken = VisitorUserAuthHelper.createVisitorToken(payload); 
        return res.status(200).json({
            access_toke: accessToken, 
            message: "Visitor User Register Successfully"
        });
    } catch (error) {
        console.log(error); 
        return ErrorUtils.APIErrorResponse(res);
    }
}; 
VisitorUserController.signIn = async(req, res, next) => {
    const {email, password} = req.body; 
    if(!email || !password){
        return ErrorUtils.APIErrorResponse(res, ERRORS.GENERIC_BAD_REQUEST);
    } 
    try {
       const visitorUser = await VisitorUser.findOne({ email }); 
       if(!visitorUser){
            return ErrorUtils.APIErrorResponse(res, ERRORS.VISITOR_USER_CREDENTIALS_INVALID)
       }; 
       const isMatchedPassword = visitorUser.securePassword(password) === visitorUser.encrypted_password; 
        if(!isMatchedPassword){
            return ErrorUtils.APIErrorResponse(res, ERRORS)
        }; 
        const payload = {
            user: {
                id: user.id, 
                role: "Visitor User"
            }
        }; 
        const accessToken = VisitorUserAuthHelper.createVisitorToken(payload); 
        return res.status(200).json({
            access_token: accessToken, 
            message: "Visitor User credentials match successfully"
        })
    } catch (error) {
        console.log(error); 
    }
}; 
