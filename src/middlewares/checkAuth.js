function checkAuth(req, res, next) {
    const authorizationHeader = req.headers.authorization;

    if (authorizationHeader) {
        // Proceed to the next middleware or route handler
        return next();
    }

    return res.status(401).json({ error: "Authorization header is missing" });
}

module.exports = checkAuth;
