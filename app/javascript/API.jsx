//This methods responsibility is to just call an api
// so we shouldnt worry about what should be done on success or failure
//the success action will give us the data, so we need to pass it along to server action
import ServerActions from "./actions/ServerActions"

export default {
	getAllTweets() {
		console.log(2, "api call");
		$.get("/tweets")
		.success(rawTweets => ServerActions.receivedTweets(rawTweets))
		.error(error => console.log(error))
	},
	
	receivedOneTweet(tweet_body) {		
		$.post("/tweets", {tweet_body})
		.success(rawTweet => ServerActions.receivedOneTweet(rawTweet))
		.error(error => console.log(error))
	}
}