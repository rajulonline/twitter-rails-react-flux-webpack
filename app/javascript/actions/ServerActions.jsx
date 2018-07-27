import AppDispatcher from "../dispatcher"
import ActionTypes from "../constants"

export default {
	receivedTweets(rawTweets) {		
		//Aoo dispatcher... There can be only one dispatcher.
		//it queues up events and sends them
		AppDispatcher.dispatch({				
			actionType: ActionTypes.RECEIVED_TWEETS,
			rawTweets: rawTweets
		}) 
			//based on label the stores will decide what to do
	},
	receivedOneTweet(rawTweet) {		
		//Aoo dispatcher... There can be only one dispatcher.
		//it queues up events and sends them
		AppDispatcher.dispatch({				
			actionType: ActionTypes.RECEIVED_ONE_TWEET,
			rawTweet: rawTweet
		}) 
			//based on label the stores will decide what to do
	}
}