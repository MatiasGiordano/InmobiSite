import React from 'react';
import ButtonGroup from './ButtonGroup';
import SearchBox from './SearchBox';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-container">
            <h2>Discover a place you'll love to live</h2>
            <ButtonGroup />
            <SearchBox />
        </div>
    );
};

export default Banner;