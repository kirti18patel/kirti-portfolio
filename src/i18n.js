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
           about: 'À Propos',
           work: 'Travail',
           skills: 'Compétences',
           project: 'Projets',
           contact: 'Contactez'
         },
         button: {
          hire: "Engagez moi",
         },
         download: "Télécharger",
         home: {
           greeting : ["B", "onjour"],
           name: ["C'est", " K", "irti"],
           description: "Développeuse Full-stack avec une grande expérience dans la conception et le développement Web. Je me spécialise dans la production d'un travail de qualité."
         },
         about:[
          "Salut",
         "Permettez-moi de vous en dire un peu plus sur moi",
         "Je suis un développeur full-stack passionné, situé au Canada. J'ai une véritable passion pour le développement web et la création d'expériences utilisateur intuitives et dynamiques. J'adore travailler avec React et d'autres frameworks. J'ai confiance en l'utilisation du MERN Full-Stack et poursuis une bonne expérience et des connaissances en technologies web.",
         
         "Je suis efficace pour combiner créativité et résolution de problèmes pour développer des applications conviviales. Mes points forts incluent la créativité, le travail d'équipe et la fiabilité. Je suis une personne bien organisée, résolvant des problèmes, indépendante avec un grand souci du détail et une dévotion à vie à l'apprentissage.",
         
         "J'aime peindre et écrire des chansons dans mon temps libre. J'admire l'exploration de la beauté de la nature, de préférence la randonnée, pour mes vacances. Intéressé par tout le spectre web et travaillant sur des projets ambitieux avec des personnes positives.",
         
         "Restez audacieux", "et",  "Bon "
         ],
         work: {
           title: ['Historique de', 'Travail'],
           type: {
            fullTime: 'Permanent à temps plein',
            internship: 'Stage',
           },
           role: ["Développeuse Full Stack", "Développeuse Web Junior", "Designer Web"],
           duration: ["Janv", "Août"]
         },
         experience: {
          years: "ans",
          experience: "Expérience",
          project: "Projets",
          complete: "complété",
          company: "compagnie",
          work: "Travail"
         },
         skills: {
           description: [
               "J'ai commencé mon parcours professionnel dans le développement web avec des startups et ai collaboré avec des personnes talentueuses pour créer des produits web avec une pensée créative et intelligente.", 
               "Je peux travailler efficacement sur le front-end et sur le back-end, tout en maintenant des bases de données en utilisant des technologies web fiables. Expérimenté dans le déploiement de produits web sur Vercel, Heroku et Netlify. En arrière, je possède des compétences et des expériences en développement Full-stack.", 
               "J'ai l'expérience du travail en développement agile et apprécie les besoins des clients. Visitez mon profil", 
               "pour plus de détails ou",
               "simplement"
             ],
           title: ["C", "ompétences"],
         },
         project: {
          title: ["P", "rojets"],
          team: "Projet d'équipe"
         },
         contact: {
          title: ["Dites hey", "Contactez moi"],
          description:"Je suis intéressé par les opportunités de développement web. Si vous avez des questions ou souhaitez en discuter davantage, n'hésitez pas à me contacter",
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