let randomtext1 = 'Hello, my name is "Nhan"!';
let randomtext2 = "Hello, my name is 'Nhan'!";
let randomtext3 = `Hello, my name is "Nhan'!`;
// console.log(randomtext1);
// console.log(randomtext2);
// console.log(randomtext3);

// Code	Result
// \b	Backspace
// \f	Form Feed
// \n	New Line
// \r	Carriage Return
// \t	Horizontal Tabulator
// \v	Vertical Tabulator


// -------------------------------------------------------------string methods

// console.log(randomtext1.length);
// console.log(randomtext2.slice(7,14));
// console.log(randomtext3.substr(7,7));
let randomtext4 = randomtext3.replace('Nhan','nhaantran');
// console.log(randomtext4);
// console.log(randomtext4.toUpperCase());

// concat

let randomtext5 = randomtext4.concat(" ", 'This is an example for how to use concat!');
// console.log(randomtext5);

// console.log(randomtext5.trim()); // eliminate space from both sides

// -------------------------------------------------------------string search
// indexOf() ; lastIndexOf() ; startsWith() ; endsWith() 

console.log(randomtext5.search(/ello/));
console.log(randomtext5.includes('elllo'));

// ${variable}