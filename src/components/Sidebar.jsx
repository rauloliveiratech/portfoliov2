import React from 'react';
import Avatar from '../img/Eu.jpg'
import '../styles/components/sidebar.sass'
import Curriculo from '../docs/CurriculoRaul.pdf'
import InformationContainer from './informationContainer.jsx'
import SocialNetworks from './SocialNetworks.jsx'


const Sidebar = () => {
    return (
        <aside id='sidebar'>
            <img src={Avatar} alt="Raul Oliveira.jpg" />
            <p className="title">Desenvolvedor FrontEnd</p>
            <SocialNetworks />
            <InformationContainer />
            <a href={Curriculo} download className="btn">
                Download Currículo
            </a>
        </aside>
    );
};

export default Sidebar;