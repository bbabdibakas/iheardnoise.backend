const fs = require('fs').promises;

class FileService {
    // Asynchronous file reading using fs.promises
    async readFileAsync(path) {
        try {
            const data = await fs.readFile(path, { encoding: 'utf-8' });
            return data;
        } catch (err) {
            const error = new Error(`Error reading file at ${path}: ${err.message}`);
            error.status = 500;
            throw error;
        }
    }
}

module.exports = new FileService();
