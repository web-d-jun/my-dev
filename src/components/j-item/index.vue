<template >
  <div class="j-item__container__wrap">
    <div class="j-item__container">
      <div class="inner__text">{{innerText}}</div>
      <div class="inner__icon">
        <v-icon small>mdi-close</v-icon>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class JItem extends Vue {
  @Prop() innerText!: string | number;
}
</script>

<style lang="scss" scoped>
@import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);
.j-item__container__wrap {
  display: inline-flex;
  padding: 4px;

  .j-item__container {
    width: 100%;
    background: #424242;
    font-family: "Noto Sans KR", sans-serif !important;
    display: flex;
    align-items: center;
    .inner__text {
      flex: 1;
      text-align: center;
      padding: 0 8px;
    }
    .inner__icon {
      flex: none;
      width: 30px;
      text-align: center;
      border-left: 1px groove black;
      padding: 2px;
      &:hover {
        cursor: pointer;
      }
      &:active {
        background-color: rgba(#000, 0.2);
      }
      .v-icon {
      }
    }
  }
}
</style>
