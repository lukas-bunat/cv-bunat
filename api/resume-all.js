const fs = require('fs');

module.exports = (req, res) => {
    // https://stackoverflow.com/questions/31274329/get-list-of-filenames-in-folder-with-javascript
    const listOfFileInDir = fs.readdirSync('public/src/');
    const list = listOfFileInDir.reduce((accumulator, currentValue) => accumulator + `<li><a href='/resume/${ currentValue.replace('.pdf', '') }'>${ currentValue }</a></li>`, '<ul>');

    res.send(list + '</ul>');
};