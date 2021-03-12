const { readFileSync } = require('fs');
const { join } = require('path');

module.exports = (req, res) => res.end(readFileSync(join('public/src', `${ req.query.version }.pdf`)), 'binary');
