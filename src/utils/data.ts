import featureOneBackground1 from "../images/illustration-editor-desktop.svg";
import featureOneBackground2 from "../images/illustration-editor-mobile.svg";
import featureTwoBackground1 from "../images/illustration-laptop-desktop.svg";
import featureTwoBackground2 from "../images/illustration-laptop-mobile.svg";

export const navbarItems = [
  {
    id: 1,
    name: "Product",
  },
  {
    id: 2,
    name: "Company",
  },
  {
    id: 1,
    name: "Connect",
    option: [
      {
        id: "1a",
        name: "Contact",
      },
      {
        id: "2a",
        name: "Newsletter",
      },
      {
        id: "3a",
        name: "Linkedln",
      },
    ],
  },
];

export const featuresOne = 
  {
    id: "1b",
    title: "Designed for the future",
    features: [
      {
        title: "Introducing an extensible editor",
        description:
          "Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.",
      },
      {
        title: "Robust content management",
        description:
          "Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.",
      },
    ],
    mobileImg: featureOneBackground2,
    desktopImg: featureOneBackground1,
    classname:'wrapper_right-img'
  };
export const featuresTwo = 
  {
    id: "2b",
    features: [
      {
        title: "Free, open, simple",
        description:
          "Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.",
      },
      {
        title: "Powerful tooling",
        description:
          "Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.",
      },
    ],
    mobileImg: featureTwoBackground2,
    desktopImg: featureTwoBackground1,
    classname:'wrapper_right-img-second',
    reverse:true
  };
