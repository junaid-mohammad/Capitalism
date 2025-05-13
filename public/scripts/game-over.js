// public/scripts/game-over.js
// Injects the full Game Over screen client-side if the last answer was incorrect

// Brutal restart button options (randomized)
const restartPhrases = [
    "INVEST IN IGNORANCE, AGAIN?",
    "SELL YOUR SOUL, AGAIN?",
    "RECAPITALIZE YOUR FAILURE?",
    "REQUEST A BAILOUT?",
    "DOUBLE DOWN ON STUPID?",
    "GO BROKE AGAIN?",
    "RE-ENTER THE MARKET, WHY?",
    "BUY BACK IN, LOSER?"
  ];
  
  // Read values passed in as data attributes from the <body> element
  const wasCorrect = document.body.getAttribute("data-was-correct");
  const correctAnswer = document.body.getAttribute("data-correct-answer");
  const totalScore = document.body.getAttribute("data-total-score");
  
  // If the last answer was incorrect, show the Game Over UI
  if (wasCorrect === "false") {
    const restartText = restartPhrases[Math.floor(Math.random() * restartPhrases.length)];
  
    // Inject Game Over card into #app container
    document.getElementById("app").innerHTML = `
      <div class="card game-over-card">
        <h1 class="game-over-heading">Generationally Humiliating.</h1>
        <p>And that’s your legacy: ${totalScore}</p>
        <p>The capital you couldn’t exploit: <strong>${correctAnswer}</strong></p>
        <p class="message">Try again. But like... smarter.</p>
        <a href="/" class="restart-button">${restartText}</a>
      </div>
    `;
  
    // Allow "Enter" key to also trigger a restart
    document.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.keyCode === 13) {
        window.location.href = "/";
      }
    });
  }
  