import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";


const isAuth = (to, from, next)=>{
  if(window.localStorage.getItem("email") && window.localStorage.getItem("userName")){
    next()
  }
  else{
    next("/login")
  }
}


const routes = [
  {path:"/", redirect:"/login"},
  { path: "/login", component: Login },
  { path: "/dash", component: Dashboard, beforeEnter:isAuth }
];


const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
