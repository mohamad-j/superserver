const app = require("./express");

function view( p_res,  view_name, p_title = 'Title', p_layout = 'default', p_data = {}  )
{
    /// view_name, p_title, p_layout = 'default', p_data = {}
    app.set('layout', `./layouts/${ p_layout }` );

    let data = Object.assign({
        "view_name": view_name, 
        "title": p_title ?? view_name
    }, p_data);
    /// console.log(' p_res ', p_res );
    /// p_res.cookie('cookieName','Value sss', { maxAge: 900000, httpOnly: true });
    p_res.render('templates/' + view_name , data );
}

module.exports = {
    view
}