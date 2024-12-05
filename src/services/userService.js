const path = require('path');
const FileService = require('./fileService');

class UserService {
    async login(username, password) {
        try {
            const dbPath = path.resolve(__dirname, '../db', 'userDB.json');
            const userDB = await FileService.readFileAsync(dbPath);

            const users = JSON.parse(userDB);
            const user = users.find(user => user.username === username);
            
            if (!user) {
                const error = new Error('User not found.')
                error.status = 404
                throw error
            }

            if (user.password !== password) {
                const error = new Error('Invalid credentials.')
                error.status = 403
                throw error
            }

            return user
            
        } catch (err) {
            const error = new Error(err.message || 'Service error.');
            error.status = 500;
            throw error;
        }
    }
}

module.exports = new UserService();