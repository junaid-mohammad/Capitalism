// utils/quizData.js
// Handles loading quiz data from PostgreSQL or fallback, and random question generation

import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

// Default fallback quiz data (in case DB fails)
const fallbackQuiz = [
  { country: "France", capital: "Paris" },
  { country: "United Kingdom", capital: "London" },
  { country: "United States of America", capital: "Washington DC" },
];

/**
 * Load quiz data from PostgreSQL database
 * @returns {Promise<Array<{ country: string, capital: string }>>}
 */
export async function loadQuizData() {
  const db = new pg.Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
  });

  try {
    await db.connect();
    const result = await db.query("SELECT * FROM capitals");
    await db.end();
    return result.rows;
  } catch (error) {
    console.error("Database error, using fallback quiz data.", error);
    return fallbackQuiz;
  }
}

/**
 * Select a random question from the quiz array
 * @param {Array<{ country: string, capital: string }>} quizData
 * @returns {{ country: string, capital: string }}
 */
export function getRandomQuestion(quizData) {
  if (!quizData.length) return fallbackQuiz[0];
  return quizData[Math.floor(Math.random() * quizData.length)];
}
