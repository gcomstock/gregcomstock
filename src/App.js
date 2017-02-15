import React, { PropTypes } from 'react';
import ReactTransitionGroup from 'react-addons-transition-group'
import './App.css';
import './route.css';
import { Link } from 'react-router'


// TODO: sass rules to squash theme css files into one, load them on state change
import '../public/theme--gray/theme.css';
import '../public/theme--gray/theme__workview.css';
import '../public/theme--gray/theme__projectview.css';


const App = React.createClass({
  getInitialState() {
    return {
      scrollY: 0
    }
  },

  handleScroll(e) {
    this.setState({scrollY: e.target.scrollTop});
  },

  render() {
    return (
      <div className="App">
        <div className="App__header">
          <Link to="/">home link</Link>
          <Link to="/project/immaproject">project link</Link>
        </div>


        <ReactTransitionGroup>
          {React.cloneElement(this.props.children, {key: location.hash})}
        </ReactTransitionGroup>


      </div>
    );
  }
});

export default App;
