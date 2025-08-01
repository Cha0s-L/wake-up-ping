// api/ping.js

const targets = [
  'https://test-keep-t40n.onrender.com',
  'https://test-keep-three.vercel.app',
  'https://argox-q78213664.koyeb.app/',
  // 在这里添加更多地址
];

export default async function handler(req, res) {
  const results = [];

  for (const url of targets) {
    try {
      const response = await fetch(url);
      results.push({ url, status: response.status });
    } catch (error) {
      results.push({ url, status: 'error', error: error.message });
    }
  }

  res.status(200).json({
    message: 'Pings completed',
    results,
  });
}
