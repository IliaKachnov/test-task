import React from 'react';
import './searchBar.css'
import search from './../../img/search.svg'

const SearchBar = ({ value, onChange}) => {
  return (
    <>
      <div className='searchBar__container'>
        <input value={value} onChange={e => onChange(e.target.value)} className='searchBar' placeholder='Поиск' />
        <img className='searchIcon' src={search} alt='icon' />
      </div>
    </>
  )
}

export default SearchBar;