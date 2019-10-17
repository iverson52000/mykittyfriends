import React from 'react';

const SearchBox = (props) => {
  const {searchChange} = props;
  return (
      <div>
        <input 
          className = 'pa3 ba b--green bg-lightest-blue'
          type = 'search' 
          size = '30'
          placeholder = 'Search your kitty friends!'
          onChange = {searchChange} 
        />
      </div>
    );
}

export default SearchBox;