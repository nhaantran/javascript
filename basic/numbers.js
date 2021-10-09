let x = 123e5; // x = 123*10^5
console.log((100+23).toString());
let x1 = 9.656;
console.log(x1.toFixed(0));
console.log(x1.toFixed(1));
console.log(x1.toFixed(2));


// tofixed(2) is perfect for working with money


// Number(true);          // returns 1
// Number(false);         // returns 0
// Number("10");          // returns 10
// Number("  10");        // returns 10
// Number("10  ");        // returns 10
// Number(" 10  ");       // returns 10
// Number("10.33");       // returns 10.33
// Number("10,33");       // returns NaN
// Number("10 33");       // returns NaN
// Number("John");        // returns NaN

console.log(parseInt('-10 years!'));
console.log(parseFloat('years 10!'));