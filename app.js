var express=require('express');
var app=express();
require('./routes/index')(app);
app.set('views',__dirname + '/views');
app.set('view engine', 'jade');

var server=app.listen(3000,function(){
console.log("Server listening on port 3000");
});
