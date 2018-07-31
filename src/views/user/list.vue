<template>
  <div>
    <v-container>
      <h1 class="display-2 mb-3">Applicants</h1>
      <v-flex xs12 sm8 offset-sm2 md6 offset-md3>
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Search"
          single-line
          hide-details
          class="my-3"
        ></v-text-field>
      </v-flex>
      <v-data-table
        :headers="headers"
        :items="applicants"
        :search="search"
        hide-actions
        class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <td class="text-xs-left">{{ props.item.name }}</td>
          <td >{{ props.item.email }}</td>
          <td >{{ props.item.phone }}</td>
          <td >
            <v-btn flat :to="{name: 'user.edit', params: {id: props.item._id}}">Edit</v-btn>
          </td>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Name',
            align: 'left',
            value: 'name'
          },
          { text: 'Email', value: 'email' },
          { text: 'Phone', value: 'phone' },
          { text: 'Actions', value: '_id' }
        ]
      }
    },
    computed: {
      ...mapGetters({
        applicants: 'getApplicants'
      })
    }
  }
</script>
