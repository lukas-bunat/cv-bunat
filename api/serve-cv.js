const { readFileSync } = require('fs');
const { join } = require('path');

const file = readFileSync(join(__dirname, '_files', 'resume.pdf'));

module.exports = (req, res) => res.end(file, 'binary');
