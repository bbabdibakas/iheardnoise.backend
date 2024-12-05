function errorHandler(err, req, res, next) {
    const statusCode = err.status || 500; // if error has not status code, defult is 500
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({ message });
}

module.exports = errorHandler;