<template>
  <div class="find-us-page py-16 md:py-24 lg:py-32">
    <section class="w-full overflow-hidden">
      <div class="w-[92%] max-w-[1550px] mx-auto px-4 md:px-8">

        <!-- ====================================== -->
        <!-- FIND HEADER -->
        <!-- ====================================== -->

        <div class="flex items-center gap-3 mb-8 md:mb-10 lg:mb-12">
          <span
            class="text-[#989898] font-[Figtree] font-light tracking-[0.05em] text-3xl md:text-4xl lg:text-5xl"
          >
            FIND
          </span>

          <div
            class="relative h-10 md:h-14 lg:h-[75px] flex-1 min-w-0"
          >
            <img
              alt="CLEARiT"
              loading="lazy"
              decoding="async"
              src="/media/logo.f02482b3.png"
              class="w-full h-full object-contain object-left"
            />
          </div>
        </div>


        <!-- ====================================== -->
        <!-- FILTERS -->
        <!-- ====================================== -->

        <div
          class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 md:mb-8 lg:mb-10"
        >

          <!-- LOCATION -->
          <button
            type="button"
            class="find-filter"
            @click="toggleFilter('location')"
          >
            <span>{{ selectedCity }}</span>

            <span class="filter-arrow">
              {{ activeFilter === 'location' ? '−' : '+' }}
            </span>
          </button>


          <!-- DISTANCE -->
          <button
            type="button"
            class="find-filter"
            @click="toggleFilter('distance')"
          >
            <span>{{ selectedDistance }}</span>

            <span class="filter-arrow">
              {{ activeFilter === 'distance' ? '−' : '+' }}
            </span>
          </button>


          <!-- LOCATION TYPE -->
          <button
            type="button"
            class="find-filter"
            @click="toggleFilter('type')"
          >
            <span>{{ selectedType }}</span>

            <span class="filter-arrow">
              {{ activeFilter === 'type' ? '−' : '+' }}
            </span>
          </button>

        </div>


        <!-- ====================================== -->
        <!-- FILTER OPTIONS -->
        <!-- ====================================== -->

        <transition name="filter-dropdown">
          <div
            v-if="activeFilter"
            class="filter-options"
          >

            <!-- CITY -->
            <template v-if="activeFilter === 'location'">
              <button
                v-for="city in cities"
                :key="city"
                type="button"
                @click="selectCity(city)"
              >
                {{ city }}
              </button>
            </template>


            <!-- DISTANCE -->
            <template v-if="activeFilter === 'distance'">
              <button
                v-for="distance in distances"
                :key="distance"
                type="button"
                @click="selectDistance(distance)"
              >
                {{ distance }}
              </button>
            </template>


            <!-- LOCATION TYPE -->
            <template v-if="activeFilter === 'type'">
              <button
                v-for="type in locationTypes"
                :key="type"
                type="button"
                @click="selectType(type)"
              >
                {{ type }}
              </button>
            </template>

          </div>
        </transition>


        <!-- ====================================== -->
        <!-- LOCATION + MAP -->
        <!-- ====================================== -->

        <div class="flex flex-col md:flex-row gap-6 lg:gap-8">

          <!-- ==================================== -->
          <!-- LOCATION LIST -->
          <!-- ==================================== -->

          <div
            class="w-full md:w-[40%] lg:w-[38%] flex-shrink-0"
          >

            <button
              v-for="location in filteredLocations"
              :key="location.id"
              type="button"
              class="location-item"
              :class="{
                'location-item-active':
                  selectedLocation &&
                  selectedLocation.id === location.id
              }"
              @click="selectLocation(location)"
            >

              <!-- NAME -->
              <p class="location-name">
                {{ location.name }}
              </p>


              <!-- ADDRESS -->
              <p class="location-address">
                {{ location.address }}
              </p>


              <!-- META -->
              <div class="flex items-center gap-4 flex-wrap">

                <span class="location-type">
                  {{ location.type }}
                </span>

                <span class="location-phone">
                  {{ location.phone }}
                </span>

              </div>

            </button>


            <!-- NO RESULT -->
            <div
              v-if="filteredLocations.length === 0"
              class="no-location"
            >
              No CLEARiT locations found.
            </div>

          </div>


          <!-- ==================================== -->
          <!-- GOOGLE MAP -->
          <!-- ==================================== -->

          <div
            class="flex-1 min-h-[520px] md:h-[600px] lg:h-[700px] relative"
          >

            <div
              ref="map"
              class="map-container"
            ></div>


            <!-- LOADING -->
            <transition name="map-fade">
              <div
                v-if="mapLoading"
                class="map-overlay"
              >
                <div class="map-loading-content">

                  <div class="map-spinner"></div>

                  <span>
                    Loading map...
                  </span>

                </div>
              </div>
            </transition>


            <!-- ERROR -->
            <transition name="map-fade">
              <div
                v-if="mapError"
                class="map-overlay map-error"
              >
                <div>

                  <strong>
                    Google Maps could not be loaded.
                  </strong>

                  <p>
                    Please check your Google Maps API key.
                  </p>

                  <button
                    type="button"
                    class="retry-button"
                    @click="initializeMap"
                  >
                    Retry
                  </button>

                </div>
              </div>
            </transition>

          </div>

        </div>

      </div>
    </section>
  </div>
