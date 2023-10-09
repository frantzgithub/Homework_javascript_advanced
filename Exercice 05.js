/*⚠️ NE MODIFIEZ PAS LE NOM DES DÉCLARATIONS ⚠️*/
/*5️⃣ EXERCICE 05 5️⃣*/



function isPositive(num) {
   // The function receives an integer. Returns as a result a string that indicates whether the number
   // is positive or negative.
   // If the number is positive ---> "It is positive."
   // If the number is negative ---> "It is negative."
   // If the number is 0, return false.
   // Your code:
   if(num > 0){
       return "It is positive";
   }else if(num == 0){
       return false;
   }else{
       return "It is negative";
   }
}

console.log(isPositive(-1335156160));

function addSymbolExclamation(str) {
   // Add an exclamation mark to the end of the string "str" ​​and return it
   // Example: "hello world" ---> "hello world!"
   // Your code:
   return `${str} !`;
}

console.log(addSymbolExclamation("hello world"));

function combineNames(firstName, LastName) {
   // Returns "first name" and "last name" combined in the same string but separated by a space.
   // Example: ("Webster", "Fever") ---> "Fever Webster"
   // Your code:
   return LastName+" "+firstName;
}

console.log(combineNames("berlin", "rosalva"));

function getGreeting(name) {
   // Take the string "name" and concatenate another string into the string so that it takes the following form:
   // Example: "Martin" ---> "Hello Martin!"
   // Your code:
   return `hello ${name}!`;
}

console.log(getGreeting("Berlin"));

function getRectangleArea(Height, width) {
   // Return the area of ​​a rectangle having its height and width.
   // Your code:
   const result = Height * width;
   return `the area of the rectangle is ${result}km²`;
}

console.log(getRectangleArea(25, 10));

function returnPerimeter(side) {
  // The function receives as an argument the measurement of one side of a square.
   // You must return its perimeter.
   // Your code:
   const per = side * 4;
   return `the perimeter of the square is ${per}m`;
}

console.log(returnPerimeter(8));

function trianglearea(base, height) {
    // Calculates the area of ​​a triangle and returns the result.
   // Your code:
   const area = (base * height) / 2;
   return `the area of the triangle is ${area}m²`;
}

console.log(trianglearea(9, 3));

function FromEuroToDollar(euro) {
   // Suppose that 1 euro is equivalent to 1.20 dollars.
   // You must calculate the value received as an argument, converting it to dollars.
   // Your code:
   const convert = (euro * 106) / 100;
   if(euro === 1){
       return `${euro} euro is equivalent to ${convert} dollars`;
   }else{
       return `${euro} euros is equivalent to ${convert} dollars`;
   }
}

console.log(FromEuroToDollar(200));

function isVowel(letter) {
   // Write a function that takes a letter and, if it is a vowel, displays the message “It is a vowel.”
   // If the user enters a string of more than one character you must return the message: "Incorrect data".
   // If it is not a vowel, it must also return "Incorrect data".
   // Your code:
   if(letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u"){
       return "It is a vowel";
   }else if(letter == "A" || letter == "E" || letter == "I" || letter == "O" || letter == "U"){
       return "It is a vowel";
   }else{
       return "Incorrect data";
   }
}

console.log(isVowel("O"));

