import React from 'react';

function Arrow(props) {
    const { direction } = props;
    const icon = direction === 'next' ? '➡' : '⬅';

    const handleClick = (e) => {
        e.preventDefault();
        props.onClick();
    };

    return (
        <button onClick={handleClick}>
            {icon}
        </button>
    );
}

export default Arrow;