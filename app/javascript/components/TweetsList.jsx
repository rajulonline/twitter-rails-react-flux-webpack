// Path : app/javascript/components/GreetUser.js
import React from "react";
import PropTypes from "prop-types";
import { hot } from 'react-hot-loader';
import Tweet from './Tweet';


class TweetsList extends React.Component {
  render () {
  	let tweets = this.props.tweets.map (tweet => <Tweet key={tweet.id} {...tweet} /> );
    return ( 
    	<div>
		    <ul className="collection">    
		        {tweets}     
		    </ul>
     </div>
    );
  }
}

export default hot(module)(TweetsList);