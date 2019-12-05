<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item v-for="item in items" :key="item.text" link @click="routerGo(item.routerPath)">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-subheader class="mt-4 grey--text text--darken-1">SUBSCRIPTIONS</v-subheader>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left color="red" dense>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-icon class="mx-4">fab fa-youtube</v-icon>
      <v-toolbar-title class="mr-12 align-center">
        <span class="title">룰루랄라</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container class="fill-height">
        <v-col>
          <router-view></router-view>
        </v-col>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";

@Component
export default class App extends Vue {
  @Prop() source: any;
  theme: any = { dark: true };
  drawer: any = null;
  items: any = [
    { icon: "mdi-home", text: "Home", routerPath: "/" },
    { icon: "mdi-account", text: "게시판", routerPath: "/about" }
  ];

  created() {
    this.$vuetify.theme.dark = true;
  }

  @Emit()
  routerGo(routerPath: string) {
    if (this.$route.path !== routerPath) {
      this.$router.push({ path: `${routerPath}` });
    }
  }
}
</script>
