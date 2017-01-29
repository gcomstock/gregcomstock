import React, { Component } from 'react';
import './Block3d.css';

class Block3d extends Component {

  determinePadding() {
    // 0.1 is the multiplier to increase padding as element recedes further
    //return (1 + Math.abs(this.props.z) * 0.1) + 'rem';

    return '1.5rem';
  }

  modulateHeight() {
    if (this.props.height === 'auto') {
      console.debug('modulate here')
    }

    return this.props.height;
  }

  render() {
    let Block3d__content = 'Block3d__content';

    //TODO
    //find default props for react

    //get smart about excluding faces to increase performance

    if (typeof this.props.cssClass !== 'undefined') {
      Block3d__content += ' ' + this.props.cssClass;
    }



    return (
      <div className='Block3d' style={{
        width: this.props.width,
        height: this.modulateHeight(),
        zIndex: this.props.z,
        transform: 'translateZ(' + this.props.z + 'rem)'
        //padding: this.determinePadding()
        }}>

        <div className="Block3d__shading" style={{opacity: Math.abs(this.props.z/40)}}></div>

        <div className={Block3d__content}>
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