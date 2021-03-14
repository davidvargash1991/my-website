import moment from "moment";
import tl from "icons/tl.jpg";
import tsg from "icons/tsg.jpg";
import everis from "icons/everis.png";
import csi from "icons/csi.png";
import info from "icons/info.jpg";
import lumon from "icons/lumon.jpg";
import globe from "icons/globe.png";
import csharp from "icons/csharp.png";
import reactLogo from "icons/react-no-text.png";
import netLogoOrange from "icons/net-orange-bg.png";
import ny from "icons/ny.jpg";
import leopard from "icons/leopard.jpg";
import reactLogoText from "icons/react.png";
import nextLogo from "icons/next.png";
import netLogo from "icons/net.png";
import sqlLogo from "icons/sql.svg";
import netOld from "icons/net-old.png";
import delphi from "icons/delphi.png";
import oracle from "icons/oracle.png";
import azureLogo from "icons/azure.png";

export interface IProject {
  img: string;
  title: string;
  description: string;
  link: string;
  repo: string;
  type: string;
}

interface ITech {
  alt: string;
  img: any;
}

export interface IExperience {
  company: string;
  location: string;
  position: string;
  date: string;
  facts: string[];
  technologies: ITech[];
  img: any;
}

export interface ILanguage {
  heroSubtitle: string;
  aboutMeTitle: string;
  textAbout: string;
  totalExp: string;
  remoteTitle: string;
  remoteText: string;
  locationTitle: string;
  locationText: string;
  responsiveText: string;
  portfolioTitle: string;
  portfolioText: string;
  techText: string;
  experienceTitle: string;
  projects: IProject[];
  experience: IExperience[];
}

interface IStrings {
  spanish: ILanguage;
  english: ILanguage;
}

export interface ILanguageProps {
  strings: ILanguage;
}

const years = moment().diff("2011-08-01", "years");

