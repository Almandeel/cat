import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Client from "../views/Client.vue";
import Partners from "../views/partner.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: "Home",
      },
    },
    {
      path: "/about",
      name: "about",
      component: About,
      meta: {
        title: "About",
      },
    },
    {
      path: "/clients",
      name: "clients",
      component: Client,
      meta: {
        title: "Clients",
      },
    },
    {
      path: "/partners",
      name: "partners",
      component: Partners,
      meta: {
        title: "Partners",
      },
    },
    {
      path: "/products",
      name: "products",
      component: () => import("../views/Product.vue"),
      meta: {
        title: "Products",
      },
    },
    {
      path: "/services",
      name: "service",
      component: () => import("../views/Service.vue"),
      meta: {
        title: "Services",
      },
    },
    {
      path: "/contacts",
      name: "contacts",
      component: () => import("../views/Contact.vue"),
      meta: {
        title: "Contact Us",
      },
    },
  ],
});

export default router;
