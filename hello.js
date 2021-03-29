var words = {
    "Munisha": 2,
    "Balraj": 5,
    "Mahbub": 9,
}
console.log('Node works!');

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
