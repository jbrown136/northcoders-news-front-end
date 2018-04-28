import React, { Component } from 'react';
import {
  Link,
} from 'react-router-dom'
import api from '../apiRequests.js'
import '../styles/article.css'
import SingleArticle from './SingleArticle.js' 

class Article extends Component {
state ={
    comments: 0
}

componentDidMount () {
    return api.getArticleComments(this.props.article.article._id)
    .then(comments => {
        this.setState({
            comments
        })
    })
}

    render () {
    const{article} = this.props.article
    return (
        <div className="article">
            <h3><Link to={`/articles/${article._id}`}>{article.title}</Link></h3>
            <br/>
            <div>Topic: {article.belongs_to.title}</div>
            <div>created by: {article.created_by.username}</div>
            <div>Comments: {this.state.comments}</div>
            <div>Votes: {article.votes}</div>
        </div>
        
    )
}
displayArticle = () => {
    return <SingleArticle article={this.props.article.article._id} changeVote={this.props.changeVote}/>
}
}



export default Article