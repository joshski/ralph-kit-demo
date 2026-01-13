import { generateExcuse } from './excuseGenerator'

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Excuse Generator</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 20px;
    }
    .container {
      background: white;
      border-radius: 16px;
      padding: 40px;
      max-width: 600px;
      width: 100%;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
      text-align: center;
    }
    h1 {
      color: #1a202c;
      margin-bottom: 8px;
      font-size: 2rem;
    }
    .subtitle {
      color: #718096;
      margin-bottom: 32px;
    }
    #excuse {
      background: #f7fafc;
      border-radius: 8px;
      padding: 24px;
      margin-bottom: 24px;
      font-size: 1.1rem;
      line-height: 1.6;
      color: #2d3748;
      min-height: 80px;
    }
    button {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      padding: 14px 32px;
      font-size: 1rem;
      border-radius: 8px;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    button:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px -10px rgba(102, 126, 234, 0.5);
    }
    button:active { transform: translateY(0); }
  </style>
</head>
<body>
  <div class="container">
    <h1>Excuse Generator</h1>
    <p class="subtitle">Need to get out of something? We've got you covered.</p>
    <div id="excuse">Click the button to generate an excuse!</div>
    <button onclick="getExcuse()">Generate Excuse</button>
  </div>
  <script>
    async function getExcuse() {
      const res = await fetch('/api/excuse');
      const data = await res.json();
      document.getElementById('excuse').textContent = data.excuse;
    }
  </script>
</body>
</html>`

const server = Bun.serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url)

    if (url.pathname === '/api/excuse') {
      return Response.json({ excuse: generateExcuse() })
    }

    if (url.pathname === '/' || url.pathname === '/index.html') {
      return new Response(html, {
        headers: { 'Content-Type': 'text/html' },
      })
    }

    return new Response('Not Found', { status: 404 })
  },
})

console.log(`Server running at http://localhost:${server.port}`)

export default server
