var express = require('express');
var router = express.Router();
const fs = require("fs");
const PATH = 'FileFolder/'


// function for listing files in the files directory
const listFiles = () => {
    console.log(fs.existsSync('FileFolder/'))
    if (fs.existsSync('FileFolder/')) {
        return fs.readdirSync(PATH);
    }
    else
        return -1;
}

/* GET files listing. */
router.get('/', function (req, res, next) {
    res.writeHeader(200, { "Content-Type": "text/html" })
    let message, files = listFiles();
    if (files !== -1) {
        message = files;
    }
    else
        message = "Folder does not exsist"
    files ? res.write(JSON.stringify({ 'File List': message })) : res.write(JSON.stringify({ 'Message': message }));
    res.end()
});

module.exports = router;
