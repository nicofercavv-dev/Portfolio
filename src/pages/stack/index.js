import React, { useState } from 'react'
import Header from '../../components/header'
import StackContainer from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowRestore } from '@fortawesome/free-regular-svg-icons'
import { faLaptop, faDatabase } from '@fortawesome/free-solid-svg-icons'
import { stackdb } from '../../data/stack'
// import triangulo from './triangulo.svg'

const Stack = () => {
  const [stack, setStack] = useState('front')

  const handleClick = (e) => {
    console.log('c')
    if (e.target.id === 'front') {
      setStack('front')
    }
    if (e.target.id === 'back') {
      setStack('back')
    }
    if (e.target.id === 'other') {
      setStack('other')
    }
  }

  return (
    <StackContainer>
        <Header />
        <main>
            <div className='sections'>
                <button id='front' to='frontend' onClick={handleClick} className={stack === 'front' ? 'active' : ''}>
                    <FontAwesomeIcon icon={faWindowRestore} id='front' />
                    <p id='front'>FRONTEND</p>
                </button>
                <button id='back' to='frontend' onClick={handleClick} className={stack === 'back' ? 'active' : ''}>
                    <FontAwesomeIcon icon={faDatabase} id='back' />
                    <p id='back'>BACKEND</p>
                </button>
                <button id='other' to='frontend' onClick={handleClick} className={stack === 'other' ? 'active' : ''}>
                    <FontAwesomeIcon icon={faLaptop} id='other' />
                    <p id='other'>OUTROS</p>
                </button>
            </div>
            {stack === 'front' && <div className='section-description current-description'>
                <h2>{stackdb.front.title}</h2>
                <ul>
                    {stackdb.front.habilidades.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
            }
            {stack === 'back' && <div className='section-description current-description'>
                <h2>{stackdb.back.title}</h2>
                <ul>
                    {stackdb.back.habilidades.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
            }
            {stack === 'other' && <div className='section-description current-description'>
                <h2>{stackdb.other.title}</h2>
                <ul>
                    {stackdb.other.habilidades.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
            }
        </main>
    </StackContainer>
  )
}

export default Stack
