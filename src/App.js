import React from 'react';
import ReactTransitionGroup from 'react-addons-transition-group'
import { Link, hashHistory, browserHistory } from 'react-router'


const BREAKPOINT_MOBILE = 1020;

const App = React.createClass({
  getInitialState() {

    //setup listener
    window.onresize = (e) => {
      this.handleResize(e);
    };

    // Setup application state. If this were a more complicated app we'd use redux, however for this project let's just
    // pass handlers into children to update this App-level state when needed
    return {
      isMobile: window.innerWidth <= BREAKPOINT_MOBILE,
      scrollY: 0,
      theme: 'default',
      rootFontSize: 0
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
    this.setState({scrollY: e.target.scrollTop});
  },

  setTheme(theme) {
    this.setState({theme});
  },

  render() {
    return (
      <div className={`App theme--${this.state.theme}`}>
        <div className='App__header'>
          <div className='App__header__title'>
            Greg Comstock
          </div>
          <div className='App__header__theme' onClick={() => this.setTheme('default')}>1</div>
          <div className='App__header__theme' onClick={() => this.setTheme('game')}>2</div>
          <div className='App__header__theme' onClick={() => this.setTheme('tech')}>3</div>
          <div className='App__header__x' onClick={() => hashHistory.push('/')}></div>
        </div>

        <ReactTransitionGroup>
          {React.cloneElement(this.props.children, {
            key: location.hash,
            isMobile: this.state.isMobile,
            handleScroll: this.handleScroll,
            scrollY: this.state.scrollY
          } )}
        </ReactTransitionGroup>
      </div>
    );
  }
});

export default App;
