<template>
  <v-app id="app">
    <!-- <div class="moon-wrap">
      <div class="moon1"></div>
      <div class="moon2"></div>
    </div> -->
    <v-navigation-drawer
      v-model="drawer"
      app
      :clipped="is_device === 'desktop'"
      :absolute="is_device === 'mobile'"
      :temporary="is_device === 'mobile'"
    >
      <v-list navdense>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="./assets/me.jpeg"></v-img>
          </v-list-item-avatar>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Cho Jun Young</v-list-item-title>
            <div class="profile__e-mail">- cjy874545@gmail.com</div>
            <div class="profile__since-content">- since 2019</div>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <div v-for="path in urlPath" :key="path.text">
          <template v-if="!path.group">
            <v-list-item link @click="routerGo(path.routerPath)">
              <v-list-item-action>
                <v-icon>{{ path.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ path.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
          <template v-else-if="path.group">
            <v-list-group no-action>
              <template #activator>
                <v-list-item-action>
                  <v-list-item-avatar>
                    <v-img :src="path.icon"></v-img>
                  </v-list-item-avatar>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>{{path.text}}</v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item
                v-for="(deepPath, index) in path.deep_1"
                :key="deepPath.text"
                :index="index"
                link
                @click="routerGo(deepPath.routerPath)"
              >
                <v-list-item-content>
                  <v-list-item-title>{{index+1}}.{{deepPath.text}}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </template>
        </div>

        <v-subheader class="mt-4 grey--text text--darken-1" v-show="!mini">SUBSCRIPTIONS</v-subheader>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left elevate-on-scroll dense>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-icon class="mx-4">fab fa-youtube</v-icon>
      <v-toolbar-title class="mr-12 align-center">
        <span class="title">J</span>
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
import Path from "@/router/path";
import isLoader from "@/components/common/loader/index.vue";

@Component({
  components: {
    isLoader
  }
})
export default class App extends Vue {
  @Prop() source: any;
  theme: any = { dark: true };
  drawer: any = null;
  mini: boolean = false;
  urlPath: any = Path;
  is_device: string = "";
  test: string = "clipped";

  created() {
    // this.$vuetify.theme.dark = true;
    if (navigator.platform) {
      const filter = "win16|win32|win64|macintel";
      if (filter.indexOf(navigator.platform.toLowerCase()) < 0) {
        this.is_device = "mobile";
        this.drawer = false;
      } else {
        this.is_device = "desktop";
        this.drawer = true;
      }
    }
  }

  init() {}

  @Emit()
  routerGo(routerPath: string) {
    if (this.$route.path !== routerPath) {
      this.$router.push({ path: `${routerPath}` });
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  background-image: linear-gradient(to top, #ace0f9 50%, #fdcff6 100%);
  position: relative;
  .moon-wrap {
    position: absolute;
    width: 100px;
    height: 500px;
    left: 50%;
    top: 10%;
    border: 1px solid blue;
    transform: translate(-50%, 0%);
    .moon1 {
      position: absolute;
      width: 150px;
      height: 250px;
      border: 1px solid red;
      bottom: 0;
      left: 20%;
    }
  }
  .profile__since-content {
    color: #676f84;
  }
  .v-navigation-drawer {
    background: transparent;
  }
  .v-toolbar {
    background: #fdcff6;
  }
  .v-list-item__action {
    width: 20px;
    height: 20px;
    .v-avatar {
      &.v-list-item__avatar {
        width: 20px !important;
        height: 20px !important;
        min-width: 20px !important;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .v-navigation-drawer {
    background: linear-gradient(to top, #ace0f9 50%, #fdcff6 100%) !important;
  }
}
</style>
