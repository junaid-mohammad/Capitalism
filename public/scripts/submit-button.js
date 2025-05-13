// public/scripts/submit-button.js
// Randomizes the submit button text with brutal, satirical labels

document.addEventListener("DOMContentLoaded", () => {
  // Insulting submit phrases to keep the user emotionally unstable
  const buttonPhrases = [
    "SELL YOUR DIGNITY",
    "SUBMIT TO THE SYSTEM",
    "SHORT YOUR IQ",
    "OVERLEVERAGE YOURSELF",
    "SELL YOUR SOUL",
    "BANK ON REGRET",
    "LIQUIDATE YOUR PRIDE",
    "INVEST IN FAILURE"
  ];

  // Target the submit button
  const btn = document.querySelector("button[type='submit']");

  // If found, replace its first text node with a random phrase
  if (btn && btn.childNodes.length > 0) {
    btn.childNodes[0].nodeValue =
      buttonPhrases[Math.floor(Math.random() * buttonPhrases.length)] + " ";
  }
});
