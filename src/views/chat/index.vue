<template>
  <div class="chart__container">
    <div class="chart__container--header">demo-chatting</div>
    <div class="chart__container--body">
      <div v-for="(item, index) in contents" :key="index" class="chat__container">
        <div class="chat__content__wrap" :style="{'justify-content' : item.position}">
          <v-list-item-avatar v-if="item.who === 'me'">
            <v-img src="../../assets/me.jpeg"></v-img>
          </v-list-item-avatar>
          <v-list-item-avatar v-if="item.who === 'guest'">
            <v-img src="../../assets/guest.png"></v-img>
          </v-list-item-avatar>
          <div class="chat__content" v-html="item.content"></div>
        </div>
      </div>
      <div v-if="ready" class="chat__container">
        <div class="chat__content__wrap justify-content__start">
          <div class="chat__content">....</div>
        </div>
      </div>

      <div v-if="receiveReady" class="chat__container">
        <div class="chat__content__wrap justify-content__end">
          <div class="chat__content">....</div>
        </div>
      </div>
    </div>
    <div class="chart__container--footer">
      <div class="wrap">
        <div class="text-area__wrap">
          <textarea name id class="text-area" cols="30" rows="10" v-model="typing" ref="focus"></textarea>
        </div>
        <div class="send__button__wrap">
          <v-btn @click="send">전송</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Emit, Watch } from "vue-property-decorator";

interface Contents {
  content: string;
  position: string;
  who: string;
}

@Component
export default class Chatting extends Vue {
  typing: string = "";
  ready: boolean = false;
  receiveReady: boolean = false;
  contents: Array<Contents> = [];
  $refs!: {
    focus: HTMLTextAreaElement;
  };
  @Watch("typing")
  typingAct(val: any, oldVal: any) {
    this.ready = true;
    setTimeout(() => {
      this.setScrollPosition();
    }, 200);
    if (val.length < 1) {
      this.ready = false;
    }
  }

  @Emit()
  send() {
    this.ready = false;
    this.contents.push({
      content: this.typing.replace(/(?:\r\n|\r|\n)/g, "<br/>"),
      position: "flex-start",
      who: "me"
    });
    this.typing = "";
    this.$refs.focus.focus();
    this.setScrollPosition();
    this.receive();
  }

  @Emit()
  receive() {
    console.log(this.contents.length);
    this.receiveReady = true;
    const searchText = this.contents[this.contents.length - 1].content;
    let receiveText: string = "";
    let timeout = 0;
    if (searchText.indexOf("안녕") !== -1) {
      receiveText = `안녕.`;
      timeout = 700;
    } else if (searchText.indexOf("소개") !== -1) {
      receiveText = `이름: 조준영
      나이:29살
      사는 곳은: 금정구
      좋아하는 음식은: 눈 앞에 있는 음식
      음...또 뭐가 있을까?`;
      timeout = 1800;
    } else if (searchText.indexOf("성격") !== -1) {
      receiveText = `글쎄..
      잘 모르겠는데, 다른거 질문 해봐`;
      timeout = 1100;
    } else if (
      searchText.indexOf("내가 원하는") !== -1 ||
      searchText.indexOf("원하는") !== -1
    ) {
      receiveText = `취업
      취업....
      취업...........
      취업....................`;
      timeout = 1900;
    } else {
      receiveText = `아직은...
      대답 할 수 없는 글이야`;
      timeout = 700;
    }

    setTimeout(() => {
      this.receiveReady = false;
      this.contents.push({
        content: receiveText.replace(/(?:\r\n|\r|\n)/g, "<br/>"),
        position: "flex-end",
        who: "guest"
      });
      setTimeout(() => {
        this.setScrollPosition();
      }, 200);
    }, timeout);
  }

  @Emit()
  setScrollPosition() {
    document.getElementsByClassName(
      "chart__container--body"
    )[0].scrollTop = document.getElementsByClassName(
      "chart__container--body"
    )[0].scrollHeight;
  }
}
</script>
<style lang="scss" scoped>
.chart__container {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 100px);
  &--header {
    width: 100%;
    height: 40px;
    line-height: 40px;
    flex: none;
    text-align: center;
    background: #acb7dc;
    color: rgba(#fff, 0.8);
    font-size: 25px;
    border-radius: 4px 4px 0 0;
  }
  &--body {
    flex: 1;
    border: 1px solid rgba(gray, 0.6);
    overflow-y: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;

    .chat__container {
      width: 100%;
      border: 1px solid transparent;
      padding: 10px;
      .chat__content__wrap {
        display: flex;
        align-items: center;
        &.justify-content__start {
          justify-content: flex-start;
        }
        &.justify-content__end {
          justify-content: flex-end;
        }
        .chat__content {
          min-width: 30px;
          max-width: 300px;
          border: 1px solid yellow;
          background-color: yellow;
          border-radius: 10px;
          word-break: break-all;
          padding: 4px;
        }
      }
    }
  }
  &--footer {
    flex: none;
    height: 60px;
    width: 100%;

    .wrap {
      width: 100%;
      height: inherit;
      display: flex;

      .text-area__wrap {
        width: 100%;
        height: inherit;
        flex: 1;
        .text-area {
          width: 100%;
          height: inherit;
          background-color: #fff;
          resize: none;
          border: 1px solid transparent;
          border-radius: 0 0 0 4px;
        }
      }
      .send__button__wrap {
        flex: none;
        width: 80px;
        height: 100%;
        .v-btn {
          width: 100%;
          height: 100%;
          background-color: #dcb7dc;
        }
      }
    }
  }
}

// @media screen and (max-width: 768px) {
//   .v-navigation-drawer {
//     background-image: linear-gradient(
//       to top,
//       #acb7dc 70%,
//       #dcb7dc 80%
//     ) !important;
//   }
//   .mini {
//     width: 300px !important;
//   }
// }
</style>