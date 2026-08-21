/**
 * Saksham Learn - Groq API Proxy Server
 *
 * This server acts as a secure middleman between the frontend and the Groq API.
 * The API key is NEVER sent to the browser — it lives only here on the server,
 * loaded from the .env file.
 *
 * Frontend calls  ->  http://localhost:3001/api/...
 * Server calls    ->  https://api.groq.com/...  (with hidden API key)
 */

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
const PORT = process.env.PORT || 3001;
const GROQ_API_KEY = process.env.GROQ_API_KEY;

// --- Safety Check ---
if (!GROQ_API_KEY) {
  console.error("GROQ_API_KEY is missing! Add it to your .env file.");
  process.exit(1);
}

// --- Middleware ---
app.use(cors({ origin: "*" })); // Allow frontend to call this server
app.use(express.json());

// --- Health Check ---
app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "Saksham Learn server is running" });
});

// --- Groq Chat Completions Proxy ---
/**
 * POST /api/chat
 * Body: { model, messages, temperature, max_tokens, ... }
 *
 * Example from frontend:
 *   fetch("http://localhost:3001/api/chat", {
 *     method: "POST",
 *     headers: { "Content-Type": "application/json" },
 *     body: JSON.stringify({
 *       model: "llama-3.3-70b-versatile",
 *       messages: [{ role: "user", content: "Hello!" }]
 *     })
 *   })
 */
app.post("/api/chat", async (req, res) => {
  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify(req.body),
    });

    if (!response.ok) {
      const error = await response.json();
      return res.status(response.status).json({ error });
    }

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("Groq API error:", err.message);
    res.status(500).json({ error: "Failed to reach Groq API", details: err.message });
  }
});

// --- Groq Models List Proxy ---
/**
 * GET /api/models
 * Returns list of available Groq models
 */
app.get("/api/models", async (req, res) => {
  try {
    const response = await fetch("https://api.groq.com/openai/v1/models", {
      headers: {
        Authorization: `Bearer ${GROQ_API_KEY}`,
      },
    });

    if (!response.ok) {
      const error = await response.json();
      return res.status(response.status).json({ error });
    }

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("Groq models error:", err.message);
    res.status(500).json({ error: "Failed to fetch models", details: err.message });
  }
});

// --- Start Server ---
app.listen(PORT, () => {
  console.log("Saksham Learn server running at http://localhost:" + PORT);
  console.log("Groq API key loaded: " + GROQ_API_KEY.slice(0, 8) + "...(hidden)");
  console.log("\nAvailable endpoints:");
  console.log("  GET  http://localhost:" + PORT + "/health");
  console.log("  POST http://localhost:" + PORT + "/api/chat");
  console.log("  GET  http://localhost:" + PORT + "/api/models");
});
