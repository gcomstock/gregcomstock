import React, { Component } from 'react';
import WorkView from './WorkView/WorkView';
import Block3d from './Block3d/Block3d';
import './App.css';


//TODO: sass rules to squash theme css files into one, load them on state change
import '../public/theme--gray/theme.css';
import '../public/theme--gray/theme__workview.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__header"></div>

        <div className="App__body">
          <div className="App__wrapper">

            <div className="App__wrapper__leftFrame">
              <Block3d width='8rem' height='100%' depth='20' z='-2'>
              </Block3d>
            </div>

            {/* route content goes here */}
            <WorkView/>

            <div className="App__wrapper__rightFrame">
              <Block3d width='8rem' height='100%' depth='20' z='-2'>
              </Block3d>
            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default App;
