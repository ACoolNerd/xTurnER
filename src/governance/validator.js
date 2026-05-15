// Governance validator stub

function validateRequest(req) {
  // Implement MEAP Phase-2 checks here. Return { allowed: true } or { allowed: false, reason }
  return { allowed: true };
}

module.exports = { validateRequest };
