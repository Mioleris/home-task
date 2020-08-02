import React from 'react';

function ArticleIntro(props) {
    return (
        <p className="article-intro">
            { props.children }
        </p>
    );
}

export default ArticleIntro;
