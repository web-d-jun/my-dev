<template>
  <v-app id="app">
    <div
      v-for="i in 40"
      :key="i"
      :class="`star star_${i}`"
      :style="{left: leftPosition(), top:topPosition()}"
    ></div>
    <div class="moon-wrap mini">
      <!-- <div class="moon1-wrap">
        <div class="moon1">
          <div class="outline"></div>
        </div>
      </div> -->
      <div class="moon2-wrap">
        <div class="moon2">
          <div class="outline"></div>
          <div class="moon2-half"></div>
        </div>
      </div>
    </div>
    <v-navigation-drawer
      v-model="drawer"
      app
      :clipped="is_device === 'desktop'"
      :absolute="is_device === 'mobile'"
      :temporary="is_device === 'mobile'"
    >
      <perfect-scrollbar>
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
          <template v-for="path in urlPath">
            <v-list-item
              v-if="!path.group"
              :key="path.text"
              link
              @click="routerGo(path.routerPath)"
            >
              <v-list-item-action>
                <v-icon>{{ path.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ path.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-group no-action v-else-if="path.group" :key="path.text" :group="path.groupName">
              <template #activator>
                <v-list-item-action>
                  <v-list-item-avatar v-if="path.image">
                      <v-icon>{{ path.icon }}</v-icon>
                  </v-list-item-avatar>
                  <v-list-item-avatar v-else-if="!path.image">
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
          <v-subheader class="mt-4 grey--text text--darken-1" v-show="!mini"></v-subheader>
        </v-list>
      </perfect-scrollbar>
    </v-navigation-drawer>
    <v-app-bar app clipped-left elevate-on-scroll dense>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-icon class="mx-4">fab fa-youtube</v-icon>
      <v-toolbar-title class="align-center">
        <span class="title">
          J
          <small>(made with Vue.js)</small>
        </span>
      </v-toolbar-title>
      <transition name="slide-x-reverse-transition">
        <div class="toolbar__contents__wrap">
          <div class="navigation__text">{{routeInfo}}</div>
        </div>
      </transition>
    </v-app-bar>
    <div class="tag-views-container" :class="{'expend' : !drawer}">
      <!-- <j-carousel>
        <j-item :innerText="'testestestsetest' + i" v-for="i in 30" :key="i" />
      </j-carousel> -->
    </div>
    <v-content class="pt-3">
      <v-container class="fill-height align-start">
        <div class="alert-state">
          <v-alert
            type="success"
            :value="alertState"
            transition="slide-x-reverse-transition"
          >success</v-alert>
        </div>
        <v-col>
          <transition name="slide-x-reverse-transition">
            <router-view></router-view>
          </transition>
        </v-col>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit, Watch } from "vue-property-decorator";
import Path from "@/router/path";
import { State, namespace } from "vuex-class";
import isLoader from "@/components/common/loader/index.vue";
import JItem from "@/components/j-item/index.vue";
import JCarousel from "@/components/carousel/index.vue";

@Component({
  components: {
    isLoader,
    JItem,
    JCarousel
  }
})
export default class App extends Vue {
  @Prop() source: any;
  theme: any = { dark: true };
  private drawer: any = null;
  private mini: boolean = false;
  private urlPath: any = Path;
  private is_device: string = "";
  test: string = "clipped";

  @State("stateValue", { namespace: "alertStateModule" })
  stateValue!: boolean;

  created() {
    this.routerGo("/dashboard");
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

  private init() {}

  get routeInfo() {
    return this.$route.name;
  }

  get alertState() {
    return this.stateValue;
  }

  @Emit()
  routerGo(routerPath: string) {
    if (this.$route.path !== routerPath) {
      this.$router.push({ path: `${routerPath}` });
    }
  }

  @Emit()
  leftPosition() {
    return Math.random() * 100 + "%";
  }

  @Emit()
  topPosition() {
    return Math.random() * 70 + "%";
  }
}
</script>

<style lang="scss" scoped>
@import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);
$i: 1;
$toolbar_height: 43px;
#app {
  background-image: linear-gradient(to top, #acb7dc 70%, #dcb7dc 80%);
  position: relative;
  .star {
    position: absolute;
    left: 30%;
    top: 30%;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-bottom: 5px solid #fff;
    border-right: 8px solid transparent;
    transform: rotate(35deg);
    // animation: light 3000ms infinite ease-out;
    &::after {
      position: absolute;
      display: block;
      content: "";
      width: 0;
      height: 0;
      top: -5px;
      left: -4px;
      border-left: 1.5px solid transparent;
      border-bottom: 7px solid #fff;
      border-right: 1.5px solid transparent;
      transform: rotate(-35deg);
      // animation: light2 2000ms infinite ease-out;
    }
    &::before {
      position: absolute;
      width: 0;
      height: 0;
      content: "";
      top: -0.2px;
      left: -8px;
      border-left: 8px solid transparent;
      border-bottom: 5px solid #fff;
      border-right: 8px solid transparent;
      transform: rotate(-70deg);
      // animation: light3 1000ms infinite ease-out;
    }
  }

  $randomValue: random(100);
  $tail: "%";
  @while $i <= 30 {
    .star_#{$i} {
    }
    $i: $i + 1;
  }
  .moon-wrap {
    position: absolute;
    width: 500px;
    height: 500px;
    left: 50%;
    top: 20%;
    transform: translate(-50%, 0%);
    .moon1-wrap {
      position: absolute;
      width: 250px;
      height: 250px;
      bottom: 0;
      left: 20%;
      .moon1 {
        position: relative;
        width: 100%;
        height: 100%;
        border: 1px solid #f1f1f1;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.2);
        animation: light 2000ms infinite;
        .outline {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border-top: 3px solid #dcb7dc;
          animation: spin 3000ms infinite linear;
        }
      }
    }
    .moon2-wrap {
      position: absolute;
      width: 250px;
      height: 250px;
      top: 0;
      right: 10%;
      .moon2 {
        position: relative;
        width: 100%;
        height: 100%;
        border: 1px solid #f1f1f1;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.2);
        animation: light 2000ms infinite;
        .moon2-half {
          position: absolute;
          width: 170px;
          height: 170px;
          background: linear-gradient(#dcb7dc 5%, #acb7dc 35%);
          border-radius: 50%;
          box-shadow: 20px 0 0 0 rgb(216, 216, 216);
        }
        .outline {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border-top: 3px solid #dcb7dc;
          animation: spin 6000ms infinite linear;
        }
      }
    }
  }
  .profile__since-content {
    color: #676f84;
  }
  .v-navigation-drawer {
    top: $toolbar_height !important;
    background: transparent;
    ::v-deep .v-navigation-drawer__content {
      overflow: hidden !important;
      .ps {
        height: 100vh;
      }
    }
  }
  .v-toolbar {
    height: $toolbar_height !important;
    background: #dcb7dc;

    ::v-deep .v-toolbar__content {
      height: 100% !important;
    }
    .toolbar__contents__wrap {
      flex: 1;
      display: flex;
      flex-direction: column;
      .navigation__text {
        font-size: 20px;
        font-family: "Noto Sans KR", sans-serif !important;
        color: #424242;
      }
    }
  }

  .tag-views-container {
    width: 100%;
    padding: 48px 0px 0px 256px;
    &.expend {
      padding: 48px 0px 0px 0px !important;
    }
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
  .alert-state {
    position: absolute;
    right: 0;
    top: 0;
    width: 300px;
  }
}

@media screen and (min-width: 768px) {
  .v-toolbar__title {
    margin-right: 48px;
  }
}

@media screen and (max-width: 768px) {
  .v-navigation-drawer {
    background-image: linear-gradient(
      to top,
      #acb7dc 70%,
      #dcb7dc 80%
    ) !important;
  }
  .mini {
    width: 300px !important;
  }
  .tag-views-container {
    padding: 48px 0 0 0 !important;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes light {
  0% {
    box-shadow: 1px 1px 1px 0.2rem rgba(255, 255, 255, 0.1),
      0 0 0 0.5rem rgba(255, 255, 255, 0.1), 0 0 0 1rem rgba(255, 255, 255, 0.1);
  }
  50% {
    box-shadow: 1px 1px 1px 0.2rem rgba(255, 255, 255),
      0 0 0 0.5rem rgba(255, 255, 255, 0.1), 0 0 0 1rem rgba(255, 255, 255, 0.1);
  }
  100% {
    box-shadow: 1px 1px 1px 0.2rem rgba(255, 255, 255, 0.1),
      0 0 0 0.5rem rgba(255, 255, 255, 0.1), 0 0 0 1rem rgba(255, 255, 255, 0.1);
  }
}

@keyframes light {
  0% {
    border-bottom: 5px solid #fff;
  }
  50% {
    border-bottom: 5px solid rgba($color: #fff, $alpha: 0.4);
  }
  100% {
    border-bottom: 5px solid #fff;
  }
}

@keyframes light2 {
  0% {
    border-bottom: 7px solid #fff;
  }
  50% {
    border-bottom: 7px solid rgba($color: #fff, $alpha: 0.3);
  }
  100% {
    border-bottom: 7px solid #fff;
  }
}

@keyframes light3 {
  0% {
    border-bottom: 5px solid #fff;
  }
  50% {
    border-bottom: 5px solid rgba($color: #fff, $alpha: 0.35);
  }
  100% {
    border-bottom: 5px solid #fff;
  }
}
</style>
