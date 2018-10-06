const nextRoutes = require("next-routes");
const getRoutes = require("./routes");

const router = (module.exports = nextRoutes());

const routes = getRoutes();

Object.keys(routes).forEach(r => {
  const route = routes[r];
  router.add(route.page, route.route, route.page);
});
