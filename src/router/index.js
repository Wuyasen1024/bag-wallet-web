import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ShopView from "../views/ShopView.vue";
import StoryView from "../views/StoryView.vue";
import CraftView from "../views/CraftView.vue";
import ContactView from "../views/ContactView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/shop",
      name: "shop",
      component: ShopView,
    },
    {
      path: "/story",
      name: "story",
      component: StoryView,
    },
    { path: "/craft",
      name: "craft",
      component: CraftView 
    },
    { path: "/contact",
      name: "contact",
      component: ContactView 
    },
  ],
});

export default router;
