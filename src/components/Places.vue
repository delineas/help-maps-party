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
          {{ place.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Places",
  props: ["places"],
  methods: {}
};
</script>
