var express = require('express');
var router = express.Router();
const fs = require("fs");



const date = new Date();

let hours = date.getHours().toString();
let minutes = date.getMinutes().toString();
let seconds = date.getSeconds().toString();
let day = ('0' + date.getDate()).slice(-2).toString();
let month = ('0' + (date.getMonth() + 1)).slice(-2).toString();
let year = (date.getFullYear()).toString();
const fileName = day + month + year + '-' + hours + minutes + seconds + '.txt'
const fileContent = day + month + year + '-' + hours + minutes + seconds;

// create file directory if not exists
const makeDirectory = () => {
    if (!fs.existsSync('FileFolder/')) {
        fs.mkdirSync('FileFolder/', (err) => {
            if (err)
                console.log(err);
        })
    }
}

// write into file
writeFile = () => {
    try {
        // creates directory if it doesn't exist'
        makeDirectory();

        const date = new Date();

        let hours = date.getHours().toString();
        let minutes = date.getMinutes().toString();
        let seconds = date.getSeconds().toString();
        let day = ('0' + date.getDate()).slice(-2).toString();
        let month = ('0' + (date.getMonth() + 1)).slice(-2).toString();
        let year = (date.getFullYear()).toString();
        const fileName = day + month + year + '-' + hours + minutes + seconds + '.txt'
        const fileContent = day + month + year + '-' + hours + minutes + seconds;


        fs.writeFileSync('FileFolder/' + fileName, fileContent);
    } catch (error) {
        console.log(error);
    }
}



/* GET home page. */
router.post('/', function (req, res, next) {
    res.writeHead(200, { "Content-Type": "text/html" })
    message = writeFile() ? 'File Created Successfully' : 'File Not Created :(';
    res.write(JSON.stringify({ 'File Content': 'File' + fileName + ' created ', }));
    res.end()
});

module.exports = router;


