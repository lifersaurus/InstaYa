const express=require('express');

const path=require('path');
const exphbs=require('express-handlebars');
const method0verride=require('method-override');

const session=require('express-session');
const app=express();
require('./database');
//confi
app.set('port', process.env.PORT||7000 );
app.set('views', path.join(__dirname,'views') );
app.engine('.hbs', exphbs.engine({
    defaultLayout:'main',
    layoutsDir:path.join(app.get('views'), 'layouts'),
    partialsDir:path.join(app.get('views'), 'partials'),
    extname:'.hbs'

}));
app.set('view engine','.hbs');

//middlewares
app.use(express.urlencoded({extended:false}));
app.use(method0verride('_method'));
app.use(session({
    secret:'strawberry',
    resave: true,
    saveUninitialized:true
}));
//variables globales

//rutas
app.use(require('./routes/index'));
app.use(require('./routes/users'));
app.use(require('./routes/fecha'));

//archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

//server 
app.listen(app.get('port'), ()=>{
    console.log('server on port', app.get('port'));
});