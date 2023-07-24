class ModelNotFound extends Error
{
    constructor(msg) {
        super(msg)

        this.statusCode = 404
    }
}

const modelNotFoundError = (msg) => {
    return new ModelNotFound(msg)
}

module.exports = {
    modelNotFoundError,
    ModelNotFound
}