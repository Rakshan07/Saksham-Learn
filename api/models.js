/**
 * Vercel Serverless Function: /api/models
 *
 * Returns the list of available Groq models.
 * The GROQ_API_KEY is stored as a Vercel Environment Variable — never in code.
 *
 * Usage from frontend:
 *   fetch("/api/models")
 */
export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed. Use GET." });
  }

  const GROQ_API_KEY = process.env.GROQ_API_KEY;

  if (!GROQ_API_KEY) {
    return res.status(500).json({
      error: "GROQ_API_KEY is not configured. Add it in Vercel Environment Variables."
    });
  }

  try {
    const response = await fetch("https://api.groq.com/openai/v1/models", {
      headers: {
        Authorization: `Bearer ${GROQ_API_KEY}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data });
    }

    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({
      error: "Failed to fetch Groq models",
      details: err.message
    });
  }
}
