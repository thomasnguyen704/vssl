/* eslint-disable no-unused-vars */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import createPersistedState from "vuex-persistedstate";
import router from '../router';

Vue.use(Vuex);

const api = 'https://my-json-server.typicode.com/thomasnguyen704/test_api';

const state = {
  users: [],
  items: []
};

const mutations = {
  // User mutations
  createUserMutation(state, user) {
    state.users.push(user);
  },
  readUsersMutation(state, users) {
    state.users = users;
  },
  updateUserMutation(state, user) {
    const index = state.users.findIndex(i => i.id === user.id);
    state.users.splice(index, 1, user);
    state.users = [...state.users];
  },
  deleteUserMutation(state, user) {
    state.users = [...state.users.filter(i => i.id !== user.id)];
  },
  // Item mutations
  createItemMutation(state, item) {
    state.items.push(item);
  },
  readItemsMutation(state, items) {
    state.items = items;
  },
  updateItemMutation(state, item) {
    const index = state.items.findIndex(i => i.id === item.id);
    state.items.splice(index, 1, item);
    state.items = [...state.items];
  },
  deleteItemMutation(state, item) {
    state.items = [...state.items.filter(i => i.id !== item.id)];
  }
};

const actions = {
  // User actions
  async createUser({ commit }, user) {
    const res = await axios.post(`${api}/users`, user);
    commit('createUserMutation', res.data);
  },
  async readUsers({ commit }) {
    const res = await axios.get(`${api}/users`);
    commit('readUsersMutation', res.data);
  },
  async updateUser({ commit }, user) {
    const res = await axios.put(`${api}/users/${user.id}`, user);
    commit('updateUserMutation', res.data);
  },
  async deleteUser({ commit }, user) {
    const res = await axios.delete(`${api}/users/${user.id}`);
    commit('deleteUserMutation', res.data);
  },

  // Item actions
  async createItem({ commit }, item) {
    const res = await axios.post(`${api}/items`, item);
    commit('createItemMutation', res.data);
  },
  async readItems({ commit }) {
    const res = await axios.get(`${api}/items`);
    commit('readItemsMutation', res.data);
  },
  async readItemsByUser({ commit }) {
    var routeParam = router.currentRoute.params.id;
    const res = await axios.get(`${api}/items?userId=${routeParam}`);
    commit('readItemsMutation', res.data);
  },
  async updateItem({ commit }, item) {
    const res = await axios.put(`${api}/items/${item.id}`, item);
    commit('updateItemMutation', res.data);
  },
  async deleteItem({ commit }, item) {
    const res = await axios.delete(`${api}/items/${item.id}`);
    commit('deleteItemMutation', res.data);
  }
};

const getters = {
  // item getter
  filterItemById: state => id => state.items.find( i => i.id === id)
};

export default new Vuex.Store({
  mode: 'history',
  state,
  mutations,
  actions,
  getters,
  plugins: [createPersistedState()]
});