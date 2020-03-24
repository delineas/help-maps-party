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
        <a class="card-footer-item" @click="$emit('fly-to', place)">Ver en el mapa</a>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "Places",
  props: ["places"],
  methods: {
    flyTo(place) {
      console.log(this.$parent);
      this.$refs.map.mapObject.flyTo(place);
    }
  }
};
</script>
