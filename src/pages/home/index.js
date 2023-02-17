import React from 'react'
import Header from '../../components/header'
import HomeContainer from './styled'

const Home = () => {
  return (
    <HomeContainer>
        <Header />
        <main>
            <h1>Oie! Eu sou a Nicole, mas me chame de Nico :)</h1>
            <p>
                Sou uma desenvolvedora web focada especialmente no front-end, com experiência em sistemas reais. Acredito que a tecnologia é um dos maiores realizadores de sonhos da nossa atualizade e isso me empenha a ser cada vez melhor nas minhas habilidades e oferecer serviços cada vez mais excelentes.
            </p>
            <button><a href='' download='CV'>BAIXE MEU CV AQUI</a></button>
        </main>
    </HomeContainer>
  )
}

export default Home
