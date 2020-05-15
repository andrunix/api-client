'use strict';
const axios = require('axios');

const query = async (url) => {
    try {
        const result = await axios.get(url);
        return result.data;
    } catch (err) {
        console.log(`********* Error calling ${url} **********`);
        console.log(err);
    };
};

const run = async () => {
    // call a test api
    const TIMEAPI = `http://worldtimeapi.org/api/timezone/America/New_York`;
    return await query(TIMEAPI);
};

module.exports = {
    run
};
