require('es6-promise');
'use strict';

function parsePromised(value) {
    return new Promise(function (fulfil, reject) {
        try {
            fulfil(JSON.parse(value));
        } catch (e) {
            reject(e);
        }
    });
}

parsePromised(process.argv[2]).then(null, console.log);
