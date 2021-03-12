const { readFileSync } = require('fs');
const { join } = require('path');

const file = readFileSync(join('public/src', 'resume.pdf'));

module.exports = (req, res) => res.end(file, 'binary');
