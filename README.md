# Bloom 🌸

A generative flower that unfolds for one person. Built with Python math and animated on canvas.

## How it works

1. **Python API** (`/api/flower`) computes unique flower geometry from a name using phyllotaxis, parametric petals, and deterministic seeding.
2. **Frontend** renders and animates the bloom on HTML5 Canvas — petals unfurl, the center spirals in, particles drift, and a message reveals.

## Personalize

Add query parameters to the URL:

```
https://your-domain.vercel.app/?for=Sarah&msg=Happy birthday, love
```

| Param | Description |
|-------|-------------|
| `for` | Her name (seeds the unique flower + fills the message) |
| `msg` | Custom message (defaults to "For [name], with love") |

## Deploy to Vercel

1. Push to GitHub
2. Import the repo in [Vercel](https://vercel.com)
3. Deploy — that's it

The Python serverless function and static frontend are configured in `vercel.json`.

## Local development

```bash
npm install -g vercel
vercel dev
```

Then open `http://localhost:3000/?for=Sarah`

## Structure

```
api/
  flower.py        — Python generative engine (phyllotaxis + parametric petals)
public/
  index.html       — Dark canvas, fonts, layout
  bloom.js         — Animation engine (bloom, breath, particles, message reveal)
vercel.json        — Routing & serverless config
requirements.txt   — Python dependencies
```

## The math

- **Phyllotaxis**: Golden angle (137.5°) spiral for the flower center
- **Parametric petals**: Bézier curves placed in rings with per-petal variation
- **Name seeding**: SHA-256 hash of the name deterministically generates all parameters — same name, same flower, every time
