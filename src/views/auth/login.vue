<template>
  <div>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field required v-model="form.id" prepend-icon="fingerprint" name="ID" label="ID" type="number"></v-text-field>
              <v-text-field required v-model="form.password" id="password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn large color="primary" @click="login">Login</v-btn>
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
    login () {
      this.$store.dispatch('LOGIN', this.form)
    }
  }
}
</script>
