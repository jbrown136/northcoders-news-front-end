import React, { Component } from 'react';
import '../styles/TopicArticles.css';
import api from '../apiRequests.js'
import Article from './Article.js'

class TopicArticles extends Component {
    state = {
        articles: []
    }
    componentDidMount () {
        return api.getArticlesByTopic(this.props.match.params.topic)
        .then(articles => {
            this.setState({
                articles
            })
        })
    }
    
    render () {
        const allArticles = this.state.articles.map((article, i) => {
            return (
                <div className="singleArticle" key={i}>
                <Article article={article} key={i} match={this.props.match} upvote={this.upvote} downvote={this.downvote}/>
                </div>
                )
        })
        return (
            <div className="articles">
            <h3>Number of Articles: {allArticles.length}</h3>
            <div className="allArticles">
                {allArticles}
            </div>
            </div>
        )
    }
}

export default TopicArticles