import React from 'react';
import './SearchBox.css';

const SearchBox =() => {
    return (
        <div className='SearchBar'>
            <input 
            className='pa3 ba b--green bg-lightest-blue'
            type='search' 
            placeholder='Намери Оферта' 
            />
        </div>
    );
}
export default SearchBox;