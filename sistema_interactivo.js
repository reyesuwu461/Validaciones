/**
 * Program that shows motivational messages based on age
 * - Optional name (accepts any input)
 * - Validates that age is a positive integer (1-120)
 * - Custom messages for minors and adults
 */

// Get user data
const userName = prompt("What's your name? (optional)");
const enteredAge = prompt("Please enter your age:");

// Validate age
if (!/^\d+$/.test(enteredAge)) {
    alert("Please enter only positive whole numbers.");
} else {
    const age = parseInt(enteredAge);
    
    if (age < 1 || age > 120) {
        alert("Age must be between 1 and 120 years");
    } else if (age < 18) {
        // Motivational message for minors
        alert(`Hello${userName}! 
        At ${age} years old, you have a whole future ahead of you. 
        Keep learning and growing! 
        Every line of code you write brings you closer to your dreams.`);
    } else {
        // Motivational message for adults
        alert(`Hello ${userName}! 
        At ${age} years old, you have great life experience. 
        The world of programming is full of opportunities for you. 
        Keep moving forward and reach your goals!`);
    }
}
