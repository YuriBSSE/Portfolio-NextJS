import { DiAndroid, DiReact, DiTerminal } from "react-icons/di";
import { SiJava, SiFirebase, SiGit, SiJavascript, SiMapbox, SiNextDotJs,SiNodeDotJs } from "react-icons/si";
import { RiFlutterFill, RiReactjsFill } from "react-icons/ri";

export const Skills = [
  {
    slug: "react",
    Component: DiReact,
    title: "React",
    Description: () => <>Working as a Front-End Developer and Managing UI.</>,
  },
  {
    slug: "react native",
    Component: RiReactjsFill,
    title: "React Native",
    Description: () => <>Currently working with React Native for mobile application development. </>,
  },
  {
    slug: "next",
    Component: SiNextDotJs,
    title: "Next",
    Description: () => <>Also code in next js for blogging websites </>,
  },
  {
    slug: "node",
    Component: SiNodeDotJs,
    title: "Node Js",
    Description: () => <>Hands on node.js for crud apis, multer, forms and mails through smtp </>,
  },
  {
    slug: "javascript",
    Component: SiJavascript,
    title: "Javascript",
    Description: () => <>Worked on ES5 and ES6. But mainly use it for React and React Native app development.</>,
  },
  
  {
    slug: "map",
    Component: SiMapbox,
    title: "Map",
    Description: () => <>Hands on google map Api's for search location, real-time tracking & guidance in my apps.</>,
  },
  {
    slug: "firebase",
    Component: SiFirebase,
    title: "Firebase",
    Description: () => <>Work experience of Firebase for auth, database, push notification, real-time socket & messaging in my apps.</>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>Good Skill set on GIT as well.</>,
  },
  
];
