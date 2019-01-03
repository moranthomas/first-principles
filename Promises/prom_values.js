require('es6-promise');
'use strict';

var firstPromise = new Promise(function (resolve, reject) {
    resolve('MANHATTAN');
});


/*var secondPromise = firstPromise.then(function (val) {
    return attachTitle().then(console.log);
});
*/


function attachTitle(argument) {
    return ['DR. ', argument].join('');
}

firstPromise.then(attachTitle).then(console.log);
