// Path : app/javascript/components/GreetUser.js
import React from "react";
import PropTypes from "prop-types";
import { hot } from 'react-hot-loader';

import TweetActions from "../actions/TweetActions";

class TweetBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {userTweet: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({userTweet: event.target.value});
  }

  handleSubmit(event) {
    //alert('A name was submitted: ' + this.state.userTweet);
    event.preventDefault();
    // this.props.onSubmit(this.state.userTweet);
    TweetActions.receivedOneTweet(this.state.userTweet);
    this.setState({userTweet: ''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.userTweet} onChange={this.handleChange} required/>
        </label>
        <input type="submit" className= "waves-effect waves-light btn-small" value="Submit" />
      </form>
    );
  }
}

export default hot(module)(TweetBox);