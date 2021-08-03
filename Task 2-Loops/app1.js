/*Suppose you are given an array: [1, 8, 7, 3, 2, 9, 10, 12].
 You need to find out whether a number is prime or not 
 (Hint: a prime number is a number that is divisible by 1 and itself).
  What approach would you take to do that?
 Support it with the relevant code.*/
let array = [1, 8, 7, 3, 2, 9, 10, 12];

for(var i=0;i<array.length;i++) {
    var result = array[i] %2;
    if(result == 0) {
        console.log(array[i] , "It is not a Prime Number");
        
    }
    else {
        console.log(array[i] ,"It is a Prime Number")
    }
}