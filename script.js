let score = 0;
let time = 10;
let targetInterval;

const startGame = () => {
  document.getElementById('start-button').disabled = true;
  targetInterval = setInterval(() => {
    generateTarget();
  }, 1000);
  updateScore();
  updateTime();
}

const generateTarget = () => {
  const target = document.getElementById('target');
  const gameArea = document.getElementById('game-area');
  const maxTop = gameArea.clientHeight - target.clientHeight;
  const maxLeft = gameArea.clientWidth - target.clientWidth;
  
  target.style.top = getRandomNumber(0, maxTop) + 'px';
  target.style.left = getRandomNumber(0, maxLeft) + 'px';
  
  target.style.display = 'block';
  
  target.onclick = () => {
    score++;
    updateScore();
    target.style.display = 'none';
  }
  
  setTimeout(() => {
    target.style.display = 'none';
  }, 1000);
}

const updateScore = () => {
  document.getElementById('score-value').textContent = score;
}

const updateTime = () => {
  document.getElementById('time-value').textContent = time;
  if (time === 0) {
    clearInterval(targetInterval);
    document.getElementById('start-button').disabled = false;
    score = 0;
    time = 10;
    updateScore();
  } else {
    time--;
    setTimeout(() => {
      updateTime();
    }, 1000);
  }
}

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById('start-button').addEventListener('click', start
