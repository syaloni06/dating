document.addEventListener("DOMContentLoaded", () => {
  const themeToggleButton = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");

  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
    themeIcon.classList.replace("fa-moon", "fa-sun");
  }

  themeToggleButton.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");

    if (document.documentElement.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      themeIcon.classList.replace("fa-moon", "fa-sun");
    } else {
      localStorage.setItem("theme", "light");
      themeIcon.classList.replace("fa-sun", "fa-moon");
    }
  });
});

const canvas = document.getElementById("loveCanvas");
const ctx = canvas.getContext("2d");

// Set canvas size to match the window size
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let heartsArray = [];
const heartImage = new Image();
heartImage.src = "love.png"; // Heart image link

// Wait until the image loads before starting animation
heartImage.onload = () => {
  init();
  animate();
};

class Heart {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 30 + 10;
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 - 1;
    this.opacity = Math.random() * 0.5 + 0.5;
  }

  draw() {
    ctx.globalAlpha = this.opacity;
    ctx.drawImage(heartImage, this.x, this.y, this.size, this.size);
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // Bounce off the walls
    if (this.x + this.size > canvas.width || this.x < 0) {
      this.speedX *= -1;
    }
    if (this.y + this.size > canvas.height || this.y < 0) {
      this.speedY *= -1;
    }
  }
}

function init() {
  heartsArray = [];
  for (let i = 0; i < 100; i++) {
    heartsArray.push(new Heart());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  heartsArray.forEach((heart) => {
    heart.draw();
    heart.update();
  });
  requestAnimationFrame(animate);
}
