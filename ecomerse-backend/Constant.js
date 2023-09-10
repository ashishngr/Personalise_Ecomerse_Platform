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
    },
    NO_VISITOR_TOEKN: {
        status_code: 403, 
        message: "Visitor token is missing"
    }, 
    INVALID_VISITOR_TOKEN: {
        status_code: 403, 
        message: "Visitor user toekn invalid"
    }, 
    VISITOR_USER_ALREADY_EXISTS: {
        status_code: 400,
        message: "Visitor user already exists"
    }, 
    VISITOR_USER_CREDENTIALS_INVALID: {
        status_code: 403, 
        message: "Visitor User credentials invalid"
    },
    NO_ADMIN_USER_EXISTS: {
        status_code: 403, 
        message: "no admin user exists"
    }, 
    NO_PRODUCT_EXISTS: {
        status: 403, 
        message: "no product found"
    }
    
}