import React, { PropTypes } from 'react';
import ReactTransitionGroup from 'react-addons-transition-group'
import './App.css';
import './routingAnimation.css';
import { Link } from 'react-router'


// TODO: sass rules to squash theme css files into one, load them on state change
import '../public/theme--gray/theme.css';
import '../public/theme--gray/theme__workview.css';
import '../public/theme--gray/theme__projectview.css';



// This is intentionally not part of state, because we only need to update it on mount. Avoid un-necessary re-renders.
let scrollY = 0;

const App = React.createClass({
  getInitialState() {
    // Setup application state. if this were a more complication app we'd use react, however for this project let's just
    // pass handlers into children to update this state when needed
    return {
      //activeTheme: ''
    }
  },

  handleScroll(e) {
    // WorkView calls this when it scrolls, and we store it here, so we can scroll back to it when WorkView is re-mounted
    e.preventDefault();
    scrollY = e.target.scrollTop;
  },

  //TODO: set theme

  render() {
    return (
      <div className="App">
        <div className="App__header">
          <Link to="/">home link</Link>
          <Link to="/project/pandora">project link</Link>
        </div>


        <ReactTransitionGroup>
          {React.cloneElement(this.props.children, {key: location.hash, handleScroll: this.handleScroll, scrollY} )}
        </ReactTransitionGroup>
      </div>
    );
  }
});

export default App;
