import React from 'react';
import PropTypes from 'prop-types';

function Article(props) {
    return (
        <div className="article">
            <div className="date">
                { props.date }
            </div>
            <h1 className="title">{ props.title }</h1>
            <div>{ props.children }</div>
        </div>
    );
}

Article.propTypes = {
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default Article;
