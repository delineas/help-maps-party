<template>
  <div>
    <NavBar></NavBar>
    <div class="columns">
      <div class="column is-three-quarters">
        <Map :places="places"></Map>
      </div>
      <div class="column">
        <div id="places">
          <Places :places="places"></Places>
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
import {db} from "@/firebase";
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
      isAddResourceActive: false
    };
  },
  computed: {
    ...mapState(["isGlobalEditMode", "isGlobalBottomNav", "isGlobalAddResourceForm"]),
  },
  methods: {
    ...mapActions(["UPDATE_GLOBAL_EDIT_MODE", "UPDATE_GLOBAL_BOTTOM_NAV"]),
  },
};
</script>

<style></style>
