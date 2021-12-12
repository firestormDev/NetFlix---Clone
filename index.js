let http = require ('http'),
    path = require ('path'),
    express = require ('express'),
    app = express();

    app.set('view engine', 'hbs');
    app.set('views', path.join(__dirname, 'view'));
    app.use(express.static(path.join(__dirname, 'public')));
    app.get(express.urlencoded({extended: false}));

    app.get('/home', (req, res) => {
        res.render('home', { title: 'Página inicial'});
    });

    app.get('/login', (req, res) => {
        res.render('login', { title: 'Página de Login'});
    });
    app.get('/cadastro', (req, res) => {
        res.render('cadastro', { title: 'Página de cadastro'});
    });

    app.listen(3000);

  