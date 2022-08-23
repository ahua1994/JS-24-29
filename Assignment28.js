//Assignment-JS-28:
// Write a JavaScript function to convert a string into a title format
//(The first letters of each word should be in capital letters)

let capitalize = (str) => {
    let words = str.split(" ");
    let title = "";
    for (let i = 0; i < words.length; i++) {
        title += words[i][0].toUpperCase() + words[i].slice(1) + " ";
    }
    return title;
};

console.log(capitalize("his name was robert paulson"));
