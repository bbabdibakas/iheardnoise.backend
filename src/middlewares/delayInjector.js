// to simulate delay using timeout
function delayInjector(req, res, next) {
    setTimeout(() => {
        next();
    }, 2000);
}

module.exports = delayInjector;