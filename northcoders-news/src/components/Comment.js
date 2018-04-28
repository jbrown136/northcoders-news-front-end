import React, {Component} from 'react'
import '../styles/comment.css'

class Comment extends Component {
    render () {
        const {comment} = this.props
        return (
            <div className="comment">
            <div> {comment.created_by.username} says: </div>
            <div>{comment.body}</div>
            <div> votes: {comment.votes}</div>
            <button onClick={() => this.props.changeVote(comment._id, "up")}>Up-vote Comment</button>
            <button onClick={() => this.props.changeVote(comment._id, "down")}>Down-vote Comment</button>
            <button onClick={() => this.props.deleteComment(comment._id)}>Delete Comment</button>
            </div>
        )
    }
}

export default Comment