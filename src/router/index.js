import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/components/Dashboard';
import Users from '@/components/Users';
import User from '@/components/User';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      children: [{
        path: '/users',
        name: 'users',
        component: Users,
      },
      {
        path: '/user/:name',
        name: 'user',
        component: User,
      },
      ],
    },
  ],
});
