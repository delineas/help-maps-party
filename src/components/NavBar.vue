<template>
  <div>
    <b-navbar class="is-info">
      <template slot="brand">
        <b-navbar-item>
          <h2>help-maps-party</h2>
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item @click="isAboutModalActive = !isAboutModalActive">
          ¿Qué es esto?
        </b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div v-if="!isGlobalEditMode" class="buttons">
            <a class="button is-danger" @click="addResource">
              <span class="icon">
                <i class="fas fa-plus"></i>
              </span>
              <strong>Añadir recurso</strong>
            </a>
          </div>
          <div v-else class="buttons">
            <a class="button is-warning" @click="cancel">
              <span class="icon">
                <i class="fas fa-times-circle icon2"></i>
              </span>
              <strong>Cancelar añadir</strong>
            </a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
    <b-modal
      :active.sync="isAboutModalActive"
      width="90%"
      style="z-index: 9999"
      scroll="keep"
    >
      <AboutModal />
    </b-modal>
  </div>
</template>

<script>
import AboutModal from "./AboutModal";
import { mapState, mapActions } from "vuex";

export default {
  name: "NavBar",
  components: {
    AboutModal
  },
  props: ["onEdit"],
  data() {
    return {
      isAboutModalActive: false
      //   isEditMode: false
    };
  },
  computed: {
    ...mapState(["isGlobalEditMode"]),
  },
  methods: {
    ...mapActions(["UPDATE_GLOBAL_EDIT_MODE", "UPDATE_GLOBAL_USER_MARKER"]),
    addResource() {
      this.UPDATE_GLOBAL_EDIT_MODE(true);
    },
    cancel() {
      this.UPDATE_GLOBAL_EDIT_MODE(false);
      this.UPDATE_GLOBAL_USER_MARKER({lat: '', lng: ''});
    }
  }
};
</script>

<style></style>
