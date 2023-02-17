const app = require('../express');


console.log('mohamad is included.');

app.get('/moha', ( req, res )=>{
    console.log(' moha is called ');
    // DO some 
    res.json({"messag":"HEI"});
})