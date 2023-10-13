import React, { useState } from 'react';
import './ButtonGroup.css';

const ButtonGroup = () => {
    const [selected, setSelected] = useState("");

    const handleButtonClick = (value) => {
        setSelected(value);
    };

    return (
        <div className="button-group">
            <button className={selected === "Buy" ? "active" : ""} onClick={() => handleButtonClick("Buy")}>Buy</button>
            <button className={selected === "Rent" ? "active" : ""} onClick={() => handleButtonClick("Rent")}>Rent</button>
            <button className={selected === "Sold" ? "active" : ""} onClick={() => handleButtonClick("Sold")}>Sold</button>
        </div>
    );
};

export default ButtonGroup;