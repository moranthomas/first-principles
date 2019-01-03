let x = function () {
    console.log("I am the callback function x and I am being called from inside the y function");
};

let y = function (callback) {
    console.log('I am function y getting called');
    //Now call the callback function that was specified in the passed in arguments (in this case x)
    callback();
}


//call it.
y(x);
