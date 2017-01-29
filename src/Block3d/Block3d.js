import React, { Component } from 'react';
import './Block3d.css';

class Block3d extends Component {

  modulateHeight() {
    if (this.props.height === 'auto') {
      console.debug('modulate here')
    }

    return this.props.height;
  }

  applyTranslation() {
    let translation = '';

    if (this.props.z) {
      translation += 'translateZ(' + this.props.z + 'rem)';
    }
    if (this.props.x) {
      translation += ' translateX(' + this.props.x + 'rem)';
    }

    return translation
  }

  render() {
    let classes = 'Block3d';

    //TODO
    //find default props for react

    //get smart about excluding faces to increase performance

    if (typeof this.props.cssClass !== 'undefined') {
      classes += ' ' + this.props.cssClass;
    }


    return (
      <div className={classes} style={{
        width: this.props.width,
        height: this.modulateHeight(),
        zIndex: this.props.z,
        transform: this.applyTranslation()
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
    )
  }
}

export default Block3d;