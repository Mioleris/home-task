import React from 'react';
import PropTypes from 'prop-types';

function ArticleQuote(props) {
    return (
        <div className="article-quote">
            <p className="quote">
                { props.children }
            </p>
            <p className="author">— { props.author }</p>
        </div>
    );
}

ArticleQuote.propTypes = {
    author: PropTypes.string.isRequired
};

export default ArticleQuote;

