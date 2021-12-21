import {
  ProjectContainer,
  ProjectDescriptionContainer,
  ProjectImageBackground,
  ProjectImageContainer,
  ProjectImageDark,
  ProjectLink,
  ProjectLinksContainer,
  ProjectsTitleContainer,
  ProjectTag,
  ProjectTagContainer,
  StyledProjectsSection,
} from '../styles/sections/ProjectsSectionStyles'
import { projectsInfo } from '../../data/projects'
import { FaGithub, FaLink } from 'react-icons/fa'

const ProjectsSection = () => {
  return (
    <StyledProjectsSection id="projects">
      <ProjectsTitleContainer>
        <h1>Projects</h1>
        <p>These are some of my best projects</p>
      </ProjectsTitleContainer>
      {projectsInfo.map((project, index) => (
        <ProjectContainer key={index}>
          <ProjectImageContainer>
            <ProjectImageBackground id="background" />
            <ProjectImageDark>
              <h1>{project.type}</h1>
              <img src={project.image} alt={project.name} />
            </ProjectImageDark>
          </ProjectImageContainer>
          <ProjectDescriptionContainer>
            <h3>{project.name}</h3>
            <ProjectTagContainer>
              {project.tags.map((tag, index) => (
                <ProjectTag key={index}>{tag}</ProjectTag>
              ))}
            </ProjectTagContainer>
            <p>{project.description}</p>
            <ProjectLinksContainer>
              <ProjectLink href={project.codeLink}>
                <FaGithub />
                View Code
              </ProjectLink>
              {project.liveLink && (
                <ProjectLink href={project.liveLink}>
                  <FaLink />
                  Live Demo
                </ProjectLink>
              )}
            </ProjectLinksContainer>
          </ProjectDescriptionContainer>
        </ProjectContainer>
      ))}
    </StyledProjectsSection>
  )
}

export default ProjectsSection
