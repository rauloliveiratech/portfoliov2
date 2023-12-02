import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact,
    DiSass,
    DiPhotoshop
} from 'React-icons/di'

import { FiFigma } from "react-icons/fi";

import '../styles/components/technologiescontainer.sass'

const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", icon: <DiCss3 /> },
    { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
    { id: "mysql", name: "MySQL", icon: <DiMysql /> },
    { id: "react", name: "React", icon: <DiReact /> },
    { id: "sass", name: "Sass", icon: <DiSass /> },
    { id: "figma", name: "Figma", icon: <FiFigma /> },
    { id: "photoshop", name: "Photoshop", icon: <DiPhotoshop /> },
  ];
  
  const TechnologiesContainer = () => {
    return (
      <section className="technologies-container">
        <h2>Tecnologias 💡</h2>
        <div className="technologies-grid">
          {technologies.map((tech) => (
            <div className="technology-card" id={tech.id} key={tech.id}>
              {tech.icon}
              <div className="technology-info">
                <h3>{tech.name}</h3>
                {/* <p>Reservado para legenda das tecnologias</p> */}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

export default TechnologiesContainer;