import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Client from "../views/Client.vue";
import Partners from "../views/partner.vue";
// import Post from "../views/Posts.vue";
// import RouterView from "../views/RouterView.vue";
// import { i18n } from "../main.js";


Vue.use(VueRouter);

// const routes = [
//   {
//     path: "/",
//     name: "Home",
//     component: Home
//   },
//   {
//     path: "/about",
//     name: "About",
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import(/* webpackChunkName: "about" */ "../views/About.vue")
//   }
// ];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
      {
        path: "/",
        name: "home",
        component: Home,
        meta : {
          title : 'Home'
        }
      },
      {
        path: "/about",
        name: "about",
        component : About,
        meta : {
          title : "About"
        }
      },
      {
        path: "/clients",
        name: "clients",
        component : Client,
        meta : {
          title : "Clients"
        }
      },
      {
        path: "/partners",
        name: "partners",
        component : Partners,
        meta : {
          title : "Partners"
        }
      },
      {
        path: "/products",
        name: "products",
        component : () => import("../views/Product.vue"),
        meta : {
          title : "Products & Services"
        }
      },
      {
        path: "/contacts",
        name: "contacts",
        component : () => import("../views/Contact.vue"),
        meta : {
          title : "contacts"
        }
        
      },
      // path: "/:lang",
      // component: RouterView,
      // beforeEnter(to, from, next) {
      //   const lang = to.params.lang;
      //   if (!["ar", "en"].includes(lang)) return next("en");
      //   if (i18n.locale !== lang) {
      //     i18n.locale = lang;
      //   }
      //   return next();
      // },
      // children: [
      //   {
      //     path: "/",
      //     name: "home",
      //     component: Home,
      //     meta : {
      //       title : 'Home'
      //     }
      //   },
      //   {
      //     path: "about",
      //     name: "about",
      //     component : About,
      //     meta : {
      //       title : "About"
      //     }
      //   },
      //   {
      //     path: "clients",
      //     name: "clients",
      //     component : Client,
      //     meta : {
      //       title : "Clients"
      //     }
      //   },
      //   {
      //     path: "partners",
      //     name: "partners",
      //     component : Partners,
      //     meta : {
      //       title : "Partners"
      //     }
      //   },
      //   {
      //     path: "products",
      //     name: "products",
      //     component : () => import("../views/Product.vue"),
      //     meta : {
      //       title : "Products & Services"
      //     }
      //   },
      // ]
  ]
});

export default router;
