<template>
  <div>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title class="justify-center">Edit Applicant</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field v-model="form.name"  prepend-icon="person" name="Name" label="Full Name" type="text"></v-text-field>
              <v-text-field v-model="form.id"  prepend-icon="fingerprint" name="ID" label="ID" type="number"></v-text-field>
              <v-text-field v-model="form.department"  prepend-icon="chrome_reader_mode" name="Department" label="Department" type="text"></v-text-field>
              <v-text-field v-model="form.email"  prepend-icon="alternate_email" name="Email" label="Email" type="text"></v-text-field>
              <v-text-field v-model="form.phone"  prepend-icon="phone" name="Phone" label="Phone" type="text"></v-text-field>
              <v-text-field v-model="form.address"  prepend-icon="add_location" name="Address" label="Address" type="text"></v-text-field>
              <v-text-field v-model="form.remarks"  prepend-icon="insert_drive_file" name="Remarks" label="Remarks" type="text"></v-text-field>
              <v-select v-model="form.position"  :items="positions" prepend-icon="assignment_ind" name="Position" label="Position" type="text"></v-select>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn large dark color="green darken-3" @click="approve">Approve</v-btn>
            <v-btn large dark color="blue darken-2" @click="makeModerator">Make Moderator</v-btn>
            <v-btn large dark color="primary" @click="deleteApplicant">Remove</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data () {
    return {
      positions: [
        'HR',
        'Management'
      ],
      form: {}
    }
  },
  methods: {
    approve () {
      this.form.approve = 1
      this.$store.dispatch('UPDATE_APPLICANT', this.form)
    },
    makeModerator () {
      this.form.modaretor = 1
      this.$store.dispatch('UPDATE_APPLICANT', this.form)
    },
    deleteApplicant () {
      this.$store.dispatch('DELETE_APPLICANT', this.form)
    }
  },
  created () {
    const id = this.$route.params.id
    this.form = this.$store.getters.getApplicantByID(Number(id)) || this.$store.getters.getMemberByID(Number(id))
  }
}
</script>
