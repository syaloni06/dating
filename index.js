// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const themeToggleButton = document.getElementById("theme-toggle"); // Theme toggle button
  const themeIcon = document.getElementById("theme-icon"); // Icon inside the button

  // Check if the user has a saved theme preference in local storage
  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark"); // Apply dark mode
    themeIcon.classList.replace("fa-moon", "fa-sun"); // Change icon to sun
  }

  // Toggle theme on button click
  themeToggleButton.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark"); // Toggle dark mode

    // Save the user's theme preference in local storage
    if (document.documentElement.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      themeIcon.classList.replace("fa-moon", "fa-sun"); // Change icon to sun
    } else {
      localStorage.setItem("theme", "light");
      themeIcon.classList.replace("fa-sun", "fa-moon"); // Change icon to moon
    }
  });
});

const canvas = document.getElementById("loveCanvas"); // Get the canvas element
const ctx = canvas.getContext("2d"); // Get the 2D rendering context

// Function to set the canvas size to match the window size
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas(); // Initial canvas resize
window.addEventListener("resize", resizeCanvas); // Resize canvas when window size changes

let heartsArray = []; // Array to store the hearts
const heartImage = new Image(); // Create an image object
heartImage.src = "love.png"; // Set the source to a heart image

// Start the animation once the heart image has loaded
heartImage.onload = () => {
  init(); // Initialize the hearts
  animate(); // Start the animation loop
};

// Class to represent a heart
class Heart {
  constructor() {
    this.x = Math.random() * canvas.width; // Random x-coordinate
    this.y = Math.random() * canvas.height; // Random y-coordinate
    this.size = Math.random() * 30 + 10; // Random size between 10 and 40
    this.speedX = Math.random() * 2 - 1; // Random horizontal speed
    this.speedY = Math.random() * 2 - 1; // Random vertical speed
    this.opacity = Math.random() * 0.5 + 0.5; // Random opacity between 0.5 and 1
  }

  // Draw the heart on the canvas
  draw() {
    ctx.globalAlpha = this.opacity; // Set opacity
    ctx.drawImage(heartImage, this.x, this.y, this.size, this.size); // Draw heart image
  }

  // Update the heart's position
  update() {
    this.x += this.speedX; // Move horizontally
    this.y += this.speedY; // Move vertically

    // Bounce off the edges of the canvas
    if (this.x + this.size > canvas.width || this.x < 0) {
      this.speedX *= -1; // Reverse horizontal direction
    }
    if (this.y + this.size > canvas.height || this.y < 0) {
      this.speedY *= -1; // Reverse vertical direction
    }
  }
}

// Initialize the hearts array with 100 hearts
function init() {
  heartsArray = [];
  for (let i = 0; i < 100; i++) {
    heartsArray.push(new Heart()); // Add a new heart to the array
  }
}

// Animation loop to update and draw hearts continuously
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
  heartsArray.forEach((heart) => {
    heart.draw(); // Draw each heart
    heart.update(); // Update each heart's position
  });
  requestAnimationFrame(animate); // Request the next animation frame
}

const loginTab = document.getElementById("login-tab"); // Login tab button
const signupTab = document.getElementById("signup-tab"); // Signup tab button
const loginForm = document.getElementById("login-form"); // Login form
const signupForm = document.getElementById("signup-form"); // Signup form

// Set the default state to show the login form
loginForm.classList.remove("hidden"); // Show login form
signupForm.classList.add("hidden"); // Hide signup form
loginTab.classList.add("bg-pink-500", "text-white"); // Highlight login tab
signupTab.classList.add("bg-gray-100", "text-pink-500"); // Dim signup tab

// Switch to login form when the login tab is clicked
loginTab.addEventListener("click", () => {
  loginForm.classList.remove("hidden"); // Show login form
  signupForm.classList.add("hidden"); // Hide signup form

  loginTab.classList.add("bg-pink-500", "text-white"); // Highlight login tab
  loginTab.classList.remove("bg-gray-100", "text-pink-500"); // Remove dim effect

  signupTab.classList.remove("bg-pink-500", "text-white"); // Remove highlight from signup tab
  signupTab.classList.add("bg-gray-100", "text-pink-500"); // Dim signup tab
});

// Switch to signup form when the signup tab is clicked
signupTab.addEventListener("click", () => {
  signupForm.classList.remove("hidden"); // Show signup form
  loginForm.classList.add("hidden"); // Hide login form

  signupTab.classList.add("bg-pink-500", "text-white"); // Highlight signup tab
  signupTab.classList.remove("bg-gray-100", "text-pink-500"); // Remove dim effect

  loginTab.classList.remove("bg-pink-500", "text-white"); // Remove highlight from login tab
  loginTab.classList.add("bg-gray-100", "text-pink-500"); // Dim login tab
});
