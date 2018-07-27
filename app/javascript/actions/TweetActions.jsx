import API from "../API"
export default {
	//This will be a single action with functions
	getAllTweets () {
		//Single responsibility with single flow
		// so this will communicate with api
		// so it will only send messages or meaning it will call an api
		console.log(1, "get all tweets");
		API.getAllTweets();
	},
	receivedOneTweet(body) {		
		API.receivedOneTweet(body);
	}
}