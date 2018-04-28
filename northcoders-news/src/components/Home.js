import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'
import '../styles/home.css';


class Home extends Component {
    state = {
      query: ""
    }
    render () {
  return (
    <div>
  <h1 id="title">Northcoders News</h1>
  <h3 id="subtitle">Please select a category</h3>
  <div id="categories">
         <p>
           <Link className="category" to={"/topics"}>
             Topics 
           </Link>
         </p>
         <p>
           <Link className="category" to={"/users"}>
             Users
           </Link>
         </p>
         <p>
           <Link className="category" to={"/articles"}>
             Articles
           </Link>
         </p>
         <p>
           <Link className="category" to={"/about"}>
             About 
           </Link>
         </p>
      </div>
  </div>
        )
      }
      HomePage = () => {
        return (
          <div id="home">
          Welcome to Northcoders News
      </div>
        )
      }
  }
  
  export default Home