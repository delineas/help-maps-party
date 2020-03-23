<template>
  <b-modal :active.sync="open" width="90%" style="z-index: 9999" scroll="keep">
    <div class="card">
      <div class="card-content">
        <p class="title">
        ¿Qué es esto?
        </p>
        <div class="content">
          Una aplicación web para localizar recursos en un mapa
          <br />
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: "AboutModal",
  props: ["active"],
  computed: {
    open: {
      get: function() {
        return this.active;
      },
      set: function(newValue) {
        this.active = newValue;
      }
    }
  }
};
</script>

<style></style>
