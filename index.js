// index.js
// Main entry point for the Capitalism Quiz app (server setup and routing)

import express from "express";                  // Express framework
import bodyParser from "body-parser";           // Middleware to parse form data
import dotenv from "dotenv";                    // Load environment variables
import path from "path";                        // Node.js path utilities
import { fileURLToPath } from "url";            // Convert __filename to ES module scope  
import { loadQuizData, getRandomQuestion } from "./utils/quizData.js";  // Quiz data helpers

// Load .env variables
dotenv.config();

// Create Express app instance
const app = express();
const port = process.env.PORT || 4000;

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true })); // Parse form-encoded data
app.use(express.static("public"));                  // Serve static assets (CSS, JS, images)

// Set EJS as templating engine
app.set("view engine", "ejs");

// Resolve __dirname in ES module (for view path config)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("views", path.join(__dirname, "views"));

// Global state
let quiz = [];                // Country-capital quiz dataset
let totalCorrect = 0;         // Player's score
let currentQuestion = {};     // Current quiz question

// Load quiz data from DB (or fallback)
loadQuizData()
  .then((data) => {
    quiz = data;
  })
  .catch((err) => {
    console.error("Failed to load quiz data:", err);
  });

// GET: Home page (start new game)
app.get("/", (req, res) => {
  totalCorrect = 0;                             // Reset score
  currentQuestion = getRandomQuestion(quiz);    // Select first question
  res.render("index", {
    question: currentQuestion,
    wasCorrect: null,
    totalScore: totalCorrect,
    correctAnswer: null,
  });
});

// POST: Quiz answer submission
app.post("/submit", (req, res) => {
  const answer = req.body.answer.trim();             // User's input
  const correctAnswer = currentQuestion.capital;     // Correct answer for current question
  let isCorrect = false;

  // Check answer correctness (case-insensitive)
  if (correctAnswer.toLowerCase() === answer.toLowerCase()) {
    totalCorrect++;
    isCorrect = true;
  }

  // Load next question
  currentQuestion = getRandomQuestion(quiz);

  // Render page with feedback data
  res.render("index", {
    question: currentQuestion,
    wasCorrect: isCorrect,
    totalScore: totalCorrect,
    correctAnswer: correctAnswer,
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
