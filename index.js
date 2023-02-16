const app = require('./express')
const port = 3000
require('./routes');


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})