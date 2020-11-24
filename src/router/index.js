import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../views/Home.vue';
import items from '../views/items.vue';
import item from '../views/item.vue';
import resources from '../views/resources.vue';


Vue.use(VueRouter);

const parseProps = r => ({ id: parseInt(r.params.id)});

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
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
  },
  {
    path: '/resources',
    name: 'resources',
    component: resources
  }
];

const router = new VueRouter({
  routes
});

export default router;
