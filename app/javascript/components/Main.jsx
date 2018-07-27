import Index from "../components/Index"
import follow from "../components/follow"
import Tweet from "../components/Tweet"

import React from "react";
import PropTypes from "prop-types";
import { hot } from 'react-hot-loader';

import ReactDOM from 'react-dom'; 
import { HashRouter as Router, Route } from 'react-router-dom';

class Main extends React.Component {
	render() {
		return(
			<Router>
    <div>
      
      <Route exact path="/" component={Index} />
      <Route exact path="/follow" component={follow} /> 
      <Route exact path="/tweets" component={Tweet} />    
     
    </div>
  </Router>
			);
	}
}

export default hot(module)(Main);


// const BasicExample = () => (
  
// );



// export default BasicExample;