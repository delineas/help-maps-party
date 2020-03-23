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
          <div v-if="!isEditMode && !onEdit" class="buttons">
            <a class="button is-danger" @click="addResource">
              <span class="icon">
                <i class="fas fa-plus"></i>
              </span>
              <strong>Añadir recurso</strong>
            </a>
          </div>
          <div v-if="isEditMode"  class="buttons">
            <a class="button is-warning" @click="cancel">
              <span class="icon icon2">
                <i class="fas fa-times-circle"></i>
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

export default {
  name: "NavBar",
  components: {
    AboutModal
  },
  props: ["onEdit"],
  data() {
    return {
      isAboutModalActive: false,
    //   isEditMode: false
    };
  },
  computed: {
      isEditMode() {
          return this.onEdit;
      }
  },
  methods: {
    addResource() {
      this.isEditMode = true;
      this.$emit("edit-mode", true);
    },
    cancel() {
      this.isEditMode = false;
      this.$emit("edit-mode", false);
    }
  }
};
</script>

<style></style>
