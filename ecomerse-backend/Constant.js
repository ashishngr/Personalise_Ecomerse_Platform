exports.ERRORS = {
    NO_AUTH_TOKEN : {
        status_code: 403, 
        message: "NO Auth token"
    }, 
    INVALID_AUTH_TOKEN: {
        status_code: 403, 
        message: "Auth token is not valid"
    }, 
    ROLE_DOES_NOT_EXISTS: {
        status_code: 400, 
        message: "Role does not exists"
    }, 
    ADMIN_USER_ALREADY_EXIST: {
        status_code: 400,
        message: "Admin user already exist"
    }
    
}