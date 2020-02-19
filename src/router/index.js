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
    path: '/schedule',
    name: 'schedule',
    component: () => import('../views/Schedule.vue'),
  },
  {
    path: '/team',
    name: 'team',
    component: () => import('../views/Team.vue'),
  },
  {
    path: '/coming-soon',
    name: 'coming-soon',
    component: () => import('../views/NotFound.vue'),
  },
];

const router = new VueRouter({
  base: '/',
  routes,
});

export default router;