</template>


<script>
export default {
  name: 'FindUs',

  data() {
    return {
      map: null,

      AdvancedMarkerElement: null,

      LegacyMarker: null,

      markers: [],

      mapLoading: true,

      mapError: false,

      activeFilter: null,

      selectedCity: 'Miami, FL',

      selectedDistance: 'Within 25 mi',

      selectedType: 'Location Type',

      cities: [
        'Miami, FL'
      ],

      distances: [
        'Within 10 mi',
        'Within 25 mi',
        'Within 50 mi'
      ],

      locationTypes: [
        'Location Type',
        'CLEARiT Center'
      ],

      selectedLocation: null,

      locations: [
        {
          id: 1,
          name: 'Jackson Memorial Hospital',
          address: '1611 NW 12th Ave, Miami, FL 33136',
          phone: '305-585-1111',
          type: 'CLEARiT Center',
          lat: 25.7907,
          lng: -80.2109
        },

        {
          id: 2,
          name: 'Mount Sinai Medical Center',
          address: '4300 Alton Rd, Miami Beach, FL 33140',
          phone: '305-674-2121',
          type: 'CLEARiT Center',
          lat: 25.8137,
          lng: -80.1402
        },

        {
          id: 3,
          name: 'University of Miami Hospital',
          address: '1400 NW 12th Ave, Miami, FL 33136',
          phone: '305-689-5511',
          type: 'CLEARiT Center',
          lat: 25.7886,
          lng: -80.2138
        }
      ]
    }
  },


  computed: {
    filteredLocations() {
      let results = [...this.locations]

      if (
        this.selectedType &&
        this.selectedType !== 'Location Type'
      ) {
        results = results.filter(
          location =>
            location.type === this.selectedType
        )
      }

      return results
    }
  },


  async mounted() {
    this.selectedLocation = this.locations[0]

    await this.initializeMap()
  },


  beforeUnmount() {
    this.destroyMarkers()

    this.map = null

    this.AdvancedMarkerElement = null

    this.LegacyMarker = null
  },


  methods: {

    /* ========================================= */
    /* WAIT FOR GOOGLE MAPS */
    /* ========================================= */

    waitForGoogleMaps(timeout = 15000) {
      return new Promise((resolve, reject) => {
        const startTime = Date.now()

        const check = () => {

          const isReady =
            window.google &&
            window.google.maps &&
            typeof window.google.maps.Map === 'function'

          if (isReady) {
            resolve()
            return
          }

          if (
            Date.now() - startTime >=
            timeout
          ) {
            reject(
              new Error(
                'Google Maps did not finish loading within the timeout.'
              )
            )

            return
          }

          setTimeout(
            check,
            50
          )
        }

        check()
      })
    },


    /* ========================================= */
    /* LOAD GOOGLE MAPS */
    /* ========================================= */

    loadGoogleMaps() {
      return new Promise((resolve, reject) => {

        const apiKey =
          process.env.VUE_APP_GOOGLE_MAPS_API_KEY

        console.log(
          'Google Maps Key exists:',
          !!apiKey
        )


        if (!apiKey) {
          reject(
            new Error(
              'VUE_APP_GOOGLE_MAPS_API_KEY is missing.'
            )
          )

          return
        }


        /*
         * Google Maps already fully loaded
         */

        if (
          window.google &&
          window.google.maps &&
          typeof window.google.maps.Map === 'function'
        ) {

          resolve()

          return
        }


        /*
         * Google Maps script currently loading
         */

        const existingScript =
          document.querySelector(
            'script[data-google-maps-loader]'
          )


        if (existingScript) {

          this.waitForGoogleMaps()
            .then(() => resolve())
            .catch(reject)

          return
        }


        /*
         * Create script
         */

        const script =
          document.createElement(
            'script'
          )


        script.src =
          `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(
            apiKey
          )}&v=weekly&loading=async&libraries=marker`


        script.async = true

        script.defer = true

        script.dataset.googleMapsLoader =
          'true'


        /*
         * Script loaded but Maps
         * may not yet be ready.
         */

        script.onload = () => {

          this.waitForGoogleMaps()
            .then(() => resolve())
            .catch(reject)

        }


        script.onerror = () => {

          reject(
            new Error(
              'Google Maps failed to load.'
            )
          )

        }


        document.head.appendChild(
          script
        )

      })
    },


    /* ========================================= */
    /* INITIALIZE MAP */
    /* ========================================= */

    async initializeMap() {

      this.mapLoading = true

      this.mapError = false


      try {

        /*
         * Wait until Google Maps
         * is completely ready.
         */

        await this.loadGoogleMaps()


        /*
         * Wait for DOM layout.
         * Important for responsive map.
         */

        await new Promise(resolve => {

          requestAnimationFrame(() => {

            requestAnimationFrame(
              resolve
            )

          })

        })


        let MapClass = null

        let MarkerClass = null


        /*
         * Modern Google Maps API
         */

        if (
          window.google &&
          window.google.maps &&
          typeof window.google.maps
            .importLibrary === 'function'
        ) {

          const mapsLibrary =
            await window.google.maps
              .importLibrary(
                'maps'
              )


          MapClass =
            mapsLibrary.Map


          const markerLibrary =
            await window.google.maps
              .importLibrary(
                'marker'
              )


          MarkerClass =
            markerLibrary
              .AdvancedMarkerElement

        }


        /*
         * Direct / Legacy loader
         */

        else if (
          window.google &&
          window.google.maps
        ) {

          MapClass =
            window.google.maps.Map


          if (
            window.google.maps.marker &&
            window.google.maps.marker
              .AdvancedMarkerElement
          ) {

            MarkerClass =
              window.google.maps
                .marker
                .AdvancedMarkerElement

          }


          if (
            !MarkerClass &&
            window.google.maps.Marker
          ) {

            this.LegacyMarker =
              window.google.maps.Marker

          }

        }


        /*
         * No Map class
         */

        if (!MapClass) {

          throw new Error(
            'Google Maps Map class is unavailable.'
          )

        }


        this.AdvancedMarkerElement =
          MarkerClass


        /*
         * Create Map
         */

        this.map =
          new MapClass(
            this.$refs.map,
            {

              center: {
                lat: 25.8075,
                lng: -80.1091
              },

              zoom: 11,

              mapId: 'DEMO_MAP_ID',

              mapTypeControl: true,

              streetViewControl: true,

              fullscreenControl: true,

              zoomControl: true,

              gestureHandling:
                'greedy',

              clickableIcons:
                false

            }
          )


        /*
         * Create markers
         */

        this.createMarkers()


        /*
         * Initial location
         */

        this.focusLocation(
          this.selectedLocation,
          false
        )


      } catch (error) {

        console.error(
          'Google Maps initialization error:',
          error
        )

        this.mapError = true


      } finally {

        this.mapLoading = false

      }

    },


    /* ========================================= */
    /* DESTROY MARKERS */
    /* ========================================= */

    destroyMarkers() {

      this.markers.forEach(
        marker => {

          try {
            marker.map = null
          } catch (error) {

            console.warn(
              'Unable to remove marker:',
              error
            )

          }

        }
      )


      this.markers = []

    },


    /* ========================================= */
    /* CREATE MARKERS */
    /* ========================================= */

    createMarkers() {

      this.destroyMarkers()


      this.locations.forEach(
        location => {

          /*
           * Advanced Marker
           */

          if (
            this.AdvancedMarkerElement
          ) {

            const markerElement =
              this.createMarkerElement()


            const marker =
              new this.AdvancedMarkerElement({
                map: this.map,

                position: {
                  lat: location.lat,
                  lng: location.lng
                },

                title:
                  location.name,

                content:
                  markerElement,

                gmpClickable:
                  true
              })


            /*
             * Advanced marker event
             */

            marker.addEventListener(
              'gmp-click',
              () => {

                this.selectLocation(
                  location
                )

              }
            )


            this.markers.push(
              marker
            )


            return

          }


          /*
           * Legacy Marker fallback
           */

          if (
            this.LegacyMarker
          ) {

            const marker =
              new this.LegacyMarker({
                map: this.map,

                position: {
                  lat: location.lat,
                  lng: location.lng
                },

                title:
                  location.name
              })


            marker.addListener(
              'click',
              () => {

                this.selectLocation(
                  location
                )

              }
            )


            this.markers.push(
              marker
            )

          }

        }
      )

    },


    /* ========================================= */
    /* CUSTOM CLEARIT MARKER */
    /* ========================================= */

    createMarkerElement() {

      const wrapper =
        document.createElement(
          'div'
        )


      wrapper.style.cssText = `
        display:flex;
        flex-direction:column;
        align-items:center;
        cursor:pointer;
        transform:scale(1);
        transition:
          transform 0.25s ease,
          filter 0.25s ease;
        filter:drop-shadow(
          0 3px 6px rgba(92,90,90,0.2)
        );
      `


      /*
       * CLEARiT label
       */

      const label =
        document.createElement(
          'div'
        )


      label.textContent =
        'CLEARiT'


      label.style.cssText = `
        background:#5C5A5A;
        color:#FFFFFF;
        font-family:Figtree,sans-serif;
        font-size:11px;
        font-weight:600;
        letter-spacing:0.08em;
        padding:4px 10px;
        border-radius:999px;
        white-space:nowrap;
        margin-bottom:5px;
        transition:
          background-color 0.25s ease;
      `


      /*
       * Pin
       */

      const pin =
        document.createElement(
          'div'
        )


      pin.style.cssText = `
        position:relative;
        width:24px;
        height:30px;
        background:#5C5A5A;
        border-radius:50% 50% 50% 0;
        transform:rotate(-45deg);
      `


      /*
       * Pin center
       */

      const circle =
        document.createElement(
          'div'
        )


      circle.style.cssText = `
        position:absolute;
        width:9px;
        height:9px;
        background:#FFFFFF;
        border-radius:50%;
        top:6px;
        left:6px;
      `


      pin.appendChild(
        circle
      )


      wrapper.appendChild(
        label
      )


      wrapper.appendChild(
        pin
      )


      /*
       * Hover
       */

      wrapper.addEventListener(
        'mouseenter',
        () => {

          wrapper.style.transform =
            'scale(1.12)'


          wrapper.style.filter =
            'drop-shadow(0 5px 10px rgba(92,90,90,0.3))'


          label.style.backgroundColor =
            '#1F1F1F'

        }
      )


      wrapper.addEventListener(
        'mouseleave',
        () => {

          wrapper.style.transform =
            'scale(1)'


          wrapper.style.filter =
            'drop-shadow(0 3px 6px rgba(92,90,90,0.2))'


          label.style.backgroundColor =
            '#5C5A5A'

        }
      )


      return wrapper

    },


    /* ========================================= */
    /* SELECT LOCATION */
    /* ========================================= */

    selectLocation(
      location
    ) {

      this.selectedLocation =
        location


      this.activeFilter =
        null


      this.focusLocation(
        location,
        true
      )

    },


    /* ========================================= */
    /* FOCUS LOCATION */
    /* ========================================= */

    focusLocation(
      location,
      animate = true
    ) {

      if (
        !this.map ||
        !location
      ) {

        return

      }


      const position = {

        lat: location.lat,

        lng: location.lng

      }


      if (animate) {

        this.map.panTo(
          position
        )


        setTimeout(
          () => {

            if (this.map) {

              this.map.setZoom(
                15
              )

            }

          },
          300
        )


      } else {

        this.map.setCenter(
          position
        )


        this.map.setZoom(
          11
        )

      }

    },


    /* ========================================= */
    /* FILTER */
    /* ========================================= */

    toggleFilter(
      filter
    ) {

      if (
        this.activeFilter ===
        filter
      ) {

        this.activeFilter =
          null

      } else {

        this.activeFilter =
          filter

      }

    },


    /* ========================================= */
    /* CITY */
    /* ========================================= */

    selectCity(
      city
    ) {

      this.selectedCity =
        city


      this.activeFilter =
        null


      if (
        city === 'Miami, FL' &&
        this.map
      ) {

        this.map.panTo({

          lat: 25.8075,

          lng: -80.1091

        })


        this.map.setZoom(
          11
        )

      }

    },


    /* ========================================= */
    /* DISTANCE */
    /* ========================================= */

    selectDistance(
      distance
    ) {

      this.selectedDistance =
        distance


      this.activeFilter =
        null


      const zoomMap = {

        'Within 10 mi': 13,

        'Within 25 mi': 11,

        'Within 50 mi': 10

      }


      if (
        this.map &&
        zoomMap[distance]
      ) {

        this.map.setZoom(
          zoomMap[distance]
        )

      }

    },


    /* ========================================= */
    /* LOCATION TYPE */
    /* ========================================= */

    selectType(
      type
    ) {

      this.selectedType =
        type


      this.activeFilter =
        null

    }

  }
}
</script>


