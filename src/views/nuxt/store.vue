<template>
  <div class="nuxt-typescript-store">
    <h1>1.nuxt store 관리 Vuex-class</h1>
    <div>모듈별로 관리</div>
    <code-block>
      <pre>

          store/index.ts

          import Vue from "vue";
          import Vuex from "vuex";

          Vue.use(Vuex);

          export default new Vuex.Store({
            modules: {
              loaderModule,
              alertStateModule
            }
          });
      </pre>
    </code-block>
    <div>각 모듈별로 코드 작성</div>
    <code-block>
      <pre>

        store/modules/loader

        interface State {
          loaderDisplay: boolean;
          loaderProgressInit: boolean;
        }

        const state: State = {
          loaderDisplay: true,
          loaderProgressInit: false
        };

        const mutations: any = {
          loaderDisplayShow(state: any) {
            state.loaderDisplay = false;
          },
          loaderInit(state: any) {
            state.loaderDisplay = true;
            state.loaderProgressInit = true;
          }
        };

        const actions: any = {

        }

        export default {
          namespaced: true,
          state,
          mutations,
          actions
        };
      </pre>
    </code-block>
    <div>vuex-class 를 이용한 상태 관리 방법</div>
    <code-block>
      <pre>

        import { Mutation, namespace } from "vuex-class";

        @Mutation("loaderInit", { namespace: "loaderModule" })
        loaderInit!: any;

        @Mutation("loaderDisplayShow", { namespace: "loaderModule" })
        loaderDisplayShow!: any;

        or

        const loaderModule = namespace('loaderModule')

        @loaderModule.Mutation('loaderInit')
        loaderInit!: any;

        @loaderModule.Mutation('loaderDisplayShow')
        loaderDisplayShow!: any;
      </pre>
    </code-block>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import CodeBlock from "@/components/code-block/index.vue";

@Component({
  components: {
    CodeBlock
  }
})
export default class NuxtStore extends Vue {}
</script>
<style lang="scss">
.nuxt-typescript-store {
  width: 100%;
  height: 100%;
}
</style>