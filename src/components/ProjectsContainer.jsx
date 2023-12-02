import '../styles/components/projectscontainer.sass'

const ProjectsContainer = () => {
    return (
        <section className='projects-container'>
            <h2>Projetos 📂</h2>
            <p>Alguns projetos que criei, colaborei e também alguns que estão em processo</p>
            <a href="https://github.com/rauloliveiratech?tab=repositories" className='btn' target='_blank'>Ver Projetos</a>
        </section>
    );
};

export default ProjectsContainer;