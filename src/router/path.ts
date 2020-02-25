import * as image from "../assets/index";

interface Path {
  icon: any;
  text: string;
  routerPath?: string;
  group?: boolean;
  deep_1?: object[];
}

const Path: Array<Path> = [
  {
    icon: "mdi-home",
    text: "Home",
    routerPath: "/"
  },
  {
    icon: "mdi-desktop-mac-dashboard",
    text: "Dashboard",
    routerPath: "/dashboard"
  },
  {
    icon: "mdi-book-open-page-variant",
    text: "data post",
    routerPath: "/page1"
  },
  {
    icon: "mdi-chat-processing-outline",
    text: "chatting",
    routerPath: "/chat"
  },
  {
    icon: image.graphql,
    text: "GraphQL",
    group: true,
    deep_1: [
      {
        text: "GraphQL Definition",
        routerPath: "/*"
      },
      {
        text: "GraphQL - CRUD",
        routerPath: "/graphql/crud"
      }
    ]
  },
  {
    icon: image.nuxt,
    text: "Nuxt",
    group: true,
    deep_1: [
      {
        text: "Nuxt js & Typscript",
        routerPath: "/nuxt/setting"
      }
    ]
  },
  {
    icon: image.vuejs,
    text: "Vue",
    group: true,
    deep_1: [
      {
        text: "Vue.js Definition",
        routerPath: "/vue/def"
      }
    ]
  },
  {
    icon: image.react,
    text: "React",
    group: true,
    deep_1: [
      {
        text: "-",
        routerPath: "/react/def"
      }
    ]
  }
];

export default Path;
