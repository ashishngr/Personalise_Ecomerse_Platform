const {AdminUser} = require("../models/admin_user"); 
const jwt = require("jsonwebtoken"); 
const uuidv4 = require("uuid"); 
var mongoose = require("mongoose"); 

var ObjectId = mongoose.Types.ObjectId; 

const {ERRORS} = require("../Constant"); 
const ErrorUtils = require("../Utils/error_utils"); 
const EmailUtils = require("../Utils/email_utils"); 
const PasswordUtils = require("../Utils/password_utils"); 
const AdminAuthHelper = require("../Helpers/AdminAuth"); 

const AuthController = module.exports; 


AuthController.sighup = async(req, res) => {
    try {
        const {first_name, last_name, email, password, role} = req.body; 
        let adminUser = await AdminUser.findOne({email});
        if(!EmailUtils.isValidEmail(email)){
            return ErrorUtils.APIErrorResponse(res, ERRORS.GENERIC_BAD_REQUEST);
        }
        if(!PasswordUtils.isValidPassword(password)){
            return ErrorUtils.APIErrorResponse(res, ERRORS.GENERIC_BAD_REQUEST);
        }
        if(adminUser){
            return ErrorUtils.APIErrorResponse(res, ERRORS.ADMIN_USER_ALREADY_EXIST);
        }
        adminUser = new AdminUser({
            first_name, 
            last_name, 
            email, 
            password, 
            role
        });
        await adminUser.save(); 

        const payload = {
            adminUser: {
                id: adminUser.id, 
                role: adminUser.role
            }
        }
        // TODO: Assign a JWT token 
        const accessToken = AdminAuthHelper.createJWTToken(payload); 
        return res.status(200).json({
            access_toke: accessToken, 
            message: "User Register Successfully"
        });
    } catch (error) {
        console.log(error); 
        return ErrorUtils.APIErrorResponse(res);
    }
}; 
AuthController.login = async(req, res) => {
    const {email, password} = req.body; 
    console.log("--", email, password); 

    if(!email || !password){
        return ErrorUtils.APIErrorResponse(res, ERRORS.GENERIC_BAD_REQUEST);
    }
    try {
        let user = await AdminUser.findOne({ email }); 
        if(!user){
            return ErrorUtils.APIErrorResponse(res, ERRORS.USER_CREDENTIALS_INVALID)
        } 
        const isMatchedPassword = user.securePassword(password) === user.encrypted_password; 
        if(!isMatchedPassword){
            return ErrorUtils.APIErrorResponse(res, ERRORS.USER_CREDENTIALS_INVALID);
        }; 
        const payload = {
            user: {
                id: user.id, 
                role: "Admin User"
            }
        }; 
        const accessToken = AdminAuthHelper.createJWTToken(payload); 
        
        return res.status(200).json({
            access_token: accessToken, 
            message: "User credentials match successfully"
        })
    } catch (error) {
        console.log(error); 
        return ErrorUtils.APIErrorResponse(res); 
    }
}

AuthController.logout = async(req, res) => {
    const token = req.headers; 
    console.log(token)
}
