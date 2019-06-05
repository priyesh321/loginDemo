import React from 'react';
import { connect } from 'react-redux'
const imgStyle = {
    hight: 'auto',
    width: '80%',
    border: '4px solid RebeccaPurple ',
    borderRadius: '5%'
};
const articleStyle = {
    width: '50%',
    margin: '0 auto',
    color: 'olive'
}
let NewsItem = ({ articles = [] }) => {
    if (articles.length !== 0) {
        return (
            articles.map((article, index) => {
                return (
                    <article key={index} style={articleStyle} >
                        <div>
                            <h1>{article.title}</h1>
                            <img style={imgStyle} src={article.thumbnailUrl} alt="" />
                            <h4>{article.id}</h4>
                            <a href={article.url} target="_blank">READ MORE</a>
                        </div>
                    </article>
                )
            }))
    } else {
        return null
    }
}
const mapStateToProps = (state) => ({
    articles: state.news,
})

export default connect(mapStateToProps, null)(NewsItem);
