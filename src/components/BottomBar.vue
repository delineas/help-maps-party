<template>
  <b-navbar fixed-bottom class="navbar is-bottom-bar" style="z-index: 9999">
    <template slot="start">
      <b-navbar-item>
        <a class="button is-danger is-large" @click="openResource">
          <span class="icon">
            <i class="fas fa-arrow-right"></i>
          </span>
          <strong>Continuar</strong>
        </a>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "BottomBar",
  methods: {
    ...mapActions(["UPDATE_GLOBAL_EDIT_MODE", "UPDATE_GLOBAL_BOTTOM_NAV", "UPDATE_GLOBAL_ADD_RESOURCE_FORM"]),
    openResource() {
      this.UPDATE_GLOBAL_BOTTOM_NAV(false);
      this.UPDATE_GLOBAL_ADD_RESOURCE_FORM(true);
    }
  }
};
</script>

<style>
@media screen and (max-width: 1023px) {
  .is-bottom-bar .navbar-menu {
    display: block;
  }
}
.is-bottom-bar .navbar-brand {
  display: none;
}

</style>
