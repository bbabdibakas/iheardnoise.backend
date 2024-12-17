const path = require('path');
const FileService = require('./fileService');

class ProfileService {
    async getProfileById(id) {
        try {
            const dbPath = path.resolve(__dirname, '../db', 'profileDB.json');
            const profileDb = await FileService.readFileAsync(dbPath);

            const profiles = JSON.parse(profileDb);
            const profile = profiles.find(profile => profile.id === id);
            
            if (!profile) {
                const error = new Error('Profile not found.')
                error.status = 404
                throw error
            }

            return profile
            
        } catch (err) {
            const error = new Error(err.message || 'Service error.');
            error.status = 500;
            throw error;
        }
    }
}

module.exports = new ProfileService();