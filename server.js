var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello MGT-656!');
});

app.get('/aggressive-locust', function(request, response){
    response.send('aggressive locust');
});

app.listen(process.env.PORT || 4000);