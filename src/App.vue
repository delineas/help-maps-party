<template>
  <div>
    <NavBar></NavBar>
    <div class="columns">
      <div class="column is-three-quarters">
        <Map></Map>
      </div>
      <div class="column">
        <div id="places">
          <Places></Places>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Map from "@/components/Map.vue";
import Places from "@/components/Places.vue";

export default {
  name: "App",
  components: {
    Map,
    Places,
    NavBar
  }
};
</script>

<style></style>
