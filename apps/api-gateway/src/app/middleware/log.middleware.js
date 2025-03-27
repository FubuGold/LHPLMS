const LoggingMiddleware = (req, res, next) => {
    const start = Date.now();

    res.on('finish', () => {
        console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
        console.log('Headers:', req.headers);
        console.log('Query Params:', req.query);
        console.log('Body:', req.body);
    });

    next();
};

module.exports = { LoggingMiddleware };
