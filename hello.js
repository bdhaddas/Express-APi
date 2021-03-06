var fs = require
var words = loadJSON('words.json');

console.log('Server is loading ...');

const { response } = require('express');

var express = require('express');

var app = express();

var server = app.listen(3000, listening);

function listening() {
    console.log("listening. . .")
}

app.use(express.static('website'));

app.get('/add/:word/:score', addWord);
function addWord(request, response) {
    var data = request.params;
    var word = data.word;
    var score = Number(data.score);
    var reply;
    if (!score) {
        score = 5;
        var reply = {
            msg: "Score is required!"
        }
    } else {
        words[word] = score;
        var reply = {
            msg: "Thanks for visiting this site!"
        }
    }
    response.send(reply);
}

app.get('/all', sendAll);
function sendAll(request, response) {
    response.send(words);
}

app.get('/search/:word/', searchWord);

function searchWord(request, response) {
    var word = request.params.word;
    var reply;
    if (words[word]) {
        reply = {
            status: "found",
            "word": word,
            score: words[word]
        }
    } else {
        reply = {
            status: "not found",
            "word": word,
        }
    }
}
