function typeChecker(a, b) {
  if(typeof a === 'string' && typeof b === 'string') {
    return "I LOVE YOU";
  }else if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }else if (typeof a !== typeof b) {
    return "NOT MATCHED";
  }
}

// Test cases
const a1 = "Jack";
const b1 = "Rose";
const a2 = 555;
const b2 = 100;
const a3 = "Jack";
const b3 = 100;

console.log(typeChecker(a1, b1)); // I LOVE YOU
console.log(typeChecker(a2, b2)); // 655
console.log(typeChecker(a3, b3)); // NOT MATCHED

module.exports = typeChecker;

/*รหัสนศ. 660610791

ชื่อ-นามสกุล : รัฟฟาน วันอิดริส*/
