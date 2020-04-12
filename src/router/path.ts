import * as image from "../assets/index";

interface Path {
  icon: any;
  image: boolean;
  text: string;
  routerPath?: string;
  group?: boolean;
  groupName?: string;
  deep_1?: object[];
}

const Path: Array<Path> = [
  // {
  //   icon: "mdi-home",
  // image: false,
  //   text: "Home",
  //   routerPath: "/"
  // },
  {
    icon: "mdi-desktop-mac-dashboard",
    image: false,
    text: "Dashboard",
    routerPath: "/dashboard"
  },
  // {
  //   icon: "mdi-book-open-page-variant",
  // image: false,
  //   text: "data post",
  //   routerPath: "/page1"
  // },
  {
    icon: "mdi-chat-processing-outline",
    image: false,
    text: "chatting",
    routerPath: "/chat"
  },
  {
    icon: "mdi-language-css3",
    image: true,
    text: "CSS",
    group: true,
    deep_1: [
      {
        text: "grid",
        groupName: "",
        routerPath: "/css/grid"
      }
    ]
  },
  {
    icon: image.graphql,
    image: false,
    text: "GraphQL",
    group: true,
    deep_1: [
      {
        text: "GraphQL Definition",
        groupName: "graphql",
        routerPath: "/*"
      },
      {
        text: "GraphQL - CRUD",
        groupName: "graphql",
        routerPath: "/graphql/crud"
      }
    ]
  },
  {
    icon: image.nuxt,
    image: false,
    text: "Nuxt",
    group: true,
    deep_1: [
      {
        text: "Store 관리",
        groupName: "nuxt",
        routerPath: "/nuxt/store"
      }
    ]
  }
  // {
  //   icon: image.vuejs,
  // image: false,
  //   text: "Vue",
  //   group: true,
  //   deep_1: [
  //     {
  //       text: "Vue.js Definition",
  //       groupName: "vue",
  //       routerPath: "/vue/def"
  //     }
  //   ]
  // },
  // {
  //   icon: image.react,
  // image: false,
  //   text: "React",
  //   group: true,
  //   deep_1: [
  //     {
  //       text: "-",
  //       groupName: "react",
  //       routerPath: "/react/def"
  //     }
  //   ]
  // }
];

export default Path;
