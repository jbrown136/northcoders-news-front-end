import React, { Component } from 'react';
import '../styles/articles.css';
import api from '../apiRequests.js'
import  Input from './Input.js'
import Article from'./Article.js'


class Articles extends Component {
    state = {
      articles: []
    }
  
    componentDidMount () {
      this.props.resetQuery();
        return api.getArticles()
        .then(articles => {
          this.setState({
            articles
          })
        })
    }
    render () {
      if (this.state.articles.length === 0) return null
      else {
        const allArticles = this.state.articles.filter(article => article.article.title.toLowerCase().includes(this.props.query.toLowerCase()))
        .map(article => {
          return (
          <div className="singleArticle" key={article.article._id}>
          <Article article={article} key={article.article._id} match={this.props.match} changeVote={this.changeVote}/>
          </div>
          )
        })
    return <div className="main">
    <h2 id="title">Articles</h2>
    <Input changeQuery={this.props.changeQuery} route="articles"/>
    <h3>Number of Articles: {allArticles.length}</h3>
    <div className="articles">{allArticles}</div>
    </div>
      }
  }
}

export default Articles