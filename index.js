'use strict';
const api = require('./api');

const start = async () => {
    console.log('Calling api');
    try {
        const result = await api.run();
        console.log(result);
        console.log('Done');
    } catch (err) {
        console.log(err);
        process.exit(1);
    };
};

start();
