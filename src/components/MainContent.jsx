
import AboutContainer from './AboutContainer.jsx';
import TechnologiesContainer from './TechnologiesContainer.jsx';
import ProjectsContainer from './ProjectsContainer.jsx';

import '../styles/components/maincontent.sass'
import '../styles/responsive.sass'

function MainContent(props) {
    return (
        <main id='main-content'>
            <AboutContainer />
            <TechnologiesContainer />
            <ProjectsContainer />
        </main>
    );
}

export default MainContent;