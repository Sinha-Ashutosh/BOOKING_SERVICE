class AppError extends Error {
    constructor(
        name,
        meassage,
        explanation,
        statusCode
    ) {
        super();
        this.name = name;
        this.message = meassage;
        this.explanation = explanation;
        this.statusCode = statusCode;
    }
}

module.exports = AppError;