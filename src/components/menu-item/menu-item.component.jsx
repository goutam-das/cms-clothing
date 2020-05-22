import React from 'react';
import PropTypes from 'prop-types';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => {
    return (
        <div className={`menu-item ${size}`}>
            <div
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
                className={`background-image`}
            />
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    size: PropTypes.string
}

export default MenuItem;