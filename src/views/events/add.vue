<template>
  <div>
    <v-container>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md6>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title class="justify-center">Add Event</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field prepend-icon="title" name="Title" label="Title" type="text"></v-text-field>
                <v-autocomplete :items="membersNameList" prepend-icon="person" name="Lead" label="Lead" type="text"></v-autocomplete>
                <v-autocomplete :items="membersNameList" prepend-icon="person_outline" name="Modaretor" label="Modaretor" type="text"></v-autocomplete>
                <v-text-field prepend-icon="format_align_left" name="Description" label="Description" type="text"></v-text-field>
                <v-text-field prepend-icon="photo" name="ImageLink" label="Image Link" type="text"></v-text-field>
                <v-date-picker v-model="picker" landscape reactive></v-date-picker>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn large="" color="primary">Add</v-btn>
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
      members: [
        {
          name: 'Mir Ayman Ali'
        }
      ],
      picker: ''
    }
  },
  computed: {
    membersNameList () {
      return this.members.map(el => el.name)
    }
  }
}
</script>
