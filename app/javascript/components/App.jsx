


// import { render } from 'react-dom'; 
// import { HashRouter as Router, Route } from 'react-router-dom';
// /* Import statements */
// import React, { Component } from 'react';
// import { Link, Route, Switch } from 'react-router-dom';

// /* App component */
// class App extends React.Component {
//   render() {
//     return (
//       <div>

//           /* Route components are rendered if the path prop matches the current URL */
//            <Route path="/" component={Index}/>           
//       </div>
//     )
//   }
// }

//export default hot(module)(App);

const BasicExample = () => (
  <Router>
    <div>      
      <Route exact path="/" component={Index} />
      <Route exact path="/" component={profile} />     
    </div>
  </Router>
);



export default BasicExample;