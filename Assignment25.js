//Assignment-JS-25:
//Write a JavaScript function to extract a specified number of
//characters from a string.
//Example:
//func("Clarusway",6)
//Output:
//“Clarus"

let cutStr = (str, chars) => str.slice(0, chars);

console.log(cutStr("Clarusway", 6));
