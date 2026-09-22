console.log("=== STRING OPERATIONS CASE STUDY ===\n");

// ============================================
// PART A: Basic String Operations
// ============================================

console.log("PART A: BASIC STRING OPERATIONS");
console.log("================================\n");

// 1. substring() - Extracts characters between two indices
const text1 = "JavaScript Programming";
console.log("1. substring() Method:");
console.log("   Original: " + text1);
console.log("   substring(0, 10): " + text1.substring(0, 10));
console.log("   substring(11): " + text1.substring(11));
console.log();

// 2. indexOf() - Returns the index of first occurrence
const text2 = "Learn JavaScript, JavaScript is awesome!";
console.log("2. indexOf() Method:");
console.log("   Original: " + text2);
console.log("   indexOf('JavaScript'): " + text2.indexOf("JavaScript"));
console.log("   indexOf('Python'): " + text2.indexOf("Python")); // Returns -1 if not found
console.log();

// 3. split() - Splits string into array
const text3 = "apple,banana,orange,mango";
console.log("3. split() Method:");
console.log("   Original: " + text3);
console.log("   split(','): ", text3.split(","));
const sentence = "JavaScript is fun";
console.log("   Sentence: " + sentence);
console.log("   split(' '): ", sentence.split(" "));
console.log();

// 4. replace() - Replaces specified value with another
const text4 = "I love Python programming";
console.log("4. replace() Method:");
console.log("   Original: " + text4);
console.log("   replace('Python', 'JavaScript'): " + text4.replace("Python", "JavaScript"));
const text5 = "cat bat cat rat";
console.log("   Original: " + text5);
console.log("   replace('cat', 'dog'): " + text5.replace("cat", "dog")); // Only replaces first
console.log("   replaceAll('cat', 'dog'): " + text5.replaceAll("cat", "dog")); // Replaces all
console.log();

// ============================================
// PART B: Case Study Solutions
// ============================================

console.log("\n\nPART B: CASE STUDY SOLUTIONS");
console.log("================================\n");

// ============================================
// CASE STUDY 1: Program to reverse a string
// ============================================

console.log("CASE STUDY 1: REVERSE A STRING");
console.log("-------------------------------\n");

// Method 1: Using built-in methods (split, reverse, join)
function reverseString1(str) {
    return str.split("").reverse().join("");
}

// Method 2: Using for loop (traditional approach)
function reverseString2(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Method 3: Using recursion
function reverseString3(str) {
    if (str === "") {
        return "";
    }
    return reverseString3(str.substr(1)) + str[0];
}

// Method 4: Using reduce
function reverseString4(str) {
    return str.split("").reduce((reversed, char) => char + reversed, "");
}

// Test all methods
const testString = "JavaScript";
console.log("Original String: " + testString);
console.log("\nMethod 1 (split-reverse-join): " + reverseString1(testString));
console.log("Method 2 (for loop): " + reverseString2(testString));
console.log("Method 3 (recursion): " + reverseString3(testString));
console.log("Method 4 (reduce): " + reverseString4(testString));

// More test cases
console.log("\n--- Additional Test Cases ---");
const testCases = ["Hello World", "12345", "A man a plan a canal Panama"];
testCases.forEach(test => {
    console.log(`"${test}" => "${reverseString1(test)}"`);
});

// ============================================
// CASE STUDY 2: Count vowels in a paragraph
// ============================================

console.log("\n\nCASE STUDY 2: COUNT VOWELS IN A PARAGRAPH");
console.log("-------------------------------------------\n");

// Method 1: Using for loop and includes
function countVowels1(paragraph) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    
    for (let char of paragraph) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    
    return count;
}

// Method 2: Using regular expression
function countVowels2(paragraph) {
    const matches = paragraph.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

// Method 3: Using filter and includes
function countVowels3(paragraph) {
    const vowels = "aeiouAEIOU";
    return paragraph.split("").filter(char => vowels.includes(char)).length;
}

// Method 4: Count individual vowels
function countVowelsDetailed(paragraph) {
    const vowelCounts = {
        a: 0, e: 0, i: 0, o: 0, u: 0
    };
    
    const lowerPara = paragraph.toLowerCase();
    
    for (let char of lowerPara) {
        if (vowelCounts.hasOwnProperty(char)) {
            vowelCounts[char]++;
        }
    }
    
    const total = Object.values(vowelCounts).reduce((sum, count) => sum + count, 0);
    
    return {
        total: total,
        breakdown: vowelCounts
    };
}

// Test paragraph
const paragraph = "JavaScript is a versatile programming language used for web development. " +
                  "It allows developers to create interactive and dynamic websites. " +
                  "Learning JavaScript opens up many opportunities in the tech industry.";

console.log("Test Paragraph:");
console.log(paragraph);
console.log("\n--- Results ---");
console.log("Method 1 (for loop + includes): " + countVowels1(paragraph) + " vowels");
console.log("Method 2 (regex): " + countVowels2(paragraph) + " vowels");
console.log("Method 3 (filter): " + countVowels3(paragraph) + " vowels");

console.log("\nDetailed Vowel Count:");
const detailedResult = countVowelsDetailed(paragraph);
console.log("Total Vowels: " + detailedResult.total);
console.log("Breakdown:");
console.log("  A: " + detailedResult.breakdown.a);
console.log("  E: " + detailedResult.breakdown.e);
console.log("  I: " + detailedResult.breakdown.i);
console.log("  O: " + detailedResult.breakdown.o);
console.log("  U: " + detailedResult.breakdown.u);

// Additional test cases
console.log("\n--- Additional Test Cases ---");
const testParagraphs = [
    "Hello World",
    "AEIOU aeiou",
    "Programming is fun!",
    "The quick brown fox jumps over the lazy dog"
];

testParagraphs.forEach(text => {
    console.log(`"${text}" => ${countVowels1(text)} vowels`);
});

// ============================================
// BONUS: Combined String Operations Demo
// ============================================

console.log("\n\nBONUS: COMBINED STRING OPERATIONS");
console.log("===================================\n");

function stringAnalysis(input) {
    console.log("Input String: \"" + input + "\"");
    console.log("Length: " + input.length);
    console.log("Uppercase: " + input.toUpperCase());
    console.log("Lowercase: " + input.toLowerCase());
    console.log("Reversed: " + reverseString1(input));
    console.log("Vowel Count: " + countVowels1(input));
    console.log("Words: ", input.split(" "));
    console.log("First 10 chars: " + input.substring(0, 10));
    console.log("Replace 'a' with '@': " + input.replaceAll('a', '@').replaceAll('A', '@'));
    console.log();
}

stringAnalysis("JavaScript is Amazing and Powerful");

console.log("\n=== END OF CASE STUDY ===");
