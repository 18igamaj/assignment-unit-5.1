console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  // TODO - add properties here
  //I am creating an object literal about myself
  //Don't see why we are not making our variables into two words
  // Wouldn't firstname also work as 'First name' in an object?
  firstName : 'Majid',
  lastName : 'Igale',
  hasSiblings : true,
  shoeCount : 5,
  favThreeFoods : ['Shawarma', 'Chicken', 'Banana']
};
console.log('A little about me:', me);

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
  
*/
let fullName = me.firstName + ' ' + me.lastName;
console.log('Hi, my name is;', fullName);


// Added a space inside my first name and lastname using plus.

/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/
console.log('My first choice to eat is:',me.favThreeFoods[0]);
console.log('If I cannot find anything, I will just grab a:', me.favThreeFoods[2]);
//Just accessed my favorite foods array!

/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/
 console.log('This is how many shoes i own:', me.shoeCount);
 
me.shoeCount = me.shoeCount + 1;

 console.log('Omg I got new shoes, so now I have', me.shoeCount);

// Okay, what would happen if I created a new variable for shoecount called
//'newShoes' and equalled it to 'me.shoeCount + 1' and called that in my console

/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/
 
me.favoriteColor = 'Blue';
console.log(me);
