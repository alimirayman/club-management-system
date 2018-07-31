<template>
  <div>
    <v-container>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title class="justify-center">Edit Event</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field v-model="form.title" prepend-icon="title" name="Title" label="Title" type="text"></v-text-field>
                <v-autocomplete v-model="form.lead" :items="membersNameList" prepend-icon="person" name="Lead" label="Lead" type="text"></v-autocomplete>
                <v-autocomplete v-model="form.modaretor" :items="membersNameList" prepend-icon="person_outline" name="Modaretor" label="Modaretor" type="text"></v-autocomplete>
                <v-text-field v-model="form.description" prepend-icon="format_align_left" name="Description" label="Description" type="text"></v-text-field>
                <v-text-field v-model="form.imageLink" prepend-icon="photo" name="ImageLink" label="Image Link" type="text"></v-text-field>
                <v-flex xs12 offset-xs0 lg6 offset-lg3>
                <v-date-picker v-model="form.date" landscape reactive></v-date-picker>
                </v-flex>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn large color="blue darken-3" dark @click="editEvent">Edit</v-btn>
              <v-spacer></v-spacer>
              <v-btn large color="primary" @click="deleteEvent">Delete</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      picker: '',
      form: {
        date: ''
      }
    }
  },
  computed: {
    membersNameList () {
      return this.$store.getters.getMembers.map(el => el.name)
    }
  },
  methods: {
    editEvent () {
      this.$store.dispatch('UPDATE_EVENTS', this.form)
    },
    deleteEvent () {
      this.$store.dispatch('DELETE_EVENT', this.form)
      this.$router.push({name: 'events.list'})
    }
  },
  created () {
    this.form = this.$store.getters.getEventByID(Number(this.$route.params.id))
  }
}
</script>
