import React, { Component } from 'react';
import '../styles/singleArticle.css'
import api from '../apiRequests.js'
import Comment from './Comment.js'


class SingleArticle extends Component {
    state = {
        article: {},
        comment: ""
    }
    componentDidMount () {
        return api.getSingleArticle(this.props.article)
        .then(article => {
            this.setState({
                article
            })
        })
    }
    
    handleChange = event => {
        this.setState({
            comment: event.target.value
        })
    }

    postComment = () => {
        if (this.state.comment.length === 0) return null
        else {
            return api.postComment(this.state.article.article._id, this.state.comment)
            .then(res => {
                return api.getSingleArticle(this.props.article)
            })
                .then (article => {
                this.setState({
                    article: article,
                    comment: ""
                })
            })
        }
    }
  
    
     deleteComment = (id) => {
         return api.deleteComment(id)
         .then(data => api.getSingleArticle(this.props.article))
         .then(article => {
             this.setState({
                 article
             })
         })
     }
     changeVote = (id, vote) => {
        return api.changeArticleVote(id, vote)
        .then(data => api.getSingleArticle(id))
        .then(article => {
          this.setState({
          article
         })
        })
      }
      changeCommentVote = (id, vote) => {
          return api.changeCommentVote(id, vote)
          .then(data => api.getSingleArticle(this.props.article))
          .then(article => {
            this.setState({
                article
            })
        })
      }
    render () {
        if(Object.keys(this.state.article).length === 0) return null
        else {
            const {article, comments} = this.state.article
            const allComments = comments.map((comment, i) => {
                return (
                    <div className="comment" key={i}>
                        <Comment comment={comment} key={i} deleteComment={this.deleteComment} changeVote={this.changeCommentVote}/>
                    </div>
                )
            })
        return (
            <div className="container">
                <h2>{article.title}</h2>
                <button onClick={() => this.changeVote(article._id, "up")}>Up-vote Article</button>
                <button onClick={() => this.changeVote(article._id, "down")}>Down-vote Article</button>
                <p>Votes: {article.votes}</p>
                <p>{article.body}</p>
                <h4>Comments ({comments.length})</h4>
                <div>{allComments}</div>
                <input placeholder="Write a comment" onChange={this.handleChange} value={this.state.comment}/>
                <button onClick={this.postComment}>post</button>
            </div>
        )
    }
}
}

export default SingleArticle