<style scoped>

.find-us-page {
  background: #ffffff;
}


/* ========================================= */
/* FILTER */
/* ========================================= */

.find-filter {
  width: 100%;

  min-height: 52px;

  display: flex;

  align-items: center;

  justify-content: space-between;

  padding: 12px 20px;

  border: none;

  background: #f8f8f8;

  color: #1f1f1f;

  font-family: Figtree, sans-serif;

  font-size: 18px;

  font-weight: 400;

  letter-spacing: 0.05em;

  text-align: left;

  cursor: pointer;

  transition:
    background-color 0.2s ease;
}


.find-filter:hover {
  background: #eeeeee;
}


.filter-arrow {
  color: #989898;

  font-size: 20px;

  line-height: 1;
}


/* ========================================= */
/* FILTER OPTIONS */
/* ========================================= */

.filter-options {
  display: grid;

  grid-template-columns:
    repeat(3, minmax(0, 1fr));

  gap: 12px;

  margin-top: -24px;

  margin-bottom: 24px;

  position: relative;

  z-index: 10;
}


.filter-options button {
  padding: 15px 20px;

  border: 1px solid #e6e6e6;

  background: #ffffff;

  color: #5c5a5a;

  text-align: left;

  font-family: Figtree, sans-serif;

  cursor: pointer;

  transition:
    background-color 0.2s ease,
    color 0.2s ease;
}


