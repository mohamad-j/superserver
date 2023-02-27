const app = require('../express')

app.get('/', (req, res) => {
    let user = {
        email:"email",
        name: "Moha"
    }
    res.render("templates/home", {name: "name", title: "My home", user: user});
})

app.get('/about', ( req, res )=>{
    app.set( 'layout', './layouts/test' );

    res.render("templates/about" , {name: "name", title: "My home"});
})


app.get('/names', ( req, res )=>{
    app.set( 'layout', './layouts/test' );
    
    res.render("templates/about" , {name: "name", title: "My home"});
})

app.get('/products', ( req, res )=>{
    res.render("templates/products");
})


// app.post('/about', ( req, res )=>{
//     res.send('Hello About!')
// })

// app.all('/login', ( req, res )=>{
//     res.send( `<h1>Logi</h1>`)
// })

// app.get('/user/:userlast?', ( req, res )=>{
//     res.send('USER !'+ req.params.userlast)
// })





