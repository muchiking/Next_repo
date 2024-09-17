export function printObj(myObject:object){
console.log("Using console.log:");
console.log(myObject);

console.log("Using console.dir:");
console.dir(myObject);

console.log("Using JSON.stringify:");
console.log(JSON.stringify(myObject, null, 2));

console.log("Using %o in console.log:");
console.log("My object: %o", myObject);

}