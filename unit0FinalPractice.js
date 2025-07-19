/*
Unit 0 Project: Pathfinder - Course & Career Planner
Pseudocode:
1. Ask the user for their academic interest using readline-sync.
2. Store that input using the correct data type.
3. Define an array of major objects, each with relevant interests and careers.
4. Loop through the majors to find matches with the user’s interest.
5. Use conditionals to display recommended majors and careers.
6. Test outputs using console.log.
*/
// Import readline-sync to simulate user input
const readlineSync = require("readline-sync");

// Welcome message uses escaped characters for formatting
console.log("Welcome to Pathfinder!\nYour Smart Course & Career Planner!");

// Values, Data Types, and Operations
// Using a string variable to store user input
let studentInterest = readlineSync.question("What is your academic interest? ");
console.log("You entered:", studentInterest); // user sees their input

// Building Arrays
// An array of objects, each representing a major with associated interests and careers
let majors = [
  {
    majorName: "Computer Science",
    interests: ["technology", "problem-solving"],
    careers: ["Software Engineer", "Data Scientist"]
  },
  {
    majorName: "Psychology",
    interests: ["people", "behavior"],
    careers: ["Therapist", "HR Specialist"]
  },
  {
    majorName: "Business",
    interests: ["management", "finance"],
    careers: ["Accountant", "Business Analyst"]
  },
  {
    majorName: "Chemistry",
    interests: ["science", "experimentation"],
    careers: ["Chemist", "Pharmaceutical Researcher"]
  },
  {
    majorName: "Biology",
    interests: ["life sciences", "research"],
    careers: ["Biologist", "Healthcare Professional"]
  },
  {
    majorName: "Physics",
    interests: ["science", "theory"],
    careers: ["Physicist", "Engineer"]
  },
  {
    majorName: "Mathematics",
    interests: ["numbers", "math"],
    careers: ["Statistician", "Actuary"]
  }
];
// Working with Loops
// Loop through the majors array to check for a matching interest
for (let i = 0; i < majors.length; i++) {
  let major = majors[i];

  // Using Arrays
  // Check if the student's interest is included in the major's interest list
  if (major.interests.includes(studentInterest.toLowerCase())) {
    
    // Control Structures and Logic
    // Use conditional logic to display recommendations
    console.log(`Recommended Major: ${major.majorName}`);
    
    // Stringing Characters Together
    // Use template literals to create dynamic output
    console.log(`Matching Careers: ${major.careers.join(", ")}`);
  } 
}
// If no majors matched, inform the user
if (!majors.some(major => major.interests.includes(studentInterest.toLowerCase()))) {
  console.log(`No matching major found for your interest in ${studentInterest}.`);
}
