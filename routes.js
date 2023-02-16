const app = require('./express')

app.get('/', (req, res) => {
    
    res.render("templates/home");
})

app.get('/about', ( req, res )=>{
    res.send('Hello About!')
})


app.post('/about', ( req, res )=>{
    res.send('Hello About!')
})

app.all('/login', ( req, res )=>{
    res.send( `<h1>Logi</h1>`)
})

app.get('/user/:userlast?', ( req, res )=>{
    res.send('USER !'+ req.params.userlast)
})

app.all('*', ( req, res )=>{
    res.send('Not found!')
})