export const strings: IStrings = {
  spanish: {
    heroSubtitle:
      "Soy un desarrollador Full Stack experimentado, me enfoco sobre todo en desarrollo FrontEnd el cual disfruto bastante",
    aboutMeTitle: "Sobre mi",
    textAbout:
      "Disfruto construir webistes modernos y bellos; para este propósito, siempre estoy haciendo cursos para aprender las últimas técnicas y tecnologías, de esa manera puedo construir las mejores aplicaciones posibles",
    totalExp: `${years} años desde Agosto de 2011`,
    remoteTitle: "Trabajo Remoto",
    remoteText: "Tengo experiencia trabajando en equipos distribuidos",
    locationTitle: "Ubicación",
    locationText: "Bogotá - Colombia",
    responsiveText:
      "Construyo las aplicaciones pensando siempre en todos los dispositivos, y revisando en multiples navegadores",
    techText:
      "Trabajo con las mejores tecnologías y técnicas para consturir aplicaciones brillantes y de clase mundial",
    portfolioTitle: "Portafolio",
    portfolioText:
      "Estos son proyectos que creo en mi tiempo libre, me ayudan a practicar y aprender",
    experienceTitle: "Experiencia",
    projects: [
      {
        title: "Find your Home",
        description: "Aplicación de búsqueda de casas para comprar o rentar",
        img: ny,
        repo: "https://github.com/davidvargash1991/find-my-home",
        link: "https://find-my-home.now.sh/home",
        type: "Frontend - React.js",
      },
      {
        title: "Animal Wiki",
        description: "Es una enciclopedia animal de prueba con fotos de Flickr",
        img: leopard,
        repo: "https://github.com/davidvargash1991/animal-wiki",
        link: "https://animal-wiki.now.sh/home",
        type: "Frontend - React.js",
      },
      {
        title: "Get Coordinates Console",
        description: "Aplicación de consola para almacenar coordenadas",
        img: csharp,
        repo: "https://github.com/davidvargash1991/RetriveCoordinatesCSharp",
        link: "",
        type: "Console - C#",
      },
      {
        title: "Store Manager - FE",
        description:
          "Aplicación de inventario de prueba, con ella aprendí sobre JWT auth y GraphQL",
        img: reactLogo,
        repo: "https://github.com/davidvargash1991/StoreManager-Frontend",
        link: "",
        type: "Frontend - React.js",
      },
      {
        title: "Store Manager - BE",
        description:
          "Aplicación de inventario de prueba, con ella aprendí sobre JWT auth y GraphQL",
        img: netLogoOrange,
        repo: "https://github.com/davidvargash1991/StoreManager-Backend",
        link: "",
        type: "Backend - .Net",
      },
    ],
    experience: [
      {
        company: "Truelogic Software",
        location: "Remoto",
        position: "Full Stack Developer",
        date: "2019 - A la fecha",
        facts: [
          "Plataforma de creación de sitios web para fotógrafos",
          "El cliente fue Zenfolio en San Francisco",
          "Desarrollé componentes FrontEnd usando React.Js, Typescript y redux",
          "Desarrollé aplicaciones con estado global (reducers, store, actions, dispatchers)",
          "Revisión y aprobación de Pull Requests usando GIT",
          "Conecté con APIs y servicios Restful",
          "Desarrollé Unit Tests usando enzyme y jest",
          "Creación de HTML usando sass modules, box model, selectors, media queries, responsive design",
        ],
        technologies: [
          {
            alt: "React.js",
            img: reactLogoText,
          },
          {
            alt: "Redux",
            img: null,
          },
          {
            alt: "Typescript",
            img: null,
          },
          {
            alt: "Next.js",
            img: nextLogo,
          },
          {
            alt: "Sass",
            img: null,
          },
          {
            alt: "Jest",
            img: null,
          },
          {
            alt: "Github",
            img: null,
          },
        ],
        img: tl,
      },
      {
        company: "TSGroup",
        location: "Bogotá",
        position: "Full Stack Developer",
        date: "2019",
        facts: [
          "Migración de aplicación de inventario de impresoras a nuevas tecnologías",
          "El cliente fue M9 en Londres",
        ],
        technologies: [
          {
            alt: "react.js",
            img: reactLogoText,
          },
          {
            alt: ".Net Core",
            img: netLogo,
          },
          {
            alt: "Sql Server",
            img: sqlLogo,
          },
          {
            alt: "Azure",
            img: azureLogo,
          },
        ],
        img: tsg,
      },
      {
        company: "Everis",
        location: "Bogotá",
        position: "Full Stack Developer",
        date: "2018 - 2019",
        facts: [
          "Aplicación de gestión de viajes",
          "Resolución de bugs de producción",
          "Tareas de depuración",
        ],
        technologies: [
          {
            alt: "react.js",
            img: reactLogoText,
          },
          {
            alt: ".Net Core",
            img: netLogo,
          },
          {
            alt: "Sql Server",
            img: sqlLogo,
          },
        ],
        img: everis,
      },
      {
        company: "Compañia de Soluciones Informaticas",
        location: "Bogotá",
        position: "Full Stack Developer",
        date: "2018",
        facts: [
          "Aplicativo de procesamiento de archivo plano de recaudo",
          "Creé controladores en .Net",
          "Creé interfaces usando HTML y Javascript",
        ],
        technologies: [
          {
            alt: ".Net",
            img: netOld,
          },
          {
            alt: "Javascript",
            img: null,
          },
          {
            alt: "Sql Server",
            img: sqlLogo,
          },
        ],
        img: csi,
      },
      {
        company: "Infotrack",
        location: "Bogotá",
        position: "Full Stack Developer",
        date: "2017 -2018",
        facts: [
          "Aplicación de seguimiento de entregas",
          "También trabajé en proyecto de inventario de retail",
          "Desarrollé App de Xamarin Android para seguimiento de ruta e imprimir contrato de entrega",
          "Desarrollé interfaces usando HTML, Javascript, Bootstrap y Kendo UI",
          "Trabajé con el cliente para la comunicación con SAP usando XML",
          "Desarrollé un Controlador para calcular la carga de los camiones y sugerir rutas",
        ],
        technologies: [
          {
            alt: ".Net",
            img: netOld,
          },
          {
            alt: "Javascript",
            img: null,
          },
          {
            alt: "Sql Server",
            img: sqlLogo,
          },
          {
            alt: "Xamarin",
            img: null,
          },
        ],
        img: info,
      },
      {
        company: "Lumon",
        location: "Bogotá",
        position: "Full Stack Developer",
        date: "2015 -2016",
        facts: [
          "Enciclopedia de fauna, flora y ecosistemas",
          "También trabajé en proyecto de auditorias de pagos",
          "Integración con api publica para traer fotos, videos y coordenadas",
          "Desarrolle un mapa con las coordenadas usando el API de Google Maps",
        ],
        technologies: [
          {
            alt: ".Net",
            img: netOld,
          },
          {
            alt: "Javascript",
            img: null,
          },
          {
            alt: "Sql Server",
            img: sqlLogo,
          },
        ],
        img: lumon,
      },
      {
        company: "Orbis",
        location: "Bogota",
        position: "Developer",
        date: "2011 - 2015",
        facts: [
          "Software ERP",
          "Desarrolle modulo de nómina usando Delphi y Oracle",
        ],
        technologies: [
          {
            alt: "Delphi",
            img: delphi,
          },
          {
            alt: "Oracle",
            img: oracle,
          },
        ],
        img: globe,
      },
    ],
  },
  english: {
    heroSubtitle:
      "I am an experienced Full Stack developer, I focus mostly on FrontEnd Development which I enjoy a lot",
    aboutMeTitle: "About Me",
    textAbout:
      "I enjoy building modern and beautiful webistes, for this purpose I keep always making courses to learn new cool features, that way I can build the most impressive applications as possible",
    totalExp: `${years} years since August 2011`,
    remoteTitle: "Remote Work",
    remoteText: "I have experience working with distributed teams",
    locationTitle: "Location",
    locationText: "Bogota - Colombia",
    responsiveText:
      "I build the applications with responsive design in mind, always testing across browsers",
    techText:
      "I work with the best technologies and techniques in order to build brilliant world class applications",
    portfolioTitle: "Portfolio",
    portfolioText:
      "These are projects that I build in my free time, they are projects that help me practice and learn",
    experienceTitle: "Experience",
    projects: [
      {
        title: "Find your Home",
        description:
          "This is a sample real estate search for finding properties for rent or buy",
        img: ny,
        repo: "https://github.com/davidvargash1991/find-my-home",
        link: "https://find-my-home.now.sh/home",
        type: "Frontend - React.js",
      },
      {
        title: "Animal Wiki",
        description:
          "This is a sample animal encyclopedia with gallery from Flickr",
        img: leopard,
        repo: "https://github.com/davidvargash1991/animal-wiki",
        link: "https://animal-wiki.now.sh/home",
        type: "Frontend - React.js",
      },
      {
        title: "Get Coordinates Console",
        description:
          "Console App for retrieving and saving coordinates from google maps based on city name to a given database",
        img: csharp,
        repo: "https://github.com/davidvargash1991/RetriveCoordinatesCSharp",
        link: "",
        type: "Console - C#",
      },
      {
        title: "Store Manager - FE",
        description:
          "Sample Inventory app, I used this repo for learning about JWT auth and GraphQL",
        img: reactLogo,
        repo: "https://github.com/davidvargash1991/StoreManager-Frontend",
        link: "",
        type: "Frontend - React.js",
      },
      {
        title: "Store Manager - BE",
        description:
          "Sample Inventory app, I used this repo for learning about JWT auth and GraphQL",
        img: netLogoOrange,
        repo: "https://github.com/davidvargash1991/StoreManager-Backend",
        link: "",
        type: "Backend - .Net",
      },
    ],
    experience: [
      {
        company: "Truelogic Software",
        location: "Remote",
        position: "Full Stack Developer",
        date: "2019 - Present",
        facts: [
          "Website editor project for photographers",
          "The client was Zenfolio based in San Francisco",
          "Developed FrontEnd components using React.Js, Typescript and redux",
          "Developed applications with global states (reducers, store, actions, dispatchers)",
          "Reviewed and approved Pull Requests using GIT",
          "Connected with API and Restful services",
          "Unit Testing using enzyme and jest",
          "HTML creation using sass modules, box model, selectors, media queries, responsive design",
        ],
        technologies: [
          {
            alt: "React.js",
            img: reactLogoText,
          },
          {
            alt: "Redux",
            img: null,
          },
          {
            alt: "Typescript",
            img: null,
          },
          {
            alt: "Next.js",
            img: nextLogo,
          },
          {
            alt: "Sass",
            img: null,
          },
          {
            alt: "Jest",
            img: null,
          },
          {
            alt: "Github",
            img: null,
          },
        ],
        img: tl,
      },
      {
        company: "TSGroup",
        location: "Bogota",
        position: "Full Stack Developer",
        date: "2019",
        facts: [
          "Did migration of printers inventory application to new technologies",
          "The client was M9 based in London",
        ],
        technologies: [
          {
            alt: "react.js",
            img: reactLogoText,
          },
          {
            alt: ".Net Core",
            img: netLogo,
          },
          {
            alt: "Sql Server",
            img: sqlLogo,
          },
          {
            alt: "Azure",
            img: azureLogo,
          },
        ],
        img: tsg,
      },
      {
        company: "Everis",
        location: "Bogota",
        position: "Full Stack Developer",
        date: "2018 - 2019",
        facts: [
          "Travel management project",
          "Tracked and resolved production bugs",
          "Debugging tasks",
        ],
        technologies: [
          {
            alt: "react.js",
            img: reactLogoText,
          },
          {
            alt: ".Net Core",
            img: netLogo,
          },
          {
            alt: "Sql Server",
            img: sqlLogo,
          },
        ],
        img: everis,
      },
      {
        company: "Compañia de Soluciones Informaticas",
        location: "Bogota",
        position: "Full Stack Developer",
        date: "2018",
        facts: [
          "Payment records text file processing software",
          "Created controllers in .Net",
          "Created interfaces using HTML and Javascript",
        ],
        technologies: [
          {
            alt: ".Net",
            img: netOld,
          },
          {
            alt: "Javascript",
            img: null,
          },
          {
            alt: "Sql Server",
            img: sqlLogo,
          },
        ],
        img: csi,
      },
      {
        company: "Infotrack",
        location: "Bogota",
        position: "Full Stack Developer",
        date: "2017 -2018",
        facts: [
          "Product delivery and vehicle tracking project",
          "Also worked in Retail Inventory project",
          "Developed Xamarin Android App for monitoring trucks and print delivery contracts",
          "Developed interfaces using HTML, Javascript, Bootstrap and Kendo UI",
          "Collaborated with customer for XML file communication with SAP system",
          "Developed Controller for calculating trucks load and suggested route",
        ],
        technologies: [
          {
            alt: ".Net",
            img: netOld,
          },
          {
            alt: "Javascript",
            img: null,
          },
          {
            alt: "Sql Server",
            img: sqlLogo,
          },
          {
            alt: "Xamarin",
            img: null,
          },
        ],
        img: info,
      },
      {
        company: "Lumon",
        location: "Bogota",
        position: "Full Stack Developer",
        date: "2015 -2016",
        facts: [
          "Animal, plants and ecosystems encyclopedia",
          "Also worked in Payments audit software project",
          "Integrated with public api for fetching photos, videos and coordinates",
          "Developed rendering of coordinates using google maps API",
        ],
        technologies: [
          {
            alt: ".Net",
            img: netOld,
          },
          {
            alt: "Javascript",
            img: null,
          },
          {
            alt: "Sql Server",
            img: sqlLogo,
          },
        ],
        img: lumon,
      },
      {
        company: "Orbis",
        location: "Bogota",
        position: "Developer",
        date: "2011 - 2015",
        facts: ["ERP Software", "Developed HR module using Delphi and Oracle"],
        technologies: [
          {
            alt: "Delphi",
            img: delphi,
          },
          {
            alt: "Oracle",
            img: oracle,
          },
        ],
        img: globe,
      },
    ],
  },
};
