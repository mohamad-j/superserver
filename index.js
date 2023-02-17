const app = require('./express')
const port = 3000
const { requireAllRoutes } = require('./routes');

requireAllRoutes();


app.all('*', ( req, res )=>{
  res.send('Not found!')
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})