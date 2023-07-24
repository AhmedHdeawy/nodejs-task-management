const { errorResponse } = require("../utils/apiResponse")
const { ModelNotFound } = require("../utils/model-not-found")

const errorHandler = (err, req, res, next) => {

    if (err instanceof ModelNotFound) {
        return res.status(err.statusCode).json(
            errorResponse(err.message)
        )    
    }

    res.status(err.statusCode ?? 500).json(
        errorResponse(err.message ?? "something wrong happened", err)
    )
}

module.exports = errorHandler