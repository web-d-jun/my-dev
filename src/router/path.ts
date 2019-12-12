import { vuejs, react } from '../assets/index';

interface Path {
  icon: any,
  text: string,
  routerPath?: string,
  group?: boolean,
  deep_1?: object[]
}

const Path: Array<Path> = [
  {
    icon: "mdi-home",
    text: "Home",
    routerPath: "/",
  },
  {
    icon: vuejs,
    text: "Vue",
    group: true,
    deep_1: [
      {
        text: 'Vue란 무엇인가?',
        routerPath: "/vue/info",
      }
    ]
  },
  {
    icon: react,
    text: "React",
    group: true,
    deep_1: [
      {
        text: '',
        routerPath: ''
      }
    ]
  },
  {
    icon: "mdi-home",
    text: "Notice Board",
    routerPath: "/notice_board",
  }
]

export default Path;