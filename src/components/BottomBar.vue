<template>
  <div class="align-bottom">
        <a class="button is-danger is-large" @click="openResource">
          <span class="icon">
            <font-awesome-icon icon="arrow-right" />
          </span>
          <strong>Continuar</strong>
        </a>
  </div>
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
.align-bottom {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: 999;
}
</style>
