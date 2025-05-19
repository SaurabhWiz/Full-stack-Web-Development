// For this i took help from Chat GPT

const card = document.querySelector('.card');
const container = document.querySelector('.container');

let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;

container.addEventListener('mousemove', (event) => {
  const containerRect = container.getBoundingClientRect();
  const cardRect = card.getBoundingClientRect();

  const x = event.clientX - containerRect.left;
  const y = event.clientY - containerRect.top;

  const centerX = containerRect.width / 2;
  const centerY = containerRect.height / 2;

  const deltaX = x - centerX;
  const deltaY = y - centerY;

  const isCursorOnCard = (
    event.clientX >= cardRect.left &&
    event.clientX <= cardRect.right &&
    event.clientY >= cardRect.top &&
    event.clientY <= cardRect.bottom
  );

  if (isCursorOnCard) {
    // Subtle tilt when cursor is on card for easier interaction
    targetX = (deltaY / centerY) * -5;
    targetY = (deltaX / centerX) * 5;
  } else {
    // Stronger tilt when cursor is outside card but inside container
    targetX = (deltaY / centerY) * -20;
    targetY = (deltaX / centerX) * 20;
  }
});

container.addEventListener('mouseleave', () => {
  // Reset tilt smoothly when cursor leaves container
  targetX = 0;
  targetY = 0;
});

function animate() {
  // Smoothly interpolate current rotation values towards target
  currentX += (targetX - currentX) * 0.1;
  currentY += (targetY - currentY) * 0.1;

  card.style.transform = `rotateX(${currentX}deg) rotateY(${currentY}deg)`;

  requestAnimationFrame(animate);
}

animate();
