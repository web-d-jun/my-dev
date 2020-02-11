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
    icon: image.graphql,
    text: "GraphQL",
    group: true,
    deep_1: [
      {
        text: "GraphQL Definition",
        routerPath: ""
      },
      {
        text: "GraphQL - CRUD",
        routerPath: ""
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
        routerPath: ""
      }
    ]
  },
  {
    icon: image.react,
    text: "React",
    group: true,
    deep_1: [
      {
        text: "",
        routerPath: ""
      }
    ]
  }
];

export default Path;
