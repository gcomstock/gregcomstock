import React, { Component } from 'react';
import './Block3d.css';

//class Block3d extends Component {
const Block3d = React.createClass({
  propTypes: {
    width: React.PropTypes.string,
    height: React.PropTypes.string.isRequired,
    depth: React.PropTypes.string.isRequired,
    z: React.PropTypes.string,
    cssClass: React.PropTypes.string,
    clickHandler: React.PropTypes.func,
    route: React.PropTypes.string
  },

  modulateHeight() {
    if (this.props.height === 'auto') {
      //console.debug('modulate here')
    }

    return this.props.height;
  },

  applyXYTranslation() {
    let translation = '';

    if (this.props.y) {
      translation += 'translateY(' + this.props.y + 'rem)';
    }
    if (this.props.x) {
      translation += ' translateX(' + this.props.x + 'rem)';
    }

    return translation
  },

  applyZTranslation() {
    return this.props.z ? 'translateZ(' + this.props.z + 'rem)' : null;
  },

  render() {
    // wrapper does not translate and intercepts user input
    let classes = 'Block3d--wrapper';

    //TODO
    //get smart about excluding faces to increase performance

    if (typeof this.props.cssClass !== 'undefined') {
      classes += ' ' + this.props.cssClass;
    }

    console.debug('this.props.clickHandler');
    console.debug(this.props);

    return (
      <div className={classes} onClick={this.props.clickHandler} style={{
        transform: this.applyXYTranslation()
        }}>

        <div className="Block3d" style={{
          width: this.props.width,
          height: this.modulateHeight(),
          zIndex: this.props.z,
          transform: this.applyZTranslation()
          }}>
          <div className="Block3d__shading" style={{opacity: Math.abs(this.props.z/40)}}></div>
          <div className="Block3d__content">
            {this.props.children}
          </div>
          <div className="Block3d__face Block3d__face--top" style={{height: this.props.depth + 'rem'}}></div>
          <div className="Block3d__face Block3d__face--left" style={{width: this.props.depth + 'rem'}}></div>
          <div className="Block3d__face Block3d__face--right" style={{width: this.props.depth + 'rem'}}></div>
          <div className="Block3d__face Block3d__face--bottom" style={{height: this.props.depth + 'rem'}}></div>
        </div>

      </div>
    )
  }
});

export default Block3d;