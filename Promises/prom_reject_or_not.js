require('es6-promise');
'use strict';

var promise = new Promise(function (fulfill, reject) {
    setTimeout(function () {
        fulfill('I FIRED');
        reject(new Error('I DID NOT FIRE'))
    }, 300);
});

function onRejected(error) {
    console.log(error.message);
}


promise.then(console.log, onRejected);
