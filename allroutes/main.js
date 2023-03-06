const app = require('../express');

app.get('/', (req, res) => {
    let user = {
        email:"email",
        name: "Moha"
    }

    res.cookie('name', 'value');
    res.cookie('age', 2321);
    res.cookie('address', 'my address');

    res.render("templates/home", {name: "name", title: "My home", user: user});
})

app.get('/login', ( req, res )=>{
    // Validation
    //....
    console.log(' cookies : ', req.headers.cookie );

    res.render("templates/login" , {name: "name", title: "Login"});
})


app.get('/names', ( req, res )=>{

    app.set( 'layout', './layouts/test' );
    
    res.render("templates/about" , {name: "name", title: "My home"});
})

app.get('/products', ( req, res )=>{

    res.render("templates/products", );
})






function view( p_res, view_name, layout_name, data = {})
{
    if( !data.title ) {
        data.title = "Home page"
    }
    app.set( 'layout', `./layouts/${layout_name}` );

    p_res.render(`templates/${view_name}`, { ...data, title:view_name  } );   
}
``




