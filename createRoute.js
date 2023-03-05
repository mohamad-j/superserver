const app = require("./express");

// Общие данные
const commonData = { name: "MyWebsite" };

// Функция для создания обработчика маршрута
function createRouteFunc(template, title, options = {}) {
  const { layout = "./layouts/test", extraData = {} } = options;
  return function (req, res) {
    const data = {
      ...commonData,
      ...req.params,
      ...req.query,
      ...options.data,
    };
    app.set("layout", layout);
    app.render(template, { ...data, ...extraData, title }, (err, html) => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal server error");
      } else {
        res.send(html);
      }
    });
  };
}

module.exports = { createRouteFunc };
