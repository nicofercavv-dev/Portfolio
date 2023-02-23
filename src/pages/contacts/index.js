import React from 'react'
import ContactContainer from './styled'
import Header from '../../components/header'

const fotoPerfil = `${process.env.REACT_APP_BASEURL}/img/perfil.jpg`
const email = `${process.env.REACT_APP_BASEURL}/img/email.svg`
const linkedin = `${process.env.REACT_APP_BASEURL}/img/linkedin.svg`
const github = `${process.env.REACT_APP_BASEURL}/img/github.svg`
const instagram = `${process.env.REACT_APP_BASEURL}/img/instagram.svg`
const twitter = `${process.env.REACT_APP_BASEURL}/img/twitter.svg`

const ContactPage = () => {
  return (
    <ContactContainer>
      <Header />
      <main>
        <div className='text'>
          <h2>Entre em contato comigo!</h2>
          <p>Obrigada pelo acesso ao meu site! Se quiser entrar em contato aqui está uma lista de lugares onde você pode me encontrar :)</p>
        </div>
        <div className='profile-container'>
          <img src={fotoPerfil} className='profile' />
        </div>
        <section>
          <a href='https://instagram.com' target='_blank' rel='noreferrer' className='contact'>
            <img src={email} className='icon' />
          </a>
          <a className='contact'>
            <img src={linkedin} className='icon' />
          </a>
          <a className='contact'>
            <img src={github} className='icon' />
          </a>
          <a className='contact'>
            <img src={instagram} className='icon' />
          </a>
          <a className='contact'>
            <img src={twitter} className='icon' />
          </a>
        </section>
      </main>
    </ContactContainer>
  )
}

export default ContactPage
