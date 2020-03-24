<template>
  <div>
    <NavBar></NavBar>
    <div class="columns no-gutter">
      <div class="column is-three-quarters map-container">
        <Map :places="places" :fly-to-marker="flyToMarker"></Map>
      </div>
      <div class="column places-container">
        <div id="places">
          <Places :places="places" @fly-to="onFlyTo"></Places>
        </div>
      </div>
    </div>
    <BottomBar v-if="isGlobalBottomNav"></BottomBar>
    <b-modal
      :active.sync="isGlobalAddResourceForm"
      has-modal-card
      full-screen
      :can-cancel="true"
      style="z-index: 9999"
    >
      <AddResourceForm></AddResourceForm>
    </b-modal>
  </div>
</template>

<script>
import { db } from "@/firebase";
import NavBar from "@/components/NavBar";
import BottomBar from "@/components/BottomBar";
import Map from "@/components/Map.vue";
import AddResourceForm from "@/components/AddResourceForm.vue";
import Places from "@/components/Places.vue";

import { mapState, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    Map,
    Places,
    NavBar,
    BottomBar,
    AddResourceForm
  },
  firestore: {
    places: db.collection("test-places")
  },
  data() {
    return {
      places: [],
      isAddResourceActive: false,
      flyToMarker: null
    };
  },
  computed: {
    ...mapState([
      "isGlobalEditMode",
      "isGlobalBottomNav",
      "isGlobalAddResourceForm"
    ])
  },
  methods: {
    ...mapActions(["UPDATE_GLOBAL_EDIT_MODE", "UPDATE_GLOBAL_BOTTOM_NAV"]),
    onFlyTo(e) {
      console.log(e);
      this.flyToMarker = e;
    }
  }
};
</script>

<style>
.map-container {
  border-right: 1px solid #666;
}
.places-container {
  overflow: auto;
  height: 100vh;
}
.no-gutter > .column {
  padding-right: 0;
  padding-left: 0;
}
</style>
