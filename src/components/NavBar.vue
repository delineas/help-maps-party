<template>
  <span>
    <b-navbar fixed-top class="is-info is-z-superior">
      <template slot="brand">
        <b-navbar-item>
          <h2>help-maps-party</h2>
        </b-navbar-item>
        <b-navbar-item v-if="!isGlobalListActive" class="is-hidden-tablet" @click="UPDATE_GLOBAL_LIST_ACTIVE(true)">
          <span class="icon"><font-awesome-icon icon="list" /></span>
          <strong>Ver lista</strong>
        </b-navbar-item>
        <b-navbar-item v-if="isGlobalListActive" class="is-hidden-tablet" @click="UPDATE_GLOBAL_LIST_ACTIVE(false)">
          <span class="icon"><font-awesome-icon icon="map-marker" /></span>
          <strong>Ver mapa</strong>
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item @click="isAboutModalActive = !isAboutModalActive">
          ¿Qué es esto?
        </b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item @click="isHowToModalActive = !isHowToModalActive">
          ¿Cómo añadir?
        </b-navbar-item>
        <b-navbar-item tag="div">
          <div v-if="!isGlobalEditMode" class="buttons">
            <a class="button is-danger" @click="addResource">
              <span class="icon"><font-awesome-icon icon="plus" /></span>
              <strong>Añadir recurso</strong>
            </a>
          </div>
          <div v-else class="buttons">
            <a class="button is-warning" @click="cancel">
              <span class="icon"><font-awesome-icon icon="times-circle" /></span>
              <strong>Cancelar</strong>
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
    <b-modal
      :active.sync="isHowToModalActive"
      width="90%"
      style="z-index: 9999"
      scroll="keep"
    >
      <HowToAddModal />
    </b-modal>
  </span>
</template>

<script>
import AboutModal from "./AboutModal";
import HowToAddModal from "./HowToAddModal";
import { mapState, mapActions } from "vuex";

export default {
  name: "NavBar",
  components: {
    AboutModal,
    HowToAddModal
  },
  props: ["onEdit"],
  data() {
    return {
      isAboutModalActive: false,
      isHowToModalActive: false,
      isListActive: false
    };
  },
  computed: {
    ...mapState(["isGlobalEditMode", "isGlobalListActive"])
  },
  methods: {
    ...mapActions([
      "UPDATE_GLOBAL_EDIT_MODE",
      "UPDATE_GLOBAL_USER_MARKER",
      "UPDATE_GLOBAL_BOTTOM_NAV",
      "UPDATE_GLOBAL_LIST_ACTIVE"
    ]),
    addResource() {
      this.UPDATE_GLOBAL_EDIT_MODE(true);
      this.$buefy.toast.open({
        duration: 3000,
        message: "Marca un lugar en el mapa",
        position: "is-bottom"
      });
    },
    cancel() {
      this.UPDATE_GLOBAL_BOTTOM_NAV(false);
      this.UPDATE_GLOBAL_EDIT_MODE(false);
      this.UPDATE_GLOBAL_USER_MARKER({ lat: "", lng: "" });
    }
  }
};
</script>

<style>
.navbar.is-fixed-top.is-z-superior {
  z-index: 1001;
}
</style>
