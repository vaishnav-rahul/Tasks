function reverseNumber(number) {
    // Convert the number to a string
    const str = number.toString();
    // Split the string into an array of characters, reverse the array, and join it back into a string
    const reversedStr = str.split('').reverse().join('');
    // Convert the reversed string back to a number
    const reversedNumber = parseInt(reversedStr, 10);
    return reversedNumber;
}

// Sample data and output
const x = 32243;
console.log("Expected Output: " + reverseNumber(x)); // Expected Output: 34223
