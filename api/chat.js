/**
 * Vercel Serverless Function: /api/chat
 *
 * Proxies requests to Groq API.
 * The GROQ_API_KEY is stored as a Vercel Environment Variable — never in code.
 *
 * Usage from frontend:
 *   fetch("/api/chat", {
 *     method: "POST",
 *     headers: { "Content-Type": "application/json" },
 *     body: JSON.stringify({
 *       model: "llama-3.3-70b-versatile",
 *       messages: [{ role: "user", content: "Hello!" }]
 *     })
 *   })
 */
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  const GROQ_API_KEY = process.env.GROQ_API_KEY;

  if (!GROQ_API_KEY) {
    return res.status(500).json({
      error: "GROQ_API_KEY is not configured. Add it in Vercel Environment Variables."
    });
  }

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GROQ_API_KEY}`, // Key injected here, never sent to browser
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data });
    }

    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({
      error: "Failed to reach Groq API",
      details: err.message
    });
  }
}
