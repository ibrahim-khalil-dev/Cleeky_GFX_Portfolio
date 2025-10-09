// Digital Clock
function updateClock() {
  const clock = document.getElementById("clock");
  const now = new Date();
  let h = now.getHours(), m = now.getMinutes(), s = now.getSeconds();
  const ampm = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  clock.textContent = `${h}:${m.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")} ${ampm}`;
}
setInterval(updateClock, 1000); updateClock();

// Bubbles Magnetic Effect
const bubbles = document.querySelectorAll(".bubble");
document.addEventListener("mousemove", (e) => {
  bubbles.forEach(bubble => {
    const rect = bubble.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width/2);
    const dy = e.clientY - (rect.top + rect.height/2);
    const dist = Math.sqrt(dx*dx + dy*dy);
    const range = 200;
    if (dist < range) {
      const strength = (range - dist) / range;
      bubble.style.transform = `translate(${dx*strength*0.2}px, ${dy*strength*0.2}px)`;
    } else {
      bubble.style.transform = "translate(0,0)";
    }
  });
});

// Mobile Menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");
hamburger.addEventListener("click", () => navMenu.classList.toggle("show"));

// Chat Toggle
const chatBox = document.querySelector(".chat-box");
const chatToggle = document.querySelector(".chat-toggle i");
document.querySelector(".chat-toggle").addEventListener("click", () => {
  chatBox.classList.toggle("open");
  chatToggle.classList.toggle("fa-comment");
  chatToggle.classList.toggle("fa-xmark");
});
