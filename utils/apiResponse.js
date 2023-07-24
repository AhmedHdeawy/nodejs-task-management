const successResponse = (data, message = 'success') => {
    return {
        data,
        message
    }
}

const errorResponse = (message, error = null) => {
    return {
        message,
        error
    }
}


module.exports = {
    successResponse,
    errorResponse
}