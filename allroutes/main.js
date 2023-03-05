const app = require("../express");
const { createRouteFunc } = require("../createRoute");

const routes = [
  {
    path: "/",
    title: "My home",
    template: "templates/home",
    data: { user: { email: "email", name: "Moha" } },
  },
  { path: "/about", title: "About", template: "templates/about", data: {} },
  {
    path: "/names",
    title: "Names",
    template: "templates/names",
    data: { user: { email: "email", name: "Kamil", address: "Norway" } },
  },
  {
    path: "/products",
    title: "Products",
    template: "templates/products",
    data: {},
  },
];

for (let route of routes) {
  const { template, data, title } = route;
  app.get(route.path, createRouteFunc(template, title, { data }));
}
