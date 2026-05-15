// minimal config loader
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: process.env.DOTENV_PATH || '.env.local' });

const config = {
  projectType: process.env.PROJECT_TYPE || 'collector',
  port: parseInt(process.env.PORT || '3000', 10),
  acoolaiKey: process.env.ACOOLAI_KEY || '',
  ilaiKey: process.env.ILAI_KEY || ''
};

module.exports = config;
