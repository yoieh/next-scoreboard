const nextRoutes = require("next-routes");
const routes = require("./routes");

const router = (module.exports = nextRoutes());

routes.forEach(r => {
  router.add(r.page, r.route);
});

router.add("item", "/menu/:id");
