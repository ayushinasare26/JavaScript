//Ayushi Nasare   24070521174
const numbers = [12, 45, 2, 89, 34, 67, -5, 23];
console.log(`Original Array: [${numbers.join(', ')}]\n`);

const maxReduce = numbers.reduce((max, num) => num > max ? num : max, numbers[0]);
const minReduce = numbers.reduce((min, num) => num < min ? num : min, numbers[0]);
console.log(`1. Using reduce()  -> Max: ${maxReduce}, Min: ${minReduce}`);

let maxForEach = numbers[0];
let minForEach = numbers[0];
numbers.forEach(num => {
    if (num > maxForEach) maxForEach = num;
    if (num < minForEach) minForEach = num;
});
console.log(`2. Using forEach() -> Max: ${maxForEach}, Min: ${minForEach}`);

let maxMap = numbers[0];
let minMap = numbers[0];
numbers.map(num => {
    if (num > maxMap) maxMap = num;
    if (num < minMap) minMap = num;
    return num;
});
console.log(`3. Using map()     -> Max: ${maxMap}, Min: ${minMap}`);

let maxFilter = numbers[0];
let minFilter = numbers[0];
numbers.filter(num => {
    if (num > maxFilter) maxFilter = num;
    if (num < minFilter) minFilter = num;
    return false;
});
console.log(`4. Using filter()  -> Max: ${maxFilter}, Min: ${minFilter}\n`);

console.log("=== Demonstrating Array Manipulation Methods ===");

let demoArray = [...numbers];

demoArray.push(100);
console.log(`push(100)       -> Added 100 to end   -> [${demoArray.join(', ')}]`);

const poppedElement = demoArray.pop();
console.log(`pop()           -> Removed ${poppedElement} from end -> [${demoArray.join(', ')}]`);

demoArray.unshift(999);
console.log(`unshift(999)    -> Added 999 to front -> [${demoArray.join(', ')}]`);

const shiftedElement = demoArray.shift();
console.log(`shift()         -> Removed ${shiftedElement} from front-> [${demoArray.join(', ')}]`);

const slicedSegment = demoArray.slice(1, 4);
console.log(`slice(1, 4)     -> Extracted section  -> [${slicedSegment.join(', ')}]`);
console.log(`                -> (demoArray stays)  -> [${demoArray.join(', ')}]`);

demoArray.splice(2, 2, 777);
console.log(`splice(2, 2, 777)-> Replaced elements  -> [${demoArray.join(', ')}]`);
