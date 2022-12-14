import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    // language resources
    resources: {
      en: {
        translation: {
          navbar: {
            home: 'Home',
            about: 'About',
            work: 'Work',
            skills: 'Skills',
            project: 'Projects',
            contact: 'Contact'
          },
          button: {
           hire: "Hire me",
          },
          download: "Download",
          home: {
            greeting : ["H", "i"],
            name: ["I am", " K", "irti"],
            description: "Full Stack Developer with high level of experience in web designing and development, producing the Quality work."
          },
          about:[
            "Hey there",
            "Lets know a bit more about me",
            "I am a passionate full-stack developer, located in Canada. I have a serious passion for web development and creating intuitive, dynamic user experiences. I love working with React and other frameworks. I am confident using the MERN Full-Stack and pursue good experience and knowledge in web technologies.",
            "Effective at combining creativity and problem solving to develop user-friendly applications. Strengths include creativity, teamwork, and trustworthiness. Well-organized person, problem solver, independent with high attention to detail and life-long dedication to learning.",
            "Love to do painting and write songs in my leisure time. I admire exploring the beauty of nature, preferably hiking, for my vacation. Interested in the entire web spectrum and working on ambitious projects with positive people.",
            "Stay bold",
            "&",
            "Have an outstanding"
          ],
          work: {
            title: ['Work', 'History'],
            type: {
             fullTime: 'Permanent Full-time',
             internship: 'Internship',
            },
            role: ["Full Stack Developer", "Junior Web Developer", "Web Designer"],
            duration: ["Jan", "Aug"]
          },
          experience: {
           years: "years",
           experience: "Experience",
           project: "Projects",
           complete: "completed",
           company: "companies",
           work: "Work"
          },
          skills: {
            description: [
                "I started my professional journey in web development with startups and collaborated with talented people to create web products with creative and smart thinking",
                "I can efficiently work on the front-end and on the back-end both along with maintaining databases using reliable web technologies. Experienced in deploying web products on Vercel, Heroku and Netlify. In the rear, I possess Full-stack development skills and experiences.",
                "I have experience of working in agile development and value customer needs. Visit my",
                "profile for more details or just",
                "me"
              ],
            title: ["S", "kills"],
          },
          project: {
            title: ['P', 'roject'],
            team:"Team projects"
          },
          contact: {
            title: ["Get in Touch", "Contact me"],
            description:"I am interested in web development opportunities. If you have any question or want to discuss more about, don't hesitate to reach me",
            form: {
              name: "Name",
              email: "Email",
              send: "Send"
            }
          }
        }
      },
      fr: {
        translation: {
         navbar: {
           home: 'Accueil',
           about: '?? Propos',
           work: 'Travail',
           skills: 'Comp??tences',
           project: 'Projets',
           contact: 'Contactez'
         },
         button: {
          hire: "Engagez moi",
         },
         download: "T??l??charger",
         home: {
           greeting : ["B", "onjour"],
           name: ["C'est", " K", "irti"],
           description: "D??veloppeuse Full-stack avec une grande exp??rience dans la conception et le d??veloppement Web. Je me sp??cialise dans la production d'un travail de qualit??."
         },
         about:[
          "Salut",
         "Permettez-moi de vous en dire un peu plus sur moi",
         "Je suis un d??veloppeur full-stack passionn??, situ?? au Canada. J'ai une v??ritable passion pour le d??veloppement web et la cr??ation d'exp??riences utilisateur intuitives et dynamiques. J'adore travailler avec React et d'autres frameworks. J'ai confiance en l'utilisation du MERN Full-Stack et poursuis une bonne exp??rience et des connaissances en technologies web.",
         
         "Je suis efficace pour combiner cr??ativit?? et r??solution de probl??mes pour d??velopper des applications conviviales. Mes points forts incluent la cr??ativit??, le travail d'??quipe et la fiabilit??. Je suis une personne bien organis??e, r??solvant des probl??mes, ind??pendante avec un grand souci du d??tail et une d??votion ?? vie ?? l'apprentissage.",
         
         "J'aime peindre et ??crire des chansons dans mon temps libre. J'admire l'exploration de la beaut?? de la nature, de pr??f??rence la randonn??e, pour mes vacances. Int??ress?? par tout le spectre web et travaillant sur des projets ambitieux avec des personnes positives.",
         
         "Restez audacieux", "et",  "Bon "
         ],
         work: {
           title: ['Historique de', 'Travail'],
           type: {
            fullTime: 'Permanent ?? temps plein',
            internship: 'Stage',
           },
           role: ["D??veloppeuse Full Stack", "D??veloppeuse Web Junior", "Designer Web"],
           duration: ["Janv", "Ao??t"]
         },
         experience: {
          years: "ans",
          experience: "Exp??rience",
          project: "Projets",
          complete: "compl??t??",
          company: "compagnie",
          work: "Travail"
         },
         skills: {
           description: [
               "J'ai commenc?? mon parcours professionnel dans le d??veloppement web avec des startups et ai collabor?? avec des personnes talentueuses pour cr??er des produits web avec une pens??e cr??ative et intelligente.", 
               "Je peux travailler efficacement sur le front-end et sur le back-end, tout en maintenant des bases de donn??es en utilisant des technologies web fiables. Exp??riment?? dans le d??ploiement de produits web sur Vercel, Heroku et Netlify. En arri??re, je poss??de des comp??tences et des exp??riences en d??veloppement Full-stack.", 
               "J'ai l'exp??rience du travail en d??veloppement agile et appr??cie les besoins des clients. Visitez mon profil", 
               "pour plus de d??tails ou",
               "simplement"
             ],
           title: ["C", "omp??tences"],
         },
         project: {
          title: ["P", "rojets"],
          team: "Projet d'??quipe"
         },
         contact: {
          title: ["Dites hey", "Contactez moi"],
          description:"Je suis int??ress?? par les opportunit??s de d??veloppement web. Si vous avez des questions ou souhaitez en discuter davantage, n'h??sitez pas ?? me contacter",
          form: {
            name: "Nom",
            email: "Courriel",
            send: "Envoyer"
          }
         }
        }
      },
    }
  });

export default i18n;