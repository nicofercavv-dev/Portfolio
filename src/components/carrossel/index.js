import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import Controles from './controles'
import IndicadoresCarrossel from './indicadores'

const Carrossel = ({ projetos }) => {
  const [currentSlide, setcurrentSlide] = useState(0)
  const slideInterval = useRef()

  const prev = () => {
    startSlideTimer()
    const index = currentSlide > 0 ? currentSlide - 1 : projetos.length - 1
    setcurrentSlide(index)
  }

  const next = () => {
    startSlideTimer()
    const index = currentSlide < projetos.length - 1 ? currentSlide + 1 : 0
    setcurrentSlide(index)
  }

  const startSlideTimer = () => {
    stopSlideTimer()
    slideInterval.current = setInterval(() => {
      setcurrentSlide(currentSlide => currentSlide < projetos.length - 1 ? currentSlide + 1 : 0)
    }, 7000)
  }

  const stopSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current)
    }
  }

  const switchIndex = (index) => {
    startSlideTimer()
    setcurrentSlide(index)
  }

  useEffect(() => {
    startSlideTimer()
    return () => stopSlideTimer()
  }, [])

  return (
    <div className='carrossel'>
      <div className='carrossel-interno' style={
        { transform: `translateX(${-currentSlide * 100}%)` }
      }>
        {projetos.map(item => (
          <div key={item.nome} className='carrossel-item' onMouseEnter={stopSlideTimer} onMouseLeave={startSlideTimer}>
            <div className='descricao'>
              <h3>{item.nome}</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam massa et ligula auctor volutpat. Fusce vestibulum mi purus, in convallis justo iaculis viverra. ksfjksfksadasfs, dfgdgdageag.eg
              </p>
              <div className='links'>
                <a>REPOSITÓRIO</a>
                <a>SITE</a>
              </div>
            </div>
            <img src={item.capa}/>
          </div>
        ))}
      </div>
      <IndicadoresCarrossel projetos={projetos} currentIndex={currentSlide} switchIndex={switchIndex} />
      <Controles prev={prev} next={next} />
    </div>
  )
}

Carrossel.propTypes = {
  projetos: PropTypes.array
}

export default Carrossel