.filter-options button:hover {
  background: #f8f8f8;

  color: #1f1f1f;
}


/* ========================================= */
/* FILTER ANIMATION */
/* ========================================= */

.filter-dropdown-enter-active,
.filter-dropdown-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}


.filter-dropdown-enter-from,
.filter-dropdown-leave-to {
  opacity: 0;

  transform:
    translateY(-5px);
}


/* ========================================= */
/* LOCATION ITEM */
/* ========================================= */

.location-item {
  width: 100%;

  display: block;

  padding: 28px 0;

  border: none;

  border-bottom: 1px solid #d9d9d9;

  background: transparent;

  text-align: left;

  cursor: pointer;
}


.location-name {
  margin: 0 0 8px;

  color: #5c5a5a;

  font-family: Figtree, sans-serif;

  font-size: 24px;

  font-weight: 400;

  line-height: 1.25;

  letter-spacing: 0.05em;

  transition:
    color 0.2s ease,
    transform 0.3s ease;
}


.location-address {
  margin: 0 0 12px;

  color: #5c5a5a;

  font-family: Figtree, sans-serif;

  font-size: 15px;

  font-weight: 400;

  line-height: 1.5;

  letter-spacing: 0.05em;
}


.location-type {
  display: inline-block;

  padding: 4px 16px;

  border-radius: 999px;

  background: #29bcfb;

  color: #ffffff;

  font-family: Figtree, sans-serif;

  font-size: 12px;

  font-weight: 400;

  letter-spacing: 0.05em;
}


