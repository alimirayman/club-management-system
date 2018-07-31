<template>
  <div>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title class="justify-center">Register</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field v-model="form.name" prepend-icon="person" name="Name" label="Full Name" type="text"></v-text-field>
              <v-text-field v-model="form.id" prepend-icon="fingerprint" name="ID" label="ID" type="number"></v-text-field>
              <v-text-field v-model="form.department" prepend-icon="chrome_reader_mode" name="Department" label="Department" type="text"></v-text-field>
              <v-text-field v-model="form.email" prepend-icon="alternate_email" name="Email" label="Email" type="text"></v-text-field>
              <v-text-field v-model="form.phone" prepend-icon="phone" name="Phone" label="Phone" type="text"></v-text-field>
              <v-text-field v-model="form.address" prepend-icon="add_location" name="Address" label="Address" type="text"></v-text-field>
              <v-text-field v-model="form.password" id="password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn large="" color="primary" @click="register">Register</v-btn>
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
      form: {}
    }
  },
  methods: {
    register () {
      this.$store.dispatch('REGISTER_APPLICANT', this.form)
      this.$router.push({name: 'home'})
    }
  }
}
</script>
