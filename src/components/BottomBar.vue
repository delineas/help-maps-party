<template>
  <b-navbar fixed-bottom class="navbar" style="z-index: 9999">
    <template slot="start">
      <b-navbar-item>
        <a
          class="button is-danger is-large is-fullwidth"
          @click="$emit('open-resource')"
        >
          <span class="icon">
            <i class="fas fa-arrow-right"></i>
          </span>
          <strong>Continuar</strong>
        </a>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "BottomBar",
};
</script>

<style></style>
