import React from 'react';
import {
  Link
} from 'react-router-dom'



const Topic = (props) =>  {
        const {topic} = props
        return (
            <div>
                <h4><Link to={`/topics/${topic.slug}/articles`}>{topic.title}</Link></h4>
            </div>
        )
}



export default Topic