<template>
  <div>
    <v-navigation-drawer
      :mini-variant.sync="mini"
      v-model="drawer"
      clipped
      app>
      <!-- <v-divider></v-divider> -->
      <v-list class="pt-0">
        <v-list-tile
          v-for="item in items"
          :key="item.title"
          :to="{name: item.route}"
          active-class="secondary white--text"
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
    </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="primary"
      dark
      app
      fixed
    >
      <v-toolbar-side-icon @click="handleDrawer"></v-toolbar-side-icon>

      <v-toolbar-title class="white--text">Club Management System</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat :to="{name: 'auth.login'}" v-if="!username">
          <v-icon left>
            input
          </v-icon>
          <span>
             Login
          </span>
        </v-btn>
        <template v-if="username">
          <v-btn flat :to="{name: 'user.profile'}">
            <v-icon left>
              person
            </v-icon>
            <span>
              {{ username }}
            </span>
          </v-btn>
          <v-btn flat @click="logout">
            <v-icon left>
              subdirectory_arrow_left
            </v-icon>
            <span>
              Logout
            </span>
          </v-btn>
        </template>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app>
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
      <v-spacer></v-spacer>
    </v-footer>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  data () {
    return {
      common: [
        {
          title: 'Home',
          icon: 'home',
          route: 'home'
        },
        {
          title: 'Register',
          icon: 'person_add',
          route: 'auth.register'
        },
        {
          title: 'Events',
          icon: 'event',
          route: 'events.list'
        }
      ],
      adminNav: [
        {
          title: 'Dashboard',
          icon: 'dashboard',
          route: 'admin.dashboard'
        },
        {
          title: 'Applications',
          icon: 'group_add',
          route: 'user.list'
        },
        {
          title: 'Members',
          icon: 'group',
          route: 'user.members'
        }
      ],
      mini: true,
      drawer: true
    }
  },
  computed: {
    items () {
      return this.isAdmin
        ? _.concat(this.common, this.adminNav).sort((a, b) => a.title > b.title && a.title > 'Dashboard')
        : this.common
    },
    isAdmin () {
      return this.$store.getters.getProfile.admin === 1 || this.$store.getters.getProfile.modaretor === 1
    },
    username () {
      return this.$store.getters.getProfile.name
    }
  },
  methods: {
    changeRoute (name) {
      this.$router.push({name})
    },
    handleDrawer () {
      this.mini = !this.drawer ? false : !this.mini
      this.drawer = !this.drawer ? true : this.drawer
    },
    logout () {
      this.$store.dispatch('LOGOUT')
      this.$router.push({name: 'home'})
    }
  }
}
</script>
