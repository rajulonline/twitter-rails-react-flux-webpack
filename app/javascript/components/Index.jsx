// Path : app/javascript/components/GreetUser.js
import React from "react";
import PropTypes from "prop-types";
import { hot } from 'react-hot-loader';
import TweetsList from './TweetsList';
import TweetBox from './TweetBox';
import TweetStore from "../stores/TweetStore";

import TweetActions from "../actions/TweetActions"
TweetActions.getAllTweets();

let getAppState = () => {
	return {tweetsList: TweetStore.getAll()};

}

export default class Index extends React.Component {
constructor(props) {
	super(props);
	this.state = getAppState();
	this._onChange = this._onChange.bind(this);
}
	

	// formattedTweets = (tweetsList) => {
	// 	// let formattedList = tweetsList.map(tweet => {
	// 	// 	tweet.formattedDate = moment(tweet.created_at).fromNow();
	// 	// 	return tweet;
	// 	// });
	// 	// return {
	// 	// 	tweetsList: formattedList
	// 	// };
	// }

	// addNewTweet = (userTweet) => {
	// // $.post("/tweets", {tweet_body: userTweet})
	// // .success(savedTweet => {
	// // 	let newTweetList = this.state.tweetsList;
	// // 	newTweetList.unshift(savedTweet);
	// // 	this.setState(this.formattedTweets(newTweetList));	
	// // })
	// // .error(error=>console.log(error));
	// }

	componentDidMount() {
		// $.ajax("/tweets")
		// .success(data => this.setState(this.formattedTweets(data)))
		// .error(error => console.log(error));	
		TweetStore.addChangeListener(this._onChange);	
	}

	componentWillUnMount() {
		TweetStore.removeChangeListener(this._onchange);
	}
	_onChange() {
		console.log(5, "Main._onChange");
		this.setState(getAppState());
	}

  render () {
    return ( 
    	<div className="container">
    		<TweetBox />
    		<TweetsList tweets={this.state.tweetsList}/>
    	 </div>
    );
  }
}
