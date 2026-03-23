'use strict';

const config = {
    app: {
        name: 'CodeSync',
        port: process.env.PORT || 3000,
    },
    db: {
        uri: process.env.DB_URI || 'mongodb://localhost:27017/codesync',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    },
    logging: {
        level: process.env.LOG_LEVEL || 'info',
    },
};

module.exports = config;
