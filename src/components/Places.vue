<template>
  <div class="container">
    <div class="card" v-for="place in places" :key="place.id">
      <header class="card-header">
        <p class="card-header-title">
          {{ place.title }}
        </p>
      </header>
      <div class="card-content">
        <div class="content">
          {{ place.description | truncate(100, '...')  }}
        </div>
      </div>
      <footer class="card-footer">
        <a class="card-footer-item" @click="flyTo(place)">Ver en el mapa</a>
      </footer>
    </div>
  </div>
</template>

<script>
import { mapActions }  from "vuex";

export default {
  name: "Places",
  props: ["places"],
  methods: {
    ...mapActions([
      "UPDATE_GLOBAL_LIST_ACTIVE"
    ]),
    flyTo(place) {
      this.UPDATE_GLOBAL_LIST_ACTIVE(false);
      this.$emit('fly-to', place);
    }
  }
};
</script>
