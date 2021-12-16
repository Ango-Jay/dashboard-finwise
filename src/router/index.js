import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";

const routes = [
  { path: "/", component: Login },
  { path: "/dash", component: Dashboard }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
