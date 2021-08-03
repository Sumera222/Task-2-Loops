/*Work on the problem above to dynamically print the name of each animal
 and prepend it with ‘this is’ conditionally. Print ‘something else’ 
 if the name doesn’t equal any of the names in the list.*/

let animal2= ['cat', 'rabbit', 'pigeon', 'parrot', 'goldfish'];
var i = 0 ;

do {
     
    console.log("this is ", animal2[i]);
    i++ 
    
} while(animal2[i] !== undefined);
if(i>4) {
console.log("this is something else");
}