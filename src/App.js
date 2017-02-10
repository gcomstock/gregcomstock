import React, { Component } from 'react';
import WorkView from './WorkView/WorkView';
import Block3d from './Block3d/Block3d';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
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
          <ReactCSSTransitionGroup
            component="div"
            transitionName="route"
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000}
          >
            {React.cloneElement(this.props.children, {key: location.hash})}
          </ReactCSSTransitionGroup>


        </div>
      </div>
    );
  }
}

export default App;
