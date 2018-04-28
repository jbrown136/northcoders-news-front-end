import React, { Component } from 'react';
import '../styles/topics.css';
import api from '../apiRequests.js'
import Topic from './Topic'



class Topics extends Component {
    state = {
      topics: []
    }
    componentDidMount () {
      return api.getTopics()
      .then(topics => {
        this.setState({topics})
      })
    }
  render () {
    if (this.state.topics.length === 0) return null
    else {
      const allTopics = this.state.topics.map(topic => {
        return <Topic topic={topic} key={topic._id}/>
      })
      return <h2 className="main">
          Topics
        {allTopics}
      </h2>
    }
  }
  }

  export default Topics