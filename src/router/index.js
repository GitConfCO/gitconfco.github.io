import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/speakers',
    name: 'speakers',
    component: () => import('../views/Speakers.vue'),
  },
  {
    path: '/agenda',
    name: 'agenda',
    component: () => import('../views/Schedule.vue'),
  },
  {
    path: '/equipo',
    name: 'equipo',
    component: () => import('../views/Team.vue'),
  },
  {
    path: '/patrocinadores',
    name: 'patrocinadores',
    component: () => import('../views/Sponsors.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