.location-phone {
  color: #5c5a5a;

  font-family: Figtree, sans-serif;

  font-size: 15px;

  letter-spacing: 0.05em;
}


.location-item:hover .location-name {
  color: #1f1f1f;

  transform:
    translateX(5px);
}


.location-item-active .location-name {
  color: #1f1f1f;
}


/* ========================================= */
/* NO RESULT */
/* ========================================= */

.no-location {
  padding: 30px 0;

  color: #989898;

  font-family: Figtree, sans-serif;

  font-size: 16px;
}


/* ========================================= */
/* MAP */
/* ========================================= */

.map-container {
  width: 100%;

  height: 520px;

  position: relative;

  overflow: hidden;

  background: #e5e3df;
}


/* ========================================= */
/* MAP OVERLAY */
/* ========================================= */

.map-overlay {
  position: absolute;

  inset: 0;

  display: flex;

  align-items: center;

  justify-content: center;

  padding: 30px;

  background:
    rgba(
      255,
      255,
      255,
      0.86
    );

  color: #5c5a5a;

  font-family: Figtree, sans-serif;

  text-align: center;

  z-index: 5;
}


.map-loading-content {
  display: flex;

  flex-direction: column;

  align-items: center;

  gap: 14px;
}


.map-spinner {
  width: 28px;

  height: 28px;

  border: 3px solid #e6f3f8;

  border-top-color: #29bcfb;

  border-radius: 50%;

  animation:
    map-spin 0.8s linear infinite;
}


@keyframes map-spin {
  to {
    transform:
      rotate(360deg);
  }
}


/* ========================================= */
/* ERROR */
/* ========================================= */

.map-error strong {
  display: block;

  margin-bottom: 8px;

  color: #1f1f1f;
}


.map-error p {
  margin: 0 0 18px;

  font-size: 14px;
}


.retry-button {
  padding: 10px 20px;

  border: none;

  background: #1f1f1f;

  color: #ffffff;

  font-family: Figtree, sans-serif;

  cursor: pointer;

  transition:
    background-color 0.2s ease;
}


.retry-button:hover {
  background: #333333;
}


/* ========================================= */
/* MAP FADE */
/* ========================================= */

.map-fade-enter-active,
.map-fade-leave-active {
  transition:
    opacity 0.2s ease;
}


.map-fade-enter-from,
.map-fade-leave-to {
  opacity: 0;
}


/* ========================================= */
/* RESPONSIVE */
/* ========================================= */

@media (min-width: 768px) {

  .map-container {
    height: 600px;
  }

}


@media (min-width: 1024px) {

  .map-container {
    height: 700px;
  }

}


@media (max-width: 767px) {

  .find-us-page {
    padding-bottom: 60px;
  }


  .find-filter {
    font-size: 16px;
  }


  .filter-options {
    grid-template-columns: 1fr;

    margin-top: -18px;
  }


  .location-item {
    padding: 24px 0;
  }


  .location-name {
    font-size: 20px;
  }


  .location-address {
    font-size: 14px;
  }


  .location-phone {
    font-size: 14px;
  }


  .map-container {
    height: 520px;
  }

}

</style>