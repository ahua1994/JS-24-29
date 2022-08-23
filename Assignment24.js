//Assignment-JS-24:
//A palindrome word is a sequence of characters that reads the same backward as forward, such as madam, racecar.
//Define a function to check whether a word is a palindrome or not.

function palindrome(str) {
    let palin = str.replace(/\s/g, "").toLowerCase();
    for (let i = 0; i < palin.length; i++) {
        if (palin.charAt(i) != palin.charAt(palin.length - i - 1)) {
            return false;
        }
    }
    return true;
}

//gets tricky with punctuation or symbols, can solve
//by matching only letters with regex, but we are not there yet

console.log(palindrome("This is not a palindrome"));
console.log(palindrome("Never  odd   or   even"));
