import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const api = 'http://localhost:3000';

const state = {
  items: []
};

const mutations = {
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
  async createItem({ commit }, item) {
    const res = await axios.post(`${api}/items`, item);
    commit('createItemMutation', res.data);
  },
  async readItems({ commit }) {
    const res = await axios.get(`${api}/items`);
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
  filterItemById: state => id => state.items.find( i => i.id === id)
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
