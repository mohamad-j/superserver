const path = require('path');
const fs = require('fs');


function requireAllRoutes()
{
    /// Find all js files inside tha allroutes folder
    // Then require them.
    let d = __dirname;
    console.log(' d : ', d);

    console.log(' __dirname : ', __dirname);

  
  let routes = path.join( d, "allroutes" );

  const routes_files = fs.readdirSync( routes );

  if( routes_files ) {
    routes_files.forEach( _f=>{
          console.log("_f : ", _f );
          require( `${routes}/${ _f.split('.')[0] }` );
      });
  }
}


module.exports = { requireAllRoutes }