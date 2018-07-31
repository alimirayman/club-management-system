<template>
  <div>
    <v-card>
      <v-card-media
        :src="event.imageLink"
        height="40vh"
      >
      </v-card-media>

      <v-card-title primary-title>
        <div>
          <div class="headline">  {{ event.title }} </div>
          <div class="grey--text">Lead: {{ event.lead }}</div>
          <div class="grey--text">Menagement: {{ event.modaretor }}</div>
          <div class="grey--text">Date: {{ event.date }}</div>
        </div>
      </v-card-title>
      <v-card-title>
        {{event.description}}
      </v-card-title>
      <v-card-actions>
        <v-btn flat color="orange" :to="{name: 'events.edit', params: {id}}">
          <v-icon left>edit</v-icon>
          Edit</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  computed: {
    event () {
      return this.$store.getters.getEventByID(this.id)
    },
    id () {
      return Number(this.$route.params.id)
    }
  }
}
</script>

