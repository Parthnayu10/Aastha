const message = `To my dearest Bestie 💖,
"Happy Birthday to my incredible friend! 🎉 May your day be filled with joy, laughter, and all the love you deserve. Thank you for being a shining light in my life and for all the amazing memories we’ve created together. Here’s to many more! 💖🎂"

There are friendships that come and go, but ours is like a treasure—rare, beautiful, and everlasting. From the countless video calls where we laughed until our stomachs hurt, to those nights we stayed up just talking about life and everything in between, you've been my rock.

We’ve made fun of each other in the best possible way, turning every silly moment into a memory I’ll cherish forever. You’ve supported me when I felt lost, and stood by my side when the world seemed too tough. No matter the distance, you've always been there, making me feel at home.

You are not just my best friend, you're family. Thank you for all the shared moments, the inside jokes, and the endless laughter. Here's to us, to our friendship, and to all the beautiful moments we’ve yet to create. I love you endlessly, my bestie! 💖`;

const imagePaths = [];
for (let i = 1; i <= 26; i++) {
  imagePaths.push(`p${i}.jpg`);
}

// Shuffle images inside the card
function shuffleImages() {
  const card = document.querySelector('.card');
  let currentIndex = 0;

  function updateBackground() {
    card.style.backgroundImage = `url('${imagePaths[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % imagePaths.length;
  }
  setInterval(updateBackground, 2000);
}

// Typewriter Effect
function typeMessage() {
  const typewriterElement = document.querySelector('.card p');
  let index = 0;

  function type() {
    if (index < message.length) {
      typewriterElement.textContent += message.charAt(index);
      index++;
      setTimeout(type, 50);
    }
  }
  type();
}

// Decorative Effects
function createHearts() {
  const heartsContainer = document.querySelector('.hearts');
  setInterval(() => {
    const heart = document.createElement('div');
    heart.textContent = '💖';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }, 300);
}

function createConfetti() {
  const confettiContainer = document.querySelector('.confetti');
  setInterval(() => {
    for (let i = 0; i < 20; i++) {
      const confetti = document.createElement('div');
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
      confetti.style.animationDuration = Math.random() * 2 + 2 + 's';
      confettiContainer.appendChild(confetti);
      setTimeout(() => confetti.remove(), 5000);
    }
  }, 2000);
}

function createBalloons() {
  const balloonsContainer = document.querySelector('.balloons');
  setInterval(() => {
    const balloon = document.createElement('div');
    balloon.textContent = '🎈';
    balloon.style.left = Math.random() * 100 + 'vw';
    balloon.style.animationDuration = Math.random() * 4 + 3 + 's';
    balloonsContainer.appendChild(balloon);
    setTimeout(() => balloon.remove(), 7000);
  }, 500);
}

// Open envelope functionality
document.querySelector('.open-envelope').addEventListener('click', () => {
  document.querySelector('.front-cover').style.display = 'none';
  const card = document.querySelector('.card');
  card.style.display = 'block';
  shuffleImages();
  typeMessage();
  createHearts();
  createConfetti();
  createBalloons();
});

// Music Controls
document.addEventListener('DOMContentLoaded', () => {
  const playButton = document.querySelector('#play-btn');
  const pauseButton = document.querySelector('#pause-btn');
  const audio = new Audio('file:///C:/Users/Parth/aastha/assets/Ed%20Sheeran%20-%20Perfect%20(Official%20Music%20Video).mp3');

  let isPlaying = false;

  if (playButton && pauseButton) {
    // Play Music
    playButton.addEventListener('click', () => {
      if (!isPlaying) {
        audio.play().then(() => {
          isPlaying = true;
          playButton.style.display = 'none';
          pauseButton.style.display = 'inline'; // Ensure this matches your design
        }).catch((err) => {
          console.error('Error playing audio:', err);
        });
      }
    });

    // Pause Music
    pauseButton.addEventListener('click', () => {
      if (isPlaying) {
        audio.pause();
        isPlaying = false;
        pauseButton.style.display = 'none';
        playButton.style.display = 'inline';
      }
    });

    // Set initial visibility
    playButton.style.display = 'inline';
    pauseButton.style.display = 'none';
  } else {
    console.error('Play or Pause button not found in the DOM.');
  }
});
fetch('assets/Ed-Sheeran-Perfect.mp3')
  .then(response => {
    if (!response.ok) throw new Error('File not found');
    console.log('Audio file is accessible.');
  })
  .catch(err => console.error('Audio file error:', err));
