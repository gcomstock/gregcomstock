import React, { PropTypes } from 'react';
import ReactTransitionGroup from 'react-addons-transition-group'
import { Link } from 'react-router'



// This is intentionally not part of state, because we only need to update it on mount. Avoid un-necessary re-renders.
let scrollY = 0;

const App = React.createClass({
  getInitialState() {
    // Setup application state. if this were a more complication app we'd use redux, however for this project let's just
    // pass handlers into children to update this state when needed
    return {
      //activeTheme: ''
    }
  },

  handleScroll(e) {
    // WorkView calls this when it scrolls, and we store it in App.js, so we can scroll back to position when WorkView is re-mounted
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
