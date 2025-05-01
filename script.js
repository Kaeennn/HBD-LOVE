const messages = [
  "You're my favorite person ❤️",
  "You light up my life 🌟",
  "Every moment with you is magic ✨",
  "I love you more than words 💕",
  "You're my forever 🎀"
];

const leftImages = [
 "C:\Users\User\Desktop\HBD LOVE\images\1.jpg",
  "C:\Users\User\Desktop\HBD LOVE\images\2.jpg",
  "C:\Users\User\Desktop\HBD LOVE\images\3.jpg"
];

const rightImages = [
  "C:\Users\User\Desktop\HBD LOVE\images\4.jpg",
  "C:\Users\User\Desktop\HBD LOVE\images\5.jpg",
  "C:\Users\User\Desktop\HBD LOVE\images\6.jpg"
];

document.getElementById('revealBtn').addEventListener('click', () => {
  document.getElementById('revealBtn').classList.add('hidden');
  document.getElementById('surpriseContent').classList.remove('hidden');
});

document.getElementById('newSurpriseBtn').addEventListener('click', () => {
  const msg = messages[Math.floor(Math.random() * messages.length)];
  const left = leftImages[Math.floor(Math.random() * leftImages.length)];
  const right = rightImages[Math.floor(Math.random() * rightImages.length)];

  document.getElementById('randomMessage').textContent = msg;
  document.getElementById('leftImage').src = left;
  document.getElementById('rightImage').src = right;
});
