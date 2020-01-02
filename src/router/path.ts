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
        text: '영화순위',
        routerPath: "/vue/notice_board",
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
  }
]

export default Path;