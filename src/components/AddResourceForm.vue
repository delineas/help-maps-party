<template>
  <div class="modal-card" style="width: auto">
    <header class="modal-card-head">
      <p class="modal-card-title">Añade aquí tu recurso</p>
    </header>
    <section class="modal-card-body">
      <b-field>
        <b-input type="text" :value="form.title" placeholder="Nombre o nick" required>
        </b-input>
      </b-field>
      <b-field grouped label="Coordenadas">
        <b-field label="Latitud" expanded>
            <b-input type="text" :value="form.position.lat" required></b-input>
        </b-field>
        <b-field label="Logintud" expanded>
            <b-input type="text" :value="form.position.lng" required></b-input>
        </b-field>
      </b-field>    

    <b-field>
        <b-input type="text" :value="form.link" placeholder="Enlace a tu twitter o página personal" required>
        </b-input>
      </b-field>
    <b-field>
        <b-input maxlength="500" type="textarea" :value="form.description" placeholder="¿Qué ofreces?" message="Describe aquí lo que ofreces" required>
        </b-input>
      </b-field>
      <b-checkbox required>Acepto aparecer en el mapa con estos datos</b-checkbox>
    </section>
    <footer class="modal-card-foot">
      <button class="button" type="button" @click="$parent.close()">
        Cerrar
      </button>
      <button class="button is-danger">Guardar en el mapa</button>
    </footer>
  </div>
</template>

<script>
export default {
  name: "AddResourceForm",
  props: ["userMarker"],
  data() {
    return {
      form: {
        title: "",
        description: "",
        link: "",
        position: {
            lat: this.$props.userMarker.lat,
            lng: this.$props.userMarker.lng
        }
      }
    };
  }
};
</script>

<style></style>
