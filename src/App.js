import React, { PropTypes } from 'react';
import WorkView from './WorkView/WorkView';
import Block3d from './Block3d/Block3d';
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

  componentDidMount() {
    console.log('moutned');
    //this.appBody.addEventListener('scroll', this.handleScroll);
  },

  /*
   paneDidMount = (node) => {
   if (node) {
   node.addEventListener('scroll', () => console.log('scroll!'));
   }
   };

   renderMediaBrowser = () => {
   if (!this.state.open) return null;

   return <div style={styles.mediaBrowserContainer}>
   <h2 style={styles.dialogTitle}>Media Library</h2>

   <div ref={this.paneDidMount} style={styles.pane}>
   <div style={styles.thumbs}>
   {this.renderImages()}
   </div>
   </div>
   </div>
   };


   <div className="App__body" ref={(el) => { el.addEventListener('scroll', this.handleScroll )} }>
  */


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

        <div className="App__body" onScroll={(e) => { this.handleScroll(e)} }>


          <ReactTransitionGroup>
            {/*                 route component, {props}, children */}
            {React.cloneElement(this.props.children, {key: location.hash, scrollY: this.state.scrollY})}
          </ReactTransitionGroup>

        </div>
      </div>
    );
  }
});

export default App;
