//Assignment-JS-26:
//Write a JavaScript function to convert a string into an abbreviated form.
// Example:
// func(“John Doe Marcus”)
// Output:
// “John D."   (Doe Marcus  is abbreviated as D.

let abbrev = (str) => {
    let names = str.split(" ");
    return `${names[0]} ${names[1].charAt(0)}.`;
};

console.log(abbrev("John Doe Marcus"));
