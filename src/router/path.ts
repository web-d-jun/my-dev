const Path = [
  { icon: "mdi-home", text: "Home", routerPath: "/", group: false },
  {
    icon: "mdi-home",
    text: "Vue.js",
    routerPath: "/",
    group: true,
    deep_1: [
      {
        text: 'TEST notice board'
      }
    ]
  },
]

export default Path;