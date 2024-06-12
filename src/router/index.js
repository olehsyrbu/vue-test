import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Jobs from "../views/Jobs.vue";
import JobsDetail from "../views/JobsDetail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: Jobs,
  },
  {
    path: "/jobs/:id",
    name: "JobsDetail",
    component: JobsDetail,
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
