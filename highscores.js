const highScoresList = document.getElementById('highScoresList');
const highScores = JSON.parse(localStorage.getItem('highScores')) || []


highScoreList.innerHTML = highScores.map(scores => {
  return `<li class="high-score">${scores.name} - ${scores.score}</li>`;
}).join("");
