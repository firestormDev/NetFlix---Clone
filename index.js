const async = require('hbs/lib/async');

let http = require ('http'),
    path = require ('path'),
    express = require ('express'),
    app = express(),
    Posts = require('./model/Posts');  
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
    app.get('/', (req, res) => {
        res.render('index');
    });

    app.get('/mensagem_get', (req, res) => {
        let msg = req.query.mensagem;
        console.log(msg);
        res.end();
    });

    app.get('/posts', async (req, res) => {
        /*const posts =  [
            {content: 'post 1'},
            {content: 'post 2'}
        ];**/
        const posts = await Posts.find();        
        res.render('posts', { posts: posts});
    });

    app.listen(3000);

  