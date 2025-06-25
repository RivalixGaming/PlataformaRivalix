import React from "react";
import "./Team.css"
import githubIcon from '../../assets/icon/mdi--github.svg';
import linkedinIcon from '../../assets/icon/mdi--linkedin.svg';
import renan from '../../assets/renan.jpg'
import vitor from '../../assets/vitor.jpg'
import pedroS from '../../assets/pedroS.jpg'
import luan from '../../assets/luan.jpg'
import gaby from '../../assets/gaby.jpg'
import gabriel from '../../assets/gabriel.png'
import daniel from '../../assets/daniel.jpg'
import pedroH from '../../assets/pedroH.png'

const teamMembers = [
  {
    name: "Luan Souza",
    role: "P.O e Desenvolvedor Banco de Dados",
    linkedin: "https://www.linkedin.com/in/luanscruz/",
    github: "https://github.com/LuanSouzza",
    photo: luan
  },
  {
    name: "Vitor Barbosa",
    role: "Scrum Master e Desenvolvedor Back-End",
    linkedin: "https://www.linkedin.com/in/vitor-silva-dev/",
    github: "https://github.com/VitorBSilvaDev",
    photo: vitor
  },
  {
    name: "Pedro Santana",
    role: "Financeiro e Desenvolvedor Full-Stack",
    linkedin: "https://www.linkedin.com/in/pedro-santan4/",
    github: "https://github.com/PedroPereiraSantana",
    photo: pedroS
  },
  {
    name: "Daniel Soares",
    role: "Desenvolvedor Full-Stack",
    linkedin: "https://www.linkedin.com/in/daniesoares30/",
    github: "https://github.com/danielsoares30",
    photo: daniel
  },
  {
    name: "Gabriel Cirilo",
    role: "Desenvolvedor Front-End",
    linkedin: "https://www.linkedin.com/in/cirilodev/",
    github: "https://github.com/cirilotech",
    photo: gabriel
  },
  {
    name: "Gabriella Guimarães",
    role: "Desenvolvedora Front-End e Designer de Arte",
    linkedin: "https://www.linkedin.com/in/gabriella-guimar%C3%A3es/",
    github: "https://github.com/GabriellaGuimaraesRamos",
    photo: gaby
  },
  {
    name: "Renan Paulino",
    role: "Desenvolvedor Front-End, Designer e UI/UX Designer",
    linkedin: "https://www.linkedin.com/in/renansilvapaulino",
    github: "https://github.com/devRenanPaulino",
    photo: renan
  },
  {
    name: "Pedro Santos",
    role: "Desenvolvedor Front-End e Marketing",
    linkedin: "https://www.linkedin.com/in/pedro-henrique-dos-santos-b381b6362/",
    github: "https://github.com/PedroSantos-18",
    photo: pedroH
  }
];

export default function Team() {
  return (
    <section className="team-section">
      <h2 className="team-title">Conheça as pessoas que tornam tudo isso possível.</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.photo} alt={member.name} className="team-photo" />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <div className="team-icons">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="LinkedIn" />
                </a>
                <a href={member.github} target="_blank" rel="noopener noreferrer">
                    <img src={githubIcon} alt="GitHub" />
                </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}