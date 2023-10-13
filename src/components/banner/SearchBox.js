import React from 'react';
import './SearchBox.css'

const SearchBox = () => {
    return (
        <div className="search-box">
            <input type="text" placeholder="Buenos Aires, B" />
            <button>🔍</button>
        </div>
    );
};

export default SearchBox;