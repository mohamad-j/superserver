/// Implement view function
/// Add some validations

/// Cookies and Headers
/// Use cookie-parser


/// Database mssql.


function cookies( key, value )
{
    /// Convert to object
    let obj = {};
    document.cookie.split(';').forEach( el => { let kv = el.split('='); obj[ kv[0].replace(' ', '' ) ] = kv[1] } );

    /// Set cookie
    if( key && value ) {
        document.cookie = ` ${key} = ${value};`;
        obj[ key ] = value;
        return value ;
    }

    /// Get cookie
    if( obj[ key ] && !value ) {
        return obj[ key ]
    }

    /// Not found
    if( !obj[ key ] && !value ) {
        console.error( ` The key ${ key } does not exist!` );
        return;
    }
    
}


