import React from 'react';
import { hashHistory, browserHistory } from 'react-router';

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
    animationDelay: React.PropTypes.string,
    noTop: React.PropTypes.bool,
    noLeft: React.PropTypes.bool,
    noRight: React.PropTypes.bool,
    noBottom: React.PropTypes.bool
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

    if (z < -13) {
      classes += ' Block3d__content--14';
    } else if (z < -11) {
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
    if (this.props.route) {
      hashHistory.push(this.props.route);
    }

    if (this.props.externalUrl) {
      window.open(this.props.externalUrl);
    }
  },


  //TODO: get smart about excluding faces to increase performance

  render() {
    //if ( Math.abs(parseInt(this.props.z, 10)) + Math.abs(parseInt(this.props.depth, 10)) !== 14) {
    //  console.warn(this.props.cssClass + ' has improper total depth');
    //}

    let wrapperClasses = 'Block3d--wrapper'; // wrapper element does not have translation and intercepts user input
    if (typeof this.props.cssClass !== 'undefined') {
      wrapperClasses += ' ' + this.props.cssClass;
    }

    let contentClasses = this.applyDefaultContentClasses(); // styles applied based off of element's depth


    return (
      <div className={wrapperClasses} onClick={this.handleClick} style={{
        transform: this.applyXYTranslation()
        }}>
        <div className='Block3d' style={{
          width: this.props.width,
          height: this.props.height,
          zIndex: this.props.z,
          transform: this.applyZTranslation(),
          animationDelay: this.props.animationDelay
          }}>
          <div className={contentClasses}>
            {this.props.children}
          </div>
          { !this.props.noTop && <div className='Block3d__face Block3d__face--top' style={{height: this.props.depth + 'rem'}}></div> }
          { !this.props.noLeft && <div className='Block3d__face Block3d__face--left' style={{width: this.props.depth + 'rem'}}></div> }
          { !this.props.noRight && <div className='Block3d__face Block3d__face--right' style={{width: this.props.depth + 'rem'}}></div> }
          { !this.props.noBottom && <div className='Block3d__face Block3d__face--bottom' style={{height: this.props.depth + 'rem'}}></div> }
        </div>
      </div>
    )
  }
});

export default Block3d;