const express = require('express');
const config = require('../core/config');
const { validateRequest } = require('../governance/validator');

const app = express();
app.use(express.json());

app.get('/health', (req, res) => res.json({ status: 'ok', project: config.projectType }));

app.post('/chat', async (req, res) => {
  const check = validateRequest(req);
  if (!check.allowed) return res.status(403).json({ error: 'governance_blocked', reason: check.reason });
  // Placeholder echo
  const { message } = req.body || {};
  res.json({ reply: `Echo: ${message || 'hello'}` });
});

const port = config.port || 3000;
app.listen(port, () => console.log(`ACoolCOLLECTOR API running on port ${port}`));

module.exports = app;
