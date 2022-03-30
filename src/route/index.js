import { createRouter,createWebHashHistory } from "vue-router";
const homeView = ()=>import ("../components/HomeView.vue")
const xxx = ()=>import ("../components/XXX.vue")
const yyy = ()=>import ("../components/YYY.vue")
const routes = [
    {path:'/',redirect:'/homeView'},
    {path:'/homeView',name:'homeView',component:homeView},
    {path:'/xxx',name:'xxx',component:xxx},
    {path:'/yyy',name:'yyy',component:yyy}
]
export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
  })