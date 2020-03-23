<template>
  <div>
    <b-navbar class="is-info">
      <template slot="brand">
        <b-navbar-item>
          <h2>help-maps-party</h2>
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item @click="isAboutModalActive = true">
          ¿Qué es esto?
        </b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-danger">
              <strong>Añadir recurso</strong>
            </a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
    <AboutModal :active="isAboutModalActive"></AboutModal>
  </div>
</template>

<script>
import AboutModal from "./AboutModal";

export default {
  name: "NavBar",
  components: {
    AboutModal
  },
  data() {
    return {
      isAboutModalActive: false
    };
  }
};
</script>

<style></style>
