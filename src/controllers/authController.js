const userService = require('../services/userService');

class AuthController {
    async login(req, res, next) {
        try {
            const { username, password } = req.body

            if (!username || !password) {
                const error = new Error('Username and password are required.')
                error.status = 400
                throw error
            }

            const userData = await userService.login(username, password);

            return res.json(userData);
        } catch (error) {
            return next(error);
        }
    }
}

module.exports = new AuthController()