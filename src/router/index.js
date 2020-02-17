import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../views/Home.vue';
import users from '../views/users.vue';
import user from '../views/user.vue';
import items from '../views/items.vue';
import item from '../views/item.vue';

Vue.use(VueRouter);

const parseProps = r => ({ id: parseInt(r.params.id)});

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/users',
    name: 'users',
    component: users
  },
  {
    path: '/user/:id',
    name: 'user',
    component: user,
    props: parseProps
  },
  {
    path: '/items',
    name: 'items',
    component: items
  },
  {
    path: '/item/:id',
    name: 'item',
    component: item,
    props: parseProps
  }
];

const router = new VueRouter({
  routes
});

export default router;
