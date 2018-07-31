<template>
  <div>
    <v-container
        fluid
        grid-list-lg
      >
      <h1 class="display-2 pb-3">Dashboard</h1>
      <v-layout row wrap>
        <v-flex xs4>
          <v-card color="purple darken-4" class="white--text">
            <v-card-title primary-title>
              <div class="display-2">{{ applicants }} <small>Applicants</small></div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat dark :to="{name: 'user.list'}">Applicants</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs4>
          <v-card color="teal darken-4" class="white--text">
            <v-card-title primary-title>
              <div class="display-2">{{ events }} <small>Events</small></div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat dark :to="{name: 'events.list'}">Events</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs4>
          <v-card color="cyan darken-4" class="white--text">
            <v-card-title primary-title>
              <div class="display-2">{{ members }} <small>Members</small></div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat dark :to="{name: 'user.members'}">Members</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      applicants: 'getApplicantsAmmount',
      events: 'getEventsAmmount',
      members: 'getMembersAmmount'
    })
  }
}
</script>
