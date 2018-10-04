const nextRoutes = require("next-routes");
const routes = require("./routes");

// const router = (module.exports = require("next-routes-with-locale")({
//   locale: "sv"
// }));

const router = (module.exports = nextRoutes());

routes.forEach(r => {
  router.add(r.page, `/:lang(en|sv)${r.route}`, r.page);
  // router.add(r.route, r.page);
});

router.add("item", "/:lang(en|sv)/menu/:id");
