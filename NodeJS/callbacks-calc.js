var prompt = require('prompt');

// 
// Start the prompt 
// 
prompt.start();


let add = function (a, b) {
    console.log('The SUM of these two numbers ' + a + ' and ' + b + ' is:');
    return (parseInt(a) + parseInt(b));
};

let multiply = function (a, b) {
    console.log('The PRODUCT of these 2 numbers ' + a + ' and ' + b + ' is:');
    return a * b;
};

let calc = function (num1, num2, callback) {
    if (typeof callback === 'function') {
        return callback(num1, num2);
    }
};


// Get two properties from the user: username and email  
prompt.get(['first_number', 'second_number'], function (err, result) {

    // Log the results. 

    console.log('  Command-line input received:');
    console.log('  First: ' + result.first_number);
    console.log('  Second: ' + result.second_number);

    console.log(calc(result.first_number, result.second_number, add));
    console.log(calc(result.first_number, result.second_number, multiply));
});
