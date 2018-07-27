// Path : app/javascript/components/GreetUser.js
import React from "react";
import PropTypes from "prop-types";
import { hot } from 'react-hot-loader';

class Tweet extends React.Component {
  render () {
    return (
      <div>                
        	<li className="collection-item avatar">
        		<i className="material-icons circle green">insert_chart</i>
        		<span className="title">{this.props.name}</span>
        		<time>{this.props.formattedDate}</time>
            <p>{this.props.body}</p>                  		                   		
        	</li>        		        
      </div>
    );
  }
}

export default hot(module)(Tweet);