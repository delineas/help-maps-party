<template>
  <l-map
    ref="map"
    class="is-map"
    v-if="showMap"
    :zoom="zoom"
    :center="center"
    :options="mapOptions"
    style="width: 100%;"
    @update:center="centerUpdate"
    @update:zoom="zoomUpdate"
    @click="addMarker"
  >
    <l-tile-layer :url="url" :attribution="attribution" />
    <VueLeafletLocate />
    <VueLeafletSearch />
    <l-marker
      v-for="place in places"
      :key="place.id"
      :lat-lng="formatPosition(place)"
    >
      <l-popup :content="formatContent(place)" />
    </l-marker>
    <l-marker v-if="userGlobalMarker !== null" :lat-lng="userGlobalMarker">
      <l-popup content="Posicion añadida por el usuario" />
    </l-marker>
  </l-map>
</template>

<script>
import { center } from "@/settings.js";
import { latLng } from "leaflet";
import "leaflet/dist/leaflet.css";
import VueLeafletLocate from "./VueLeafletLocate.vue";
import VueLeafletSearch from "./VueLeafletSearch.vue";
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";

import { Icon } from "leaflet";

import { mapState, mapActions } from "vuex";

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

export default {
  name: "Map",
  props: ["places", "editMode", "flyToMarker"],
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    VueLeafletLocate,
    VueLeafletSearch
  },
  data() {
    return {
      zoom: center.zoom,
      center: latLng(center.lat, center.lng),
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      currentZoom: center.zoom,
      currentCenter: latLng(center.lat, center.lng),
      showParagraph: false,
      userMarker: null,
      mapOptions: {
        zoomSnap: 0.5
      },
      showMap: true
    };
  },
  computed: {
    ...mapState(["isGlobalEditMode", "userGlobalMarker"])
  },
  methods: {
    ...mapActions([
      "UPDATE_GLOBAL_EDIT_MODE",
      "UPDATE_GLOBAL_BOTTOM_NAV",
      "UPDATE_GLOBAL_ADD_RESOURCE_FORM",
      "UPDATE_GLOBAL_USER_MARKER",
      "UPDATE_GLOBAL_LIST_ACTIVE"
    ]),
    formatPosition(data) {
      return { name: data.title, lng: data.position.V, lat: data.position.F };
    },
    formatContent(data) {
      return `<h5 class="title is-4">${data.title}</h5><p>${data.description}</p><p><a target="_blank" href="${data.link}">Ir al enlace</a></p>`;
    },
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    addMarker(event) {
      if (this.isGlobalEditMode) {
        this.UPDATE_GLOBAL_USER_MARKER(event.latlng);
        this.UPDATE_GLOBAL_BOTTOM_NAV(true);
      }
    }
  },
  watch: {
    flyToMarker() {
      this.$refs.map.mapObject.flyTo(
        {
          lat: this.flyToMarker.position.F,
          lng: this.flyToMarker.position.V
        },
        16
      );
    }
  }
};
</script>

<style>
.is-map {
  height: calc(100vh - 50px) !important;
}
</style>
