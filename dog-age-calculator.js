
// process.argv is a property in Node.js that returns an array containing the command-line arguments passed when the Node.js process was launched. 
// process.argv[0]: path to Node.js
// process.argv[1]: path to js file
// Process command line arguments excluding the first two elements (process.argv[0] and process.argv[1]), and stores them in the args array.
const args = process.argv.slice(2);

// Check if the required arguments are provided
if (args.length < 2) {
  console.log("Usage: node dog-age-calculator.js <dog_name> <human_age>");
} else {
  // Extract dog name and human age from the command line arguments
  const dogName = args[0];
  const humanAge = parseInt(args[1]);

  // Calculate dog age using the provided rules
  let dogAge;
  if (humanAge === 1) {
    dogAge = 15;
  } else if (humanAge === 2) {
    dogAge = 15 + 9;
  } else {
    dogAge = 15 + 9 + (humanAge - 2) * 5;
  }

  // Output the result
  console.log(`Your dog, ${dogName}, is ${humanAge} years old, but that's ${dogAge} years old in dog years!`);
}
