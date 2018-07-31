<template>
  <div class="home">
    <v-jumbotron>
    <v-container fill-height>
      <v-layout justify-center align-center>
        <v-flex xs12 sm8>
          <h3 class="display-3">Welcome to Our Club</h3>

          <span class="subheading">Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id, ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum.</span>

          <v-divider class="my-3"></v-divider>

          <div class="title mb-3">Join and be a part of our community!</div>

          <v-btn
            class="mx-0"
            color="primary"
            large
            dark
            :to="{name: 'auth.register'}"
          >
            Register
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
  </div>
</template>

<script>
// @ is an alias to /src
import {
  loadComponent
} from '../helpers/importer'

export default {
  name: 'home',
  components: {
    HelloWorld: loadComponent('HelloWorld')
  }
}
</script>
