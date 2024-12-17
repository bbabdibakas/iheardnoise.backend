const profileService = require('../services/profileService');

class ProfileController {
    async getProfileById(req, res, next) {
        try {
            const id = req.params.id

            if (!id) {
                const error = new Error('Profile id is required.')
                error.status = 400
                throw error
            }

            const profileData = await profileService.getProfileById(id);

            return res.json(profileData);
        } catch (error) {
            return next(error);
        }
    }
}

module.exports = new ProfileController()