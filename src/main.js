import { createApp } from "vue";
import App from "./App.vue";
import "./main.css";
import * as VueRouter from "vue-router";
import ShoppingCartPage from "./pages/ShoppingCartPage.vue";
import ProductsPage from "./pages/ProductsPage.vue";
import ProductDetailPage from "./pages/ProductDetailPage.vue";
import NotFoundPage from "./pages/NotFoundPage.vue";

// Create a new Vue app and pass the router object as an option before .mount --- .use(VueRouter.createRouter(...)

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAgKSFoavtXNNjk-urgDmxYybaQlUEBsvU",
  authDomain: "vue-prj-24fb9.firebaseapp.com",
  projectId: "vue-prj-24fb9",
  storageBucket: "vue-prj-24fb9.appspot.com",
  messagingSenderId: "846090692784",
  appId: "1:846090692784:web:6efdf39a01bca7b6ee3375",
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App)
  .use(
    VueRouter.createRouter({
      history: VueRouter.createWebHistory(process.env.BASE_URL),
      routes: [
        {
          path: "/cart",
          component: ShoppingCartPage,
        },
        {
          path: "/products",
          component: ProductsPage,
        },
        {
          path: "/products/:productId",
          component: ProductDetailPage,
        },
        // This is a catch-all route in case none of the above matches
        {
          path:"/",
          redirect: "/products",
        },
        {
          path: "/:pathMatch(.*)*",
          component: NotFoundPage,
        },
      ],
    })
  )
  .mount("#app");
