var arr = [1,2,3,4,5,6,7];

/*Array functions */

//1. toString(): converts an array to a string of array values.
console.log(arr.toString());

//2. pop():  returns the value that was "popped out":
console.log(arr.pop());

//3. push(): adds a new element to an array (at the end): returns the new array length
console.log(arr.push(88));

//4. shift(): removes the first array element and "shifts" all other elements to a lower index.
console.log(arr.shift());

//5. unshift(): adds a new element to an array (at the beginning),and "unshifts" older elements
console.log(arr.unshift(1));

//6. length property
console.log(`The length of the array is ${arr.length}`);

//7. concat(): does not change the existing arrays. It always returns a new array.
str = ['Kunel', 'Amlen'];
str2 = ['Bhargav', 'Rahul'];
str3 = str.concat(str2);
console.log(str3);