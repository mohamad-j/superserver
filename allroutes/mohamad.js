const app = require('../express');


console.log('mohamad is included.');

app.get('/moha', ( req, res )=>{
    console.log(' moha is called ');
    // DO some 
    res.json({"messag":"HEI"});
})

app.get('/products', ( req, res )=>{
    // Run some code here

    // Return the result
    res.json({"messag":"HEI"});
})


function getName()
{

}