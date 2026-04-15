// Get references to HTML elements
const countDisplay = document.getElementById('count'); // The element that shows the counter
const lookButton = document.getElementById('lookButton'); // The button to click when looking at phone
const guiltPopup = document.getElementById('guiltPopup'); // The popup div for guilt images
const guiltCanvas = document.getElementById('guiltCanvas'); // The canvas for drawing guilt images
const ctx = guiltCanvas.getContext('2d'); // Get the 2D drawing context
const guiltMessage = document.getElementById('guiltMessage'); // The message in the popup
const closePopup = document.getElementById('closePopup'); // Button to close the popup

// Initialize the counter to 0
let phoneLooks = 0;

// Array of silly guilt messages
const guiltMessages = [
    "Oh no! Another look? Your phone is winning!",
    "Guilty! That's what you get for scrolling again.",
    "Silly human, phones are for robots, not you!",
    "Busted! Time to stare at the wall instead.",
    "Haha, caught you! Phones are boring anyway."
];

// Function to draw a guilty face on the canvas
function drawGuiltyFace() {
    ctx.clearRect(0, 0, guiltCanvas.width, guiltCanvas.height); // Clear the canvas
    ctx.fillStyle = '#ffeb3b'; // Yellow face
    ctx.beginPath();
    ctx.arc(150, 100, 50, 0, Math.PI * 2); // Draw circle for face
    ctx.fill();
    
    // Eyes
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(135, 85, 5, 0, Math.PI * 2);
    ctx.arc(165, 85, 5, 0, Math.PI * 2);
    ctx.fill();
    
    // Sad mouth
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(150, 115, 20, 0, Math.PI); // Half circle for frown
    ctx.stroke();
    
    // Text
    ctx.fillStyle = '#f44336';
    ctx.font = '20px Comic Sans MS';
    ctx.textAlign = 'center';
    ctx.fillText('Guilty!', 150, 180);
}

// Function to draw an angry face
function drawAngryFace() {
    ctx.clearRect(0, 0, guiltCanvas.width, guiltCanvas.height);
    ctx.fillStyle = '#ff5722'; // Orange face
    ctx.beginPath();
    ctx.arc(150, 100, 50, 0, Math.PI * 2);
    ctx.fill();
    
    // Eyes
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(135, 85, 5, 0, Math.PI * 2);
    ctx.arc(165, 85, 5, 0, Math.PI * 2);
    ctx.fill();
    
    // Angry mouth
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(135, 125);
    ctx.lineTo(165, 125);
    ctx.stroke();
    
    // Eyebrows
    ctx.beginPath();
    ctx.moveTo(130, 75);
    ctx.lineTo(140, 80);
    ctx.moveTo(160, 80);
    ctx.lineTo(170, 75);
    ctx.stroke();
    
    ctx.fillStyle = '#f44336';
    ctx.font = '20px Comic Sans MS';
    ctx.textAlign = 'center';
    ctx.fillText('Put it down!', 150, 180);
}

// Function to draw a silly face
function drawSillyFace() {
    ctx.clearRect(0, 0, guiltCanvas.width, guiltCanvas.height);
    ctx.fillStyle = '#4caf50'; // Green face
    ctx.beginPath();
    ctx.arc(150, 100, 50, 0, Math.PI * 2);
    ctx.fill();
    
    // Eyes
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(135, 85, 5, 0, Math.PI * 2);
    ctx.arc(165, 85, 5, 0, Math.PI * 2);
    ctx.fill();
    
    // Tongue out
    ctx.fillStyle = '#ff5722';
    ctx.beginPath();
    ctx.arc(150, 125, 10, 0, Math.PI);
    ctx.fill();
    
    ctx.fillStyle = '#f44336';
    ctx.font = '20px Comic Sans MS';
    ctx.textAlign = 'center';
    ctx.fillText('Silly you!', 150, 180);
}

// Function to draw a shocked face
function drawShockedFace() {
    ctx.clearRect(0, 0, guiltCanvas.width, guiltCanvas.height);
    ctx.fillStyle = '#2196f3'; // Blue face
    ctx.beginPath();
    ctx.arc(150, 100, 50, 0, Math.PI * 2);
    ctx.fill();
    
    // Wide eyes
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.ellipse(135, 85, 8, 12, 0, 0, Math.PI * 2);
    ctx.ellipse(165, 85, 8, 12, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Open mouth
    ctx.beginPath();
    ctx.arc(150, 120, 15, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#f44336';
    ctx.font = '20px Comic Sans MS';
    ctx.textAlign = 'center';
    ctx.fillText('Busted!', 150, 180);
}

// Function to draw a laughing face
function drawLaughingFace() {
    ctx.clearRect(0, 0, guiltCanvas.width, guiltCanvas.height);
    ctx.fillStyle = '#ffeb3b'; // Yellow face
    ctx.beginPath();
    ctx.arc(150, 100, 50, 0, Math.PI * 2);
    ctx.fill();
    
    // Eyes
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(135, 85, 5, 0, Math.PI * 2);
    ctx.arc(165, 85, 5, 0, Math.PI * 2);
    ctx.fill();
    
    // Laughing mouth
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(150, 115, 20, 0, Math.PI, false); // Upside down arc
    ctx.stroke();
    
    ctx.fillStyle = '#f44336';
    ctx.font = '20px Comic Sans MS';
    ctx.textAlign = 'center';
    ctx.fillText('Haha!', 150, 180);
}

// Array of drawing functions
const drawFunctions = [
    drawGuiltyFace,
    drawAngryFace,
    drawSillyFace,
    drawShockedFace,
    drawLaughingFace
];

// Function to update the counter display
function updateCounter() {
    countDisplay.textContent = phoneLooks; // Set the text to the current count
}

// Function to show the guilt popup with a random drawing and message
function showGuilt() {
    // Pick a random index
    const randomIndex = Math.floor(Math.random() * drawFunctions.length);
    
    // Draw the face
    drawFunctions[randomIndex]();
    
    // Set the message
    guiltMessage.textContent = guiltMessages[randomIndex];
    
    // Show the popup
    guiltPopup.classList.remove('hidden');
}

// Function to hide the guilt popup
function hideGuilt() {
    // Hide the popup
    guiltPopup.classList.add('hidden');
}

// Event listener for the look button click
lookButton.addEventListener('click', function() {
    phoneLooks++; // Increment the counter
    updateCounter(); // Update the display
    showGuilt(); // Show the guilt popup
});

// Event listener for the close popup button
closePopup.addEventListener('click', hideGuilt);

// Initialize the counter display on page load
updateCounter();