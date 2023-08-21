exports.ERRORS = {
    GENERIC_BAD_REQUEST: {
        status_code: 400, 
        message: "Invalid request or query data"
    },
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
    }, 
    USER_CREDENTIALS_INVALID: {
        status_code: 403, 
        message: "User credentials invalid"
    }
    
}