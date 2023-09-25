
//Observe: no return type, no type on parameters
function add(n1, n2){
   return n1 +n2;
}

const sub = function(n1,n2){
  return n1 - n2
} 


const cb = function(n1, n2, callback) {
  try {
    if (typeof n1 !== 'number' || typeof n2 !== 'number' || typeof callback !== 'function') {
      throw new Error('All three arguments must be provided: n1, n2, and a callback function.');
    }

    return "Result from the two numbers: " + n1 + " and " + n2 + " = " + callback(n1, n2);
  } catch (error) {
    return error.message; // Return the error message if an error occurs
  }
};

console.log(add(1, 2)); // Output: 3
// This will call the `add` function with arguments 1 and 2, so it will print the result of 1 + 2, which is 3.

console.log(add); // Output: [Function: add]
// Here, `add` represents the function itself. It will print "[Function: add]" to the console, indicating that `add` is a function.

console.log(add(1, 2, 3)); // Output: 3
// This will call the `add` function with three arguments. It will use the first two arguments (1 and 2) and ignore the third argument (3).
// So, it will print the result of 1 + 2, which is 3.

console.log(add(1)); // Output: NaN
// This will call the `add` function with only one argument (1). Since the `add` function expects two arguments, and the second argument is missing, it will return NaN (Not-a-Number).

console.log(cb(3, 3, add)); // Output: Result from the two numbers: 3 + 3 = function add(n1, n2) { return n1 + n2; }
// This will call the `cb` function with the arguments (3, 3, add). 
// It will check that all arguments meet the specified criteria and then return a string that includes the result of adding 3 + 3, followed by the `add` function itself.

console.log(cb(4, 3, sub)); // Output: Result from the two numbers: 4 + 3 = function (n1,n2) { return n1 - n2 }
// Similar to the previous case, it will call the `cb` function with the arguments (4, 3, sub). It will return a string that includes the result of adding 4 + 3, followed by the `sub` function itself.

// console.log(cb(3, 3, add())); // Output: TypeError: callback is not a function
// This will throw an error because you are trying to call the `add` function without providing arguments when passing it to the `cb` function.

console.log(cb(3, "hh", add)); // Output: Error: All three arguments must be provided: n1, n2, and a callback function.
// This will throw an error because the second argument is not a number, and it fails the criteria check in the `cb` function.



function addVersion2(n1, n2, ...rest){
  return n1 +n2 + rest.reduce((acc,cur)=> acc +cur)
}
console.log(addVersion2(1,2,3,4,5,6))

function mul(n1, n2){
  return n1 * n2;
}

//console.log(cb(3, 3, mul));

console.log(cb(10, 2, function(n1, n2){
  return n1 / n2;
}));

const names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];
const filteredNames = names.filter(name => name.length <= 3);

console.log("Names: ");
console.log(names.forEach(name => console.log(name)));

console.log("Filtered names: ");
console.log(filteredNames.forEach(name => console.log(name)));

const uppercasedNames = names.map(name => name.toUpperCase());
console.log("Uppercased names: ");
console.log(uppercasedNames.forEach(name => console.log(name)));

