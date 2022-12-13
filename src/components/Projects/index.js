import React, { useContext, useState } from "react";
import "./Projects.css";
import project1 from "../../img/assets/1.png";
import project2 from "../../img/assets/2.png";
import project3 from "../../img/assets/3.png";
import project4 from "../../img/assets/4.png";
import ProjectCard from './project_card.js'
import { themeContext } from "../../Context";
import { useTranslation } from 'react-i18next';

const Projects = () => {  
  const { t } = useTranslation();
  const [projects] = useState([
    // {
    //   name: 'Book Store',
    //   image: project3,
    //   teamsize: "Individual project",
    //   github:"https://github.com/kirti18patel/book-store",
    //   deployed: "https://kirti-book-search-engine.herokuapp.com/",
    //   technologies: "HTML, CSS, Javascript, ReactJs, Node.js, Express.js, MongoDB, GraphQL, Apollo Server",
    //   description:
    //     'Book Search Engine web application allows avid readers to search books available in order to keep track of their favorite books and make a list of books that need to be purchased. The reader can also delete the book from the saved book once purchased or read.'
    // },
    {
      name: 'Crazy Tetromino',
      image: project1,
      teamsize: `${t('project.team')}`,
      github:"https://github.com/kirti18patel/crazy-tetris",
      deployed: "https://crazy-tetrominos.herokuapp.com/",
      technologies: "HTML, CSS, Javascript, ReactJs, Node.js, Redux, GraphQL, MongoDB, JWT",
      description:
        'A crazy tetrominos is a very catchy and entertaining game where player can play game by logging in as well. Player gets awarded 40pts for destroying each line and its level will be up by 1 after reaching every 200pts.'
    },
    {
      name: 'Waste Management',
      image: project2,
      teamsize: `${t('project.team')}`,
      github:"https://github.com/Group05-Project02/waste-management",
      deployed: "https://waste-management-project2.herokuapp.com/",
      technologies: "HTML, CSS, Javascript, Node.js, Express.js, Handlebars, MySQL, Sequelize ORM",
      description:
        'A product waste managing web application which allows business owners to manage their kitchen waste in order to lower their overhead costs and also decrease their carbon footprint.'
    },
    // {
    //   name: 'Tech Blog',
    //   image: project4,
    //   teamsize: "Individual project",
    //   github:"https://github.com/kirti18patel/tech-blog",
    //   deployed: "https://salty-castle-76662.herokuapp.com/",
    //   technologies: "HTML, CSS, Javascript, Node.js, Express.js, Handlebars, MySQL, Sequelize ORM",
    //   description:
    //     'A tech blog web application which allows developers to publish their blog posts and comment on other developers’ posts as well.'
    // }
  ]);

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="project">
      <div className=""></div>
      <span style={{ color: darkMode ? "white" : "black" }} className="span-skills"><span className="span-S">{t('project.title.0')}</span>{t('project.title.1')}</span>
      <div className="project-card">
        {projects.map((project, i) => (
          <ProjectCard project={project} key={i}></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default Projects;
