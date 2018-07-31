<template>
  <v-container grid-list-lg>
    <h1 class="display-2 mb-3">Events
      <v-tooltip right>
        <v-btn slot="activator" icon color="secondary" :to="{name: 'events.add'}">
          <v-icon>add</v-icon>
        </v-btn>
        <span>Add Events</span>
      </v-tooltip>
    </h1>
    <v-layout  row wrap>
      <v-flex xs12 sm6 md3 v-for="(event, n) in events"
                :key="n">
        <v-card :to="{name: 'events.single', params: { id: event._id }}">
          <v-card-media
            :src="event.imageLink"
            height="200px"
          >
          </v-card-media>

          <v-card-title primary-title>
            <div>
              <div class="headline"> {{event.title}}</div>
              <div class="grey--text">Lead: {{ event.lead }}</div>
              <div class="grey--text">Menagement: {{ event.modaretor }}</div>
              <div class="grey--text">Date: {{ event.date }}</div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      events: 'getEvents'
    })
  }
}
</script>

