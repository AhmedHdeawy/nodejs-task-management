const successResponse = (data, message = 'success') => {
    return {
        data,
        message
    }
}

const errorResponse = (message, error = null, status = 400) => {
    return {
        message,
        error,
        status
    }
}


module.exports = {
    successResponse,
    errorResponse
}