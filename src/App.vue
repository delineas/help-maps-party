<template>
  <span>
    <NavBar></NavBar>
    <div class="is-columns-group">
      <div class="is-column map-container">
        <Map :places="places" :fly-to-marker="flyToMarker"></Map>
      </div>
      <div class="is-column places-container is-hidden-mobile">
        <Places :places="places" @fly-to="onFlyTo"></Places>
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
  </span>
</template>

<script>
import { db } from "@/firebase";
import { collectionName } from "@/settings"
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
    places: db.collection(collectionName)
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
.is-columns-group {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}

.is-column {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
}

.map-container {
  border-right: 1px solid #666;
  flex: 2
}
.places-container {
  overflow: auto;
  height: 100vh;
}
.no-gutter > .column {
  padding-right: 0;
  padding-left: 0;
}
.leaflet-top {
    top: 40px;
}
.notices {
  bottom: 30px !important;
}
</style>
