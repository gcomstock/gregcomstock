import React, { PropTypes } from 'react';
import ReactTransitionGroup from 'react-addons-transition-group'
import { Link } from 'react-router'


const BREAKPOINT_MOBILE = 1020;

// This is intentionally not part of state, because we only need to update it on mount. Avoid un-necessary re-renders.
let scrollY = 0;

const App = React.createClass({
  getInitialState() {

    //setup listener
    window.onresize = (e) => {
      this.handleResize(e);
    };

    // Setup application state. If this were a more complication app we'd use redux, however for this project let's just
    // pass handlers into children to update this App-level state when needed
    return {
      isMobile: false
      //activeTheme: ''
    }
  },

  handleResize(e) {
    if (e.target.innerWidth <= BREAKPOINT_MOBILE && this.state.isMobile === false) {
      this.setState({isMobile: true});
    }

    if (e.target.innerWidth > BREAKPOINT_MOBILE && this.state.isMobile === true) {
      this.setState({isMobile: false});
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
          {React.cloneElement(this.props.children, {
            key: location.hash,
            isMobile: this.state.isMobile,
            handleScroll: this.handleScroll,
            scrollY
          } )}
        </ReactTransitionGroup>
      </div>
    );
  }
});

export default App;
