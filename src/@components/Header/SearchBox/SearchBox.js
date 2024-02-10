import React from 'react';
import './SearchBox.css';

const SearchBox =({searchChangeToSearchBox}) => {
    return (
        <div className='SearchBar'>
            <input 
            className='pa3 ba b--green bg-lightest-blue'
            type='search' 
            placeholder='Намери Оферта' 
            onChange={searchChangeToSearchBox}
            />
        </div>
    );
}
export default SearchBox;