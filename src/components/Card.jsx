import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {
    return (
        <div className={`card ${props.className ? props.className : ''}`}>
            <h3>{ props.title }</h3>
            <p>{ props.children }</p>
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default Card;
