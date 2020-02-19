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
    height: 20px;
    background: #fff;
    font-family: "Noto Sans KR", sans-serif !important;
    display: flex;
    align-items: center;
    border: 1px solid #d8dce5;
    .inner__text {
      flex: 1;
      text-align: center;
      padding: 0 4px;
      
    
    }
    .inner__icon {
      flex: none;
      width: 16px;
      height: 16px;
      line-height: 16px;
      text-align: center;

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
