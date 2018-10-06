module.exports = () => {
  return {
    "/": { page: "index", route: "/:lang(en|sv)/", title: "Scoreborad" },
    "/404": { page: "404", route: "/:lang(en|sv)/404" },
    "/dashboard": {
      page: "dashboard",
      route: "/:lang(en|sv)/dashboard",
      title: "Dashboard"
    },
    "/menu": { page: "item", route: "/:lang(en|sv)/menu/:id", title: "Item" }
  };
};
