# DreamMotion AI — free starter

This project is a mobile-friendly progressive web app (PWA) starter for a text-to-video service.

## What works now
- Responsive website UI for Android and desktop
- Prompt examples and settings for aspect ratio, duration, quality
- PWA manifest and service worker
- Server-side `/api/generate` endpoint that validates requests and clearly reports that no video provider is connected

## Important limitation
This is **not yet an AI video generator**. Real generation requires a video model/API and GPU compute. Do not present the starter as generating videos until a provider is connected. Free GPU access and inference credits are limited and can change.

## Deploy on Vercel (browser-only setup)
1. Create a GitHub account: https://github.com/
2. Create a new repository named `dreammotion-ai`.
3. Upload all files/folders from this project. Keep `api/generate.js` inside the `api` folder.
4. Create a Vercel account: https://vercel.com/
5. In Vercel choose **Add New → Project**, import your GitHub repository, then deploy.
6. Open the generated HTTPS URL. The UI will work, and the Generate button will explain that no provider is connected yet.
7. In Android Chrome, open the URL → menu (⋮) → **Add to Home screen** or **Install app** if offered.

## Connecting a real model later
- Choose a provider that explicitly supports text-to-video and check current pricing/limits first.
- Add the provider key under Vercel → Project → Settings → Environment Variables (for example `VIDEO_API_KEY`). Never paste secrets into `index.html` or commit them to GitHub.
- Update `api/generate.js` to submit the prompt to the provider. Most video APIs are asynchronous: submit a job, poll a status endpoint, then return a final video URL.
- Add rate limiting, abuse protection, file-size limits, privacy terms, and a maximum generation quota before allowing public users.

## Optional open-source research
- Hugging Face Spaces: https://huggingface.co/spaces
- Hugging Face Inference Provider pricing: https://huggingface.co/docs/inference-providers/pricing
- Wan2.1 repository: https://github.com/Wan-Video/Wan2.1

Wan2.1 and similar models may require a capable GPU. This starter is designed to build/deploy the interface in the cloud, not run the model on a low-spec laptop.
