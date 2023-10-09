/*⚠️ NE MODIFIEZ PAS LE NOM DES DÉCLARATIONS ⚠️*/

/*2️⃣ EXERCICE 2️⃣*/

function returnString(string) {
   // Must return a string.
   // Your code:
   return string;
}
console.log(returnString('berlin'));

// ⛔️ "X" and "Y" are numbers.

const response = 'the result of the';
const operation = ['addition', 'subtraction', 'division', 'multiplication', 'remainder'];

function sum(x, y) {
   // Return the result of their sum.
   // Your code:
   return `${response} ${operation[0]} "${x + y}" `;
}

console.log(sum(25, 5));

function sub(x, y) {
   // Return the result of their subtraction.
   // Your code:
   return `${response} ${operation[1]} "${x - y}" `;
}

console.log(sub(25, 5));

function divide(x, y) {
   // Return the result of your division.
   // Your code:
   return `${response} ${operation[2]} "${x / y}" `;
}

console.log(divide(25, 5));

function multiply(x, y) {
   // Return the result of your multiplication.
   // Your code:
   return `${response} ${operation[3]} "${x * y}" `;
}

console.log(multiply(25, 5));


function getRest(x, y) {
   //Find the remainder of the division of "x" by "y".
   // Your code:
   return `${response} ${operation[4]} "${x % y}" `;
}

console.log(getRest(25, 5));

 