import React from 'react'
import Header from '../../components/header'
import ProjectsPageContainer from './styled'
import { projetos } from '../../data/projetos'
import Carrossel from '../../components/carrossel'

const ProjectPage = () => {
  return (
    <ProjectsPageContainer>
      <Header />
      <main>
        <h1>Meus projetos</h1>
        <Carrossel projetos={projetos} />
      </main>
    </ProjectsPageContainer>
  )
}

export default ProjectPage
