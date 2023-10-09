/*⚠️ NE MODIFIEZ PAS LE NOM DES DÉCLARATIONS ⚠️*/
/*3️⃣ EXERCICE 3️⃣*/

function areEqual(x, y) {
   // Returns true if "x" and "y" are equal.
   // Otherwise it returns false.
   // Your code:
   if(x === y){
       return true;
   }else{
       return false;
   }
}

console.log(areEqual(4, 4));

function HaveTheSameLength(str1, str2) {
   // Returns true if the two strings have the same length.
   // Otherwise it returns false.
   // Your code:
   if(str1.length === str2.length) {
       return true;
   }else{
       return false;
   }
}

console.log(HaveTheSameLength('cam', 'bon'));

function lessThanNinety(num) {
   // Returns true if the argument "num" is less than ninety.
   // Otherwise it returns false.
   // Your code:
   if(num < 90){
       return true;
   }else{
       return false;
   }
}

console.log(lessThanNinety(9));

function greaterthanfifty(num) {
   // Returns true if the argument "num" is greater than fifty.
   // Otherwise it returns false.
   // Your code:
   if(num > 50){
       return true;
   }else{
       return false;
   }
}

console.log(greaterthanfifty(80));

function isEven(num) {
   // Returns true if "num" is even.
   // Otherwise it returns false.
   // Your code:
   if(num % 2 == 0){
       return true;
   }else{ 
       return false;
   }
}

console.log(isEven(8));

function isOdd(num) {
   // Returns true if "num" is odd.
   //Otherwise it returns false.
   //YOur code:
   if(num % 2 == 1){
       return true;
   }else{
       return false;
   }
}

console.log(isOdd(7));
