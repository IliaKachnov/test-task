import React from 'react'
import './tableCell.css';

const TableCell = ({ id, title, body}) => {
  return (
    <>
      <div className='tableCell__container'>
        <div className='id__container'>
          <p className='tableCell__id'>{id}</p>
        </div>
        <div className='tableCell__title'>
          <p className='title__text'>{title}</p>
        </div>
        <div className='tableCell__description'>
          <p className='description__text'>{body}</p>
        </div>
      </div>
    </>
  )
}

export default TableCell;