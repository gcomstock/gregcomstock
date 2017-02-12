import React, { Component } from 'react';
import WorkView from './WorkView/WorkView';
import Block3d from './Block3d/Block3d';
import ReactTransitionGroup from 'react-addons-transition-group'
import './App.css';
import './route.css';
import { Link } from 'react-router'


//TODO: sass rules to squash theme css files into one, load them on state change
import '../public/theme--gray/theme.css';
import '../public/theme--gray/theme__workview.css';


class App extends Component {
  render() {

    //console.debug('App render: ' + location.hash);

    return (
      <div className="App">
        <div className="App__header">
          <Link to="/">home link</Link>
          <Link to="/project/immaproject">project link</Link>
        </div>

        <div className="App__body">


          {/* route component renders here */}
          <ReactTransitionGroup component="div">
            {React.cloneElement(this.props.children, {key: location.hash})}
          </ReactTransitionGroup>


        </div>
      </div>
    );
  }
}

export default App;
