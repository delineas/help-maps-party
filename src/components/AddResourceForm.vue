<template>
  <div class="modal-card" style="width: auto">
    <header class="modal-card-head">
      <p class="modal-card-title">Añade aquí tu recurso</p>
    </header>
    <section class="modal-card-body">
      <b-field>
        <b-input
          type="text"
          v-model="form.title"
          placeholder="Nombre o nick"
          required
        >
        </b-input>
      </b-field>
      <b-field>
        <b-input
          type="text"
          v-model="form.link"
          placeholder="Enlace a tu twitter o página personal"
          required
        >
        </b-input>
      </b-field>
      <b-field>
        <b-input
          maxlength="500"
          type="textarea"
          v-model="form.description"
          placeholder="¿Qué ofreces?"
          message="Describe aquí lo que ofreces"
          required
        >
        </b-input>
      </b-field>
      <b-field grouped label="Coordenadas">
        <b-field label="Latitud" expanded>
          <b-input
            type="text"
            :value="userGlobalMarker.lat"
            @input="updateLat"
            required
          ></b-input>
        </b-field>
        <b-field label="Longitud" expanded>
          <b-input
            type="text"
            :value="userGlobalMarker.lng"
            @input="updateLng"
            required
          ></b-input>
        </b-field>
      </b-field>
      <b-checkbox required v-model="form.lopd"
        >Acepto aparecer en el mapa con estos datos</b-checkbox
      >
    </section>
    <footer class="modal-card-foot">
      <button class="button" type="button" @click="close">
        Cerrar
      </button>
      <button class="button is-danger" @click="saveResource">
        Guardar en el mapa
      </button>
    </footer>
  </div>
</template>

<script>
import { db, GeoPoint } from "@/firebase";
import { collectionName } from "@/settings";

import { mapState, mapActions } from "vuex";

export default {
  name: "AddResourceForm",
  data() {
    return {
      form: {
        title: "",
        description: "",
        link: "",
        position: {
          lat: "",
          lng: ""
        },
        lopd: false
      }
    };
  },
  computed: {
    ...mapState([
      "isGlobalEditMode",
      "userGlobalMarker",
      "isGlobalAddResourceForm",
      "userGlobalMarker"
    ])
  },
  methods: {
    ...mapActions([
      "UPDATE_GLOBAL_USER_MARKER_DETAIL",
      "UPDATE_GLOBAL_USER_MARKER",
      "UPDATE_GLOBAL_EDIT_MODE",
      "UPDATE_GLOBAL_ADD_RESOURCE_FORM"
    ]),
    updateLat(value) {
      this.$store.commit("UPDATE_GLOBAL_USER_MARKER_DETAIL", {
        coord: "lat",
        value
      });
    },
    close() {
      this.UPDATE_GLOBAL_EDIT_MODE(false);
      this.UPDATE_GLOBAL_ADD_RESOURCE_FORM(false);
      this.UPDATE_GLOBAL_USER_MARKER({ lat: "", lng: "" });
      this.$parent.close();
    },
    updateLng(value) {
      this.$store.commit("UPDATE_GLOBAL_USER_MARKER_DETAIL", {
        coord: "lng",
        value
      });
    },
    async saveResource() {
      if (
        this.form.title != "" &&
        this.form.description != "" &&
        this.form.link != "" &&
        this.userGlobalMarker.lat != "" &&
        this.userGlobalMarker.lng != "" &&
        this.form.lopd == true
      ) {
        await db
          .collection(collectionName)
          .add({
            title: this.form.title,
            link: this.form.link,
            description: this.form.description,
            category: "general",
            position: new GeoPoint(
              parseFloat(this.userGlobalMarker.lat),
              parseFloat(this.userGlobalMarker.lng)
            )
          })
          .then(() =>
            this.$buefy.toast.open({
              message: "Recurso añadido correctamente",
              position: "is-bottom"
            })
          );
        this.UPDATE_GLOBAL_ADD_RESOURCE_FORM(false);
        this.UPDATE_GLOBAL_EDIT_MODE(false);
      }
    }
  }
};
</script>

<style>
.field.is-grouped > label {
  padding-right: 1em;
}
</style>
