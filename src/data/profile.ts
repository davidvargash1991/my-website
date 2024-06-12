import moment from "moment";

export interface ILanguage {
  contactTitle: string;
  overview: string;
  experienceTitle: string;
  skillsTitle: string;
}

interface IStrings {
  spanish: ILanguage;
  english: ILanguage;
}

const years = moment().diff("2011-08-01", "years");

export const strings: IStrings = {
  spanish: {
    contactTitle: "Contacto",
    overview: `Desarrollador Web Full Stack con ${years} años de experiencia creando aplicaciones web, mobile y desktop, me especializo en desarrollo de aplicaciones web, me gusta sobre todo el desarrollo Frontend, me considero una persona detallista que le gusta entregar calidad en el software, con el mejor código y la mejor experiencia de usuario posibles`,
    experienceTitle: "Experiencia Laboral",
    skillsTitle: "Tecnologias",
  },
  english: {
    contactTitle: "Contact",
    overview: `Full Stack Web Developer with ${years} years of experience creating web, mobile and desktop applications, I specialize in web development, I prefer Frontend Development, I consider myself a developer with great attention to details, who likes to deliver great software, with code quality, with the best possible user experience.`,
    experienceTitle: "Experience",
    skillsTitle: "Tecnologies",
  },
};
