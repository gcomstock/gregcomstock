import React from 'react';
import './Block3d.css';

//class Block3d extends Component {
const Block3d = React.createClass({
  propTypes: {
    width: React.PropTypes.string,
    height: React.PropTypes.string,
    depth: React.PropTypes.string.isRequired,
    z: React.PropTypes.string,
    cssClass: React.PropTypes.string,
    externalUrl: React.PropTypes.string,
    route: React.PropTypes.string,
    animationDelay: React.PropTypes.string
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

    if (z < -11) {
      classes += ' Block3d__content--12';
    } else if (z < -9) {
      classes += ' Block3d__content--10';
    } else if (z < -5) {
      classes += ' Block3d__content--8';
    } else if (z < -4) {
      classes += ' Block3d__content--6';
    } else if (z < -3) {
      classes += ' Block3d__content--4';
    } else if (z < -1) {
      classes += ' Block3d__content--2';
    }

    return classes;
  },

  handleClick() {
    if (this.props.externalUrl) {
      window.open(this.props.externalUrl);
    }
  },


  //TODO: get smart about excluding faces to increase performance

  render() {
    if ( Math.abs(parseInt(this.props.z, 10)) + Math.abs(parseInt(this.props.depth, 10)) !== 14) {
      console.warn(this.props.cssClass + ' has improper total depth');
    }

    let wrapperClasses = 'Block3d--wrapper'; // wrapper does not have translation and intercepts user input
    if (typeof this.props.cssClass !== 'undefined') {
      wrapperClasses += ' ' + this.props.cssClass;
    }

    let contentClasses = this.applyDefaultContentClasses();


    return (
      <div className={wrapperClasses} onClick={this.handleClick} style={{
        transform: this.applyXYTranslation()
        }}>
        <div className='Block3d' style={{
          width: this.props.width,
          height: this.modulateHeight(),
          zIndex: this.props.z,
          transform: this.applyZTranslation(),
          animationDelay: this.props.animationDelay
          }}>
          {/* shading is expensive - <div className='Block3d__shading' style={{opacity: Math.abs(this.props.z/40)}}></div> */}
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