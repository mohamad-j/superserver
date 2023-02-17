const app = require('../express')

app.get('/', (req, res) => {
    
    res.render("templates/home");
})

app.get('/about', ( req, res )=>{
    res.render("templates/about");
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





