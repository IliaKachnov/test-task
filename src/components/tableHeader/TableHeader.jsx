import React from 'react'
import './tableHeader.css'
import arrow from '../../img/arrow.svg'

const TableHeader = ({ sortData }) => {
  return (
    <>
      <div className='searchHeader__container'>
          <p className='id'>ID</p>
          <img className='id__img' src={arrow} alt='arrow-icon'/>
          <div className='title__container'>
            <p className='title'>Заголовок</p>
            <img className='title__img' src={arrow} alt='arrow-icon'/>
          </div>
          <div className='description__container'>
            <p className='description'>Описание</p>
            <img className='description__img' src={arrow} alt='arrow-icon'/>
          </div>
      </div>
    </>
  )
}

export default TableHeader;