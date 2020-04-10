export interface IProject {
  img: string;
  title: string;
  description: string;
  link: string;
  repo: string;
  type: string;
}

export interface IExperience {
  company: string;
  location: string;
  position: string;
  date: string;
  facts: string[];
  technologies: string[];
}

export interface ILanguage {
  heroTitle: string;
  heroSubtitle: string;
  aboutMeTitle: string;
  textAbout: string;
  portfolioTitle: string;
  portfolioText: string;
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

export const strings: IStrings = {
  spanish: {
    heroTitle: "Full Stack Developer",
    heroSubtitle:
      "Soy un desarrollador Full Stack experimentado, me enfoco sobre todo en desarrollo FrontEnd el cual disfruto bastante",
    aboutMeTitle: "Sobre mi",
    textAbout:
      "Tengo más de 8 años de experiencia en la industria, me gusta trabajar remotamente con las mejores tecnologías como React.js y .Net. Me gusta construir interfaces bellas, modernas y que se adapten a cualquier dispositivo. Me considero una persona que siempre esta aprendiendo y buscando mejorar sus habilidades, aprendo constantemente en escuelas online como Coursera o Platzi. Tengo experiencia en metodologías ágiles y vivo en Bogotá Colombia, mi zona horaria es UTC-05:00",
    portfolioTitle: "Portafolio",
    portfolioText:
      "Estos son proyectos que creo en mi tiempo libre, me ayudan a practicar y aprender",
    experienceTitle: "Experiencia",
    projects: [
      {
        title: "Animal Wiki",
        description: "Es una enciclopedia animal de prueba con fotos de Flickr",
        img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Schrecklicherpfeilgiftfrosch-01.jpg/220px-Schrecklicherpfeilgiftfrosch-01.jpg",
        repo: "https://github.com/davidvargash1991/animal-wiki",
        link: "https://animal-wiki.now.sh/home",
        type: "Frontend - React.js",
      },
      {
        title: "Get Coordinates Console",
        description: "Aplicación de consola para almacenar coordenadas",
        img: "csharp",
        repo: "https://github.com/davidvargash1991/RetriveCoordinatesCSharp",
        link: "",
        type: "Console - C#",
      },
      {
        title: "Store Manager - FE",
        description:
          "Aplicación de inventario de prueba, con ella aprendí sobre JWT auth y GraphQL",
        img: "react",
        repo: "https://github.com/davidvargash1991/StoreManager-Frontend",
        link: "",
        type: "Frontend - React.js",
      },
      {
        title: "Store Manager - BE",
        description:
          "Aplicación de inventario de prueba, con ella aprendí sobre JWT auth y GraphQL",
        img: "net",
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
          "Creación de HTML usando sass modules, box model, selectors, nested class, media queries, responsive design",
        ],
        technologies: [
          "React.js",
          "Redux",
          "Typescript",
          "SASS",
          "Jest",
          "Github",
        ],
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
        technologies: [".Net Core", "React.js", "SQL Server"],
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
        technologies: [".Net Core", "React.js", "SQL Server"],
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
        technologies: [".Net", "Javascript", "SQL Server"],
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
        technologies: [".Net", "Xamarin", "Javascript", "SQL Server"],
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
        technologies: [".Net", "Javascript", "SQL Server"],
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
        technologies: ["Delphi", "Oracle"],
      },
    ],
  },
  english: {
    heroTitle: "Full Stack Developer",
    heroSubtitle:
      "I am an experienced Full Stack developer, I focus mostly on FrontEnd Development which I enjoy a lot",
    aboutMeTitle: "About Me",
    textAbout:
      "I have more than 8 years of experience in the IT industry, always like to work remotely and with the best technologies like React.js and .Net Framework and enjoy building beautiful, modern and responsive interfaces. I consider myself a person who is always learning and looking to improve his skills, always keep learning in online schools such as Coursera or Platzi. I have experience working with Agile methodologies and currently live in Bogota Colombia, my timezone is UTC-05:00",
    portfolioTitle: "Portfolio",
    portfolioText:
      "These are projects that I build in my free time, they are projects that help me practice and learn",
    experienceTitle: "Experience",
    projects: [
      {
        title: "Animal Wiki",
        description:
          "This is a sample animal encyclopedia with gallery from Flickr",
        img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Schrecklicherpfeilgiftfrosch-01.jpg/220px-Schrecklicherpfeilgiftfrosch-01.jpg",
        repo: "https://github.com/davidvargash1991/animal-wiki",
        link: "https://animal-wiki.now.sh/home",
        type: "Frontend - React.js",
      },
      {
        title: "Get Coordinates Console",
        description:
          "Console App for retrieving and saving coordinates from google maps based on city name to a given database",
        img: "csharp",
        repo: "https://github.com/davidvargash1991/RetriveCoordinatesCSharp",
        link: "",
        type: "Console - C#",
      },
      {
        title: "Store Manager - FE",
        description:
          "Sample Inventory app, I used this repo for learning about JWT auth and GraphQL",
        img: "react",
        repo: "https://github.com/davidvargash1991/StoreManager-Frontend",
        link: "",
        type: "Frontend - React.js",
      },
      {
        title: "Store Manager - BE",
        description:
          "Sample Inventory app, I used this repo for learning about JWT auth and GraphQL",
        img: "net",
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
          "HTML creation using sass modules, box model, selectors, nested class, media queries, responsive design",
        ],
        technologies: [
          "React.js",
          "Redux",
          "Typescript",
          "SASS",
          "Jest",
          "Github",
        ],
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
        technologies: [".Net Core", "React.js", "SQL Server"],
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
        technologies: [".Net Core", "React.js", "SQL Server"],
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
        technologies: [".Net", "Javascript", "SQL Server"],
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
        technologies: [".Net", "Xamarin", "Javascript", "SQL Server"],
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
        technologies: [".Net", "Javascript", "SQL Server"],
      },
      {
        company: "Orbis",
        location: "Bogota",
        position: "Developer",
        date: "2011 - 2015",
        facts: ["ERP Software", "Developed HR module using Delphi and Oracle"],
        technologies: ["Delphi", "Oracle"],
      },
    ],
  },
};
