/*Write a function called appendToString, which accepts two strings.

The function should return a new string which consists of the second string appended to the first string.

Examples:

appendToString("Hello", " World!"); // "Hello World!"

appendToString("Foo", "bar"); // "Foobar"

appendToString("bar", "Foo"); // "barFoo"

appendToString("", "test"); // "test"

appendToString("other test", ""); // "other test"
*/

const appendToString = ((a, b) => a.concat(b))
console.log(appendToString("Hello", " World!"))