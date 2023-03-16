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
    console.log(e.target.className)
    if (e.target.className === 'front') {
      setStack('front')
    }
    if (e.target.className === 'back') {
      setStack('back')
    }
    if (e.target.className === 'other') {
      setStack('other')
    }
  }

  return (
    <StackContainer>
        <Header />
        <main>
            <div className='sections'>
                <button to='frontend' onClick={handleClick} className={stack === 'front' ? 'active front' : 'front'}>
                    <FontAwesomeIcon icon={faWindowRestore} className='front' onClick={handleClick} />
                    <p className='front' onClick={handleClick}>FRONTEND</p>
                </button>
                <button to='backend' onClick={handleClick} className={stack === 'back' ? 'active back' : 'back'}>
                    <FontAwesomeIcon icon={faDatabase} className='back' onClick={handleClick} />
                    <p className='back' onClick={handleClick}>BACKEND</p>
                </button>
                <button to='frontend' onClick={handleClick} className={stack === 'other' ? 'active other' : 'other'}>
                    <FontAwesomeIcon icon={faLaptop} className='other' onClick={handleClick} />
                    <p className='other'>OUTROS</p>
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
