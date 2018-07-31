<template>
  <div>
    <v-container>
      <h1 class="display-2 mb-3">Members</h1>
      <v-data-table
        :headers="headers"
        :items="members"
        hide-actions
        class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <td class="text-xs-left">{{ props.item.name }}</td>
          <td >{{ props.item.email }}</td>
          <td >{{ props.item.phone }}</td>
          <td >
            <v-btn flat :to="{name: 'user.edit', params: {id: props.item._id}}">View Profile</v-btn>
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
        members: 'getMembers'
      })
    }
  }
</script>
