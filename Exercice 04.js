/*⚠️ NE MODIFIEZ PAS LE NOM DES DÉCLARATIONS ⚠️*/
/*4️⃣ EXERCICE 04 4️⃣*/

// ⛔️ Remember that you must use the global object "Math".

function square(num) {
   // Returns the value of "num" squared (Renvoie la valeur de "num" au carré).
   // YOur code:
   return Math.pow(num, 2);
}

console.log(square(25));

function raiseToCube(num) {
   // Returns the value of "num" cubed.
   // Your code:
   return Math.pow(num, 3);
}

console.log(raiseToCube(2));

function raise(num, exponent) {
   // Returns the value of "num" raised to the exponent "exponent".
   // Your code:.
   return Math.pow(num, exponent);
}

console.log(raise(2, 5));

function roundNumber(num) {
   return Math.round(num);
}

console.log(roundNumber(6.84));

function randomnumber() {
   // Generate a random number between 0 and 10 and return it.
   // Your code :
   randomNum = Math.floor(Math.random() * 10);
   return randomNum;
}

console.log(randomnumber());

