let randomNumber;

// Function to generate a new random number
function gene() {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    document.getElementById("inpu").value = ""; // Clear input field
    alert("🔄 A new number has been generated! Try guessing it. 🎯");
}

document.addEventListener("DOMContentLoaded", () => {
    gene(); // Generate a number when the page loads
    
    document.getElementById("inpu").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            checkGuess();
        }
    });
});

// Function to check the user's guess
function checkGuess() {
    let userGuess = document.getElementById("inpu").value.trim();
    
    if (!userGuess || isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        alert("⚠️ Please enter a valid number between 1 and 10.");
        return;
    }
    
    userGuess = Number(userGuess);
    
    if (userGuess === randomNumber) {
        alert("🎉 Congratulations! You guessed the correct number: " + randomNumber + " 🎯");
    } else {
        let hint = userGuess > randomNumber ? "📉 Too high! Try again." : "📈 Too low! Try again.";
        alert(hint);
    }
}
