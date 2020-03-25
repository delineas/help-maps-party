import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    windowWidth: window.innerWidth,
    isGlobalEditMode: false,
    isGlobalBottomNav: false,
    isGlobalAddResourceForm: false,
    isGlobalListActive: false,
    userGlobalMarker: {
      lat: "",
      lng: ""
    }
  },
  mutations: {
    UPDATE_EDIT_MODE(state, payload) {
      state.isGlobalEditMode = payload;
    },
    UPDATE_BOTTOM_NAV(state, payload) {
      state.isGlobalBottomNav = payload;
    },
    UPDATE_GLOBAL_ADD_RESOURCE_FORM(state, payload) {
      state.isGlobalAddResourceForm = payload;
    },
    UPDATE_GLOBAL_USER_MARKER(state, payload) {
      state.userGlobalMarker = payload;
    },
    UPDATE_GLOBAL_USER_MARKER_DETAIL(state, payload) {
      state.userGlobalMarker[payload.coord] = payload.value;
    },
    UPDATE_GLOBAL_LIST_ACTIVE(state, payload) {
      state.isGlobalListActive = payload;
    },
    setWindowWidth(state) {
      state.windowWidth = window.innerWidth;
    }
  },
  actions: {
    UPDATE_GLOBAL_EDIT_MODE({ commit }, payload) {
      commit("UPDATE_EDIT_MODE", payload);
    },
    UPDATE_GLOBAL_BOTTOM_NAV({ commit }, payload) {
      commit("UPDATE_BOTTOM_NAV", payload);
    },
    UPDATE_GLOBAL_ADD_RESOURCE_FORM({ commit }, payload) {
      commit("UPDATE_GLOBAL_ADD_RESOURCE_FORM", payload);
    },
    UPDATE_GLOBAL_USER_MARKER({ commit }, payload) {
      commit("UPDATE_GLOBAL_USER_MARKER", payload);
    },
    UPDATE_GLOBAL_USER_MARKER_DETAIL({ commit }, payload) {
      commit("UPDATE_GLOBAL_USER_MARKER_DETAIL", payload);
    },
    UPDATE_GLOBAL_LIST_ACTIVE({ commit }, payload) {
      commit("UPDATE_GLOBAL_LIST_ACTIVE", payload);
    }
  }
});