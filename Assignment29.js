// Assignment-JS-29:
// Write a JavaScript function to remove the first occurrence
// of a given 'search string' from a string.

let remove1 = (str, subStr) => str.replace(subStr + " ", "");

console.log(
    remove1(
        "Full stack developers handle both the frontend and backend of an app or a website. It even needs to have knowledge about the database.",
        "the"
    )
);
