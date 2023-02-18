import React from 'react'
import IndicadoresContainer from './styled'
import PropTypes from 'prop-types'

const IndicadoresCarrossel = ({ projetos, currentIndex, switchIndex }) => {
  return (
    <IndicadoresContainer>
      {projetos.map((_, index) => (
        <button
          key={_.nome}
          className={currentIndex === index ? 'active' : ''}
          onClick={() => switchIndex(index)}
        ></button>
      ))}
    </IndicadoresContainer>
  )
}

IndicadoresCarrossel.propTypes = {
  projetos: PropTypes.array,
  currentIndex: PropTypes.number,
  switchIndex: PropTypes.func
}

export default IndicadoresCarrossel
