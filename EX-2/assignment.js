1// Using console.log() print out the following statement: (The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.)

console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

2//Using console.log() print out the following quote by Mother Teresa:("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

3// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

const strNumber = '10';
const numNumber = 10;

const parsedNumber = parseInt(strNumber, 10); 

if (parsedNumber === numNumber) {
    console.log('Equal to 10');
} else {
    console.log('Not equal to 10');
}

4// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
// parseFloat('9.8'): The parseFloat() function parses a string argument and returns a floating point number. In this case, '9.8' is a string literal, so parseFloat('9.8') will evaluate to the floating point number 9.81.

const ParsedNumber = parseFloat('9.8');
const adjustedNumber = 10;

if (parsedNumber !== adjustedNumber) {
    console.log(`Adjusted value: ${adjustedNumber}`);
} else {
    console.log('No adjustment needed; already equal to 10');
}

5// Check if 'on' is found in both python and jargon
let python = "python"
let jargon = "a programmer's jargon"
console.log(python.includes("on"));
console.log(jargon.includes("on"));

6// I hope this course is not full of jargon. Check if jargon is in the sentence. in java script

const sentence = "I hope this course is not full of jargon.";
const searchTerm = "jargon";

if (sentence.includes(searchTerm)) {
    console.log("The word 'jargon' is found in the sentence.");
} else {
    console.log("The word 'jargon' is not found in the sentence.");
}

7// Generate a random number between 0 and 100 inclusively.
console.log("import random")
random_number = random.radiant(0, 100);
console.log(random_number);

8// Generate a random number between 50 and 100 inclusively.
console.log("import random")
random_number = random.radiant(50, 100);
console.log(random_number);

9// Generate a random number between 0 and 255 inclusively.
console.log("import random")
random_number = random.radiant(0, 255);
console.log(random_number);

10// Access the 'JavaScript' string characters using a random number

const str = 'JavaScript';
const randomIndex = Math.floor(Math.random() * str.length);
const randomChar = str[randomIndex];

console.log(`Random character from 'JavaScript': ${randomChar}`);

11// Use console.log() and escape characters to print the following pattern.

// Define the number of rows for the pattern
const numRows = 5;

// Outer loop for rows
for (let i = 1; i <= numRows; i++) {
    let row = ''; // Initialize an empty string for each row

    // Inner loop for columns within the row
    for (let j = 1; j <= numRows + 1; j++) {
        // Calculate the value based on the row and column indices
        const value = i === 1 ? j : Math.pow(i, j - 1);

        // Append the value to the row string
        row += value + ' ';
    }

    // Print the row
    console.log(row);
}

12// Use substr to slice out the phrase because because because from the following sentence:
//'You cannot end a sentence with because because because is a conjunction'

