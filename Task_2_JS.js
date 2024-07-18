function alphabetizeString(str) {
    // Convert the string to an array of characters, sort the array, and join it back into a string
    const sortedStr = str.split('').sort().join('');
    return sortedStr;
}

// Sample data and output
const exampleString = 'webmaster';
console.log("Expected Output: " + alphabetizeString(exampleString)); // Expected Output: 'abeemrstw'
