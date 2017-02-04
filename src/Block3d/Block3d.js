import React from 'react';
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

  applyDefaultContentClasses() {
    // the class added here determines default background and border css properties for the element, so lower elements appear darker
    const z = parseInt(this.props.z, 10);
    let classes = 'Block3d__content';

    if (z < -12) {
      classes += ' Block3d__content--12';
    } else if (z < -10) {
      classes += ' Block3d__content--10';
    } else if (z < -8) {
      classes += ' Block3d__content--8';
    } else if (z < -6) {
      classes += ' Block3d__content--6';
    } else if (z < -4) {
      classes += ' Block3d__content--4';
    } else if (z < -2) {
      classes += ' Block3d__content--2';
    }

    return classes;
  },


  //TODO: get smart about excluding faces to increase performance

  render() {
    let wrapperClasses = 'Block3d--wrapper'; // wrapper does not have translation and intercepts user input
    if (typeof this.props.cssClass !== 'undefined') {
      wrapperClasses += ' ' + this.props.cssClass;
    }

    let contentClasses = this.applyDefaultContentClasses();


    return (
      <div className={wrapperClasses} onClick={this.props.clickHandler} style={{transform: this.applyXYTranslation()}}>
        <div className='Block3d' style={{
          width: this.props.width,
          height: this.modulateHeight(),
          zIndex: this.props.z,
          transform: this.applyZTranslation()
          }}>
          <div className='Block3d__shading' style={{opacity: Math.abs(this.props.z/40)}}></div>
          <div className={contentClasses}>
            {this.props.children}
          </div>
          <div className='Block3d__face Block3d__face--top' style={{height: this.props.depth + 'rem'}}></div>
          <div className='Block3d__face Block3d__face--left' style={{width: this.props.depth + 'rem'}}></div>
          <div className='Block3d__face Block3d__face--right' style={{width: this.props.depth + 'rem'}}></div>
          <div className='Block3d__face Block3d__face--bottom' style={{height: this.props.depth + 'rem'}}></div>
        </div>
      </div>
    )
  }
});

export default Block3d;