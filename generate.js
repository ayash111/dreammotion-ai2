// Vercel serverless endpoint starter.
// Replace this response with a real video provider integration when you have access to one.
// Keep provider API keys in Vercel Environment Variables, never in index.html.
export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Use POST for video-generation requests." });
  }
  const { prompt, aspectRatio, duration, quality } = req.body || {};
  if (typeof prompt !== "string" || prompt.trim().length < 8) {
    return res.status(400).json({ message: "Please provide a longer video prompt." });
  }
  // No provider is configured in this free starter.
  // A real integration should submit a job to a video model, then return a job ID
  // and provide a separate status endpoint that eventually returns a video URL.
  return res.status(501).json({
    message: "No AI video provider is configured. The website and API endpoint are ready for integration, but a real model/API is required to generate video.",
    received: { prompt: prompt.trim(), aspectRatio, duration, quality }
  });
}