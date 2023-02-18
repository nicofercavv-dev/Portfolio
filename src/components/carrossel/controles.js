import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

const Controles = ({ prev, next }) => {
  return (
    <>
        <button className='left' onClick={prev}><FontAwesomeIcon icon={faChevronLeft} /></button>
        <button className='right' onClick={next}><FontAwesomeIcon icon={faChevronRight} /></button>
    </>
  )
}

Controles.propTypes = {
  prev: PropTypes.func,
  next: PropTypes.func
}

export default Controles
