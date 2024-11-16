import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From websites to web apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'Websites' ?
            <ToggleButton active value="Websites" onClick={() => setToggle('Websites')}>Websites</ToggleButton>
            :
            <ToggleButton value="Websites" onClick={() => setToggle('Websites')}>Websites</ToggleButton>
          }
          <Divider />
          {toggle === 'Wordpress' ?
            <ToggleButton active value="Wordpress" onClick={() => setToggle('Wordpress')}>Wordpress</ToggleButton>
            :
            <ToggleButton value="Wordpress" onClick={() => setToggle('Wordpress')}>Wordpress</ToggleButton>
          }
          <Divider />
          {toggle === 'Games' ?
            <ToggleButton active value="Games" onClick={() => setToggle('Games')}>Games</ToggleButton>
            :
            <ToggleButton value="Games" onClick={() => setToggle('Games')}>Games</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects