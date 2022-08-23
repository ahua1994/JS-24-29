// Assignment-JS-27:
// Write a JavaScript function to hide email addresses to protect them
//from unauthorized users.
//Hint: Just display half of the characters before the @ sign in the email address
// Example:
// func(“barry@clarusway.com”)
// Output:
// “ba***@clarusway"

let hideEmail = (email) => {
    let hidden = email.split("@");
    let user = "";
    for (let i = 0; i < hidden[0].length; i++) {
        i < hidden[0].length / 2 - 1 ? (user += hidden[0][i]) : (user += "*");
    }
    return user + "@" + hidden[1];
};

console.log(hideEmail("johndoe@clarusway.com"));
