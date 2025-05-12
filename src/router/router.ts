import { createRouter, createWebHistory, RouteComponent } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: (): Promise<RouteComponent> =>
        import('../views/LoginView.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      component: (): Promise<RouteComponent> =>
        import('../views/SignupView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: (): Promise<RouteComponent> =>
        import('../views/NotFoundView.vue'),
    },
  ],
});

export default router;
