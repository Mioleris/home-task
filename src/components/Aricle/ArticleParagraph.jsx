import React from 'react';

function ArticleParagraph(props) {
    return (
        <p className="article-paragraph">
            { props.children }
        </p>
    );
}

export default ArticleParagraph;
