<template>
  <div>
    <NavBar @edit-mode="onEditMode" :on-edit="isEditMode"></NavBar>
    <div class="columns">
      <div class="column is-three-quarters">
        <Map :places="places" :on-edit="isEditMode" :edit-mode="editMode" @user-marker="onUserMarkerSelected"></Map>
      </div>
      <div class="column">
        <div id="places">
          {{editMode}}
          <Places :places="places"></Places>
        </div>
      </div>
    </div>
    <BottomBar v-if="isBottomBar" @open-resource="onOpenAddResourceForm" :on-edit="isEditMode"></BottomBar>
      <b-modal :active.sync="isAddResourceActive"
          has-modal-card full-screen :can-cancel="true" style="z-index: 9999" @close="isEditMode = false;">
          <AddResourceForm :userMarker="userMarker"></AddResourceForm>
      </b-modal>
  </div>
</template>

<script>
import db from "@/firebase";
import NavBar from "@/components/NavBar";
import BottomBar from "@/components/BottomBar";
import Map from "@/components/Map.vue";
import AddResourceForm from "@/components/AddResourceForm.vue";
import Places from "@/components/Places.vue";

export default {
  name: "App",
  components: {
    Map,
    Places,
    NavBar,
    BottomBar,
    AddResourceForm,
  },
  firestore: {
    places: db.collection("test-places")
  },
  data() {
    return {
      places: [],
      userMarker: {},
      isEditMode: false,
      isBottomBar: false,
      isAddResourceActive: false,
    };
  },
  computed: {
    editMode() {
      return this.isEditMode;
    }
  },
  methods: {
      onEditMode(payload) {
          this.isEditMode = payload;
          if(!payload) {
            this.isBottomBar = false;
          }
      },
      onUserMarkerSelected(latLng) {
        this.userMarker = latLng;
        this.isBottomBar = true;
      },
      onOpenAddResourceForm() {
        this.isBottomBar = false;
        this.isEditMode = false;
        this.isAddResourceActive = true;
      }
  }
};
</script>

<style></style>
