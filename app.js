var express = require('express');

var app = module.exports = express();

// Configuration

app.configure(function(){
    app.set('view engine', 'html');
    app.set('layout', 'layout');
    app.set('partials', {});
    // app.enable('view cache'); // disable only in dev env.
    app.engine('html', require('hogan-express'));
    app.set('views', __dirname + '/views');

    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser());

    app.use(express.static(__dirname + '/public'));
    app.use(app.router);
});

// Routes
app.get('/', function(req, res) {
    res.render('index');
});

app.get('/jobs', function(req, res) {
    res.json([
        1,
        2,
        3,
        4,
        5
    ]);
});

app.post('/results', function(req, res) {
    console.log(req.param('results'))
    res.send('ok');
});

// Start server

var port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});