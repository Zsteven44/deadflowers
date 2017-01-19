var express=require("express");
var logger = require('morgan');

var app = express();



///////////////////////
//                   //
// HANDLEBARS SETUP  //
//                   //
///////////////////////

var handlebars = require('express3-handlebars').create({defaultLayout:'mainlayout'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');



app.set('port', process.env.PORT || 3000);
app.use(logger("short"));

app.use(express.static(__dirname + '/public'));

///////////////////////
//                   //
// THE ROUTES BELOW  //
//                   //
///////////////////////

app.get('/', function (req,res) {
    res.render('home');
})


///////////////////
//               //
//  PAGE RENDER  //
//               //
///////////////////


// custom 404 page
app.use(function(req,res){
    res.status(404);
    res.render('404');
});

//custom 500 page
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

var server = app.listen(app.get('port'), function(){
    console.log('The Dead Flowers.  Express started on http://localhost:' + app.get('port') + '; press cntrl+C to terminate.');
});