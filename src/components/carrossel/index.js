import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
// import Controles from './controles'
import IndicadoresCarrossel from './indicadores'

const Carrossel = ({ projetos }) => {
  const [currentSlide, setcurrentSlide] = useState(0)
  const slideInterval = useRef()

  // const prev = () => {
  //   startSlideTimer()
  //   const index = currentSlide > 0 ? currentSlide - 1 : projetos.length - 1
  //   setcurrentSlide(index)
  // }

  // const next = () => {
  //   startSlideTimer()
  //   const index = currentSlide < projetos.length - 1 ? currentSlide + 1 : 0
  //   setcurrentSlide(index)
  // }

  const startSlideTimer = () => {
    stopSlideTimer()
    slideInterval.current = setInterval(() => {
      setcurrentSlide(currentSlide => currentSlide < projetos.length - 1 ? currentSlide + 1 : 0)
    }, 5000)
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
              <p>{item.descricao}</p>
              <div className='links'>
                <a href={item.repositorio} target={'_blank'} rel="noreferrer">REPOSITÓRIO</a>
                <a href={item.site} target={'_blank'} rel="noreferrer noopener">SITE</a>
              </div>
            </div>
            <img src={`${process.env.REACT_APP_BASEURL}/${item.capa}`}/>
          </div>
        ))}
      </div>
      <IndicadoresCarrossel projetos={projetos} currentIndex={currentSlide} switchIndex={switchIndex} />
      {/* <Controles prev={prev} next={next} /> */}
    </div>
  )
}

Carrossel.propTypes = {
  projetos: PropTypes.array
}

export default Carrossel
