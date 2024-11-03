const { statusCodes } = require('http-status-codes');

class ServiceError extends Error {
    constructor(
        message,
        explanation,
        statusCodes = statusCodes.INTERNAL_SERVER_ERROR
    ) {
        this.name = 'ServiceError';
        this.message = message;
        this.explanation = explanation;
        this.statusCodes = statusCodes;
    }
}

module.exports = ServiceError;