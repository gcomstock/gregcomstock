import React from 'react';
import { hashHistory, browserHistory } from 'react-router';


const Block3d = React.createClass({
  propTypes: {
    width: React.PropTypes.string,
    height: React.PropTypes.string,
    depth: React.PropTypes.string.isRequired,
    z: React.PropTypes.string,
    cssClass: React.PropTypes.string,
    externalUrl: React.PropTypes.string,
    route: React.PropTypes.string,
    clickHandler: React.PropTypes.func,
    animationDelay: React.PropTypes.string,
    shadow: React.PropTypes.bool,
    shadowDepth: React.PropTypes.number,
    noLeft: React.PropTypes.bool,
    noRight: React.PropTypes.bool,
    noBottom: React.PropTypes.bool,
    isMobile: React.PropTypes.bool.isRequired,
    padding: React.PropTypes.array,
    fontSize: React.PropTypes.string,
    lineHeight: React.PropTypes.string
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

  applyTransform() {
    // no transforms for mobile - it is 2d
    if (this.props.isMobile) {
      return null;
    }

    // normal
    return this.props.z ? 'translateZ(' + this.props.z + 'rem)' : null;
  },

  applyPadding(padding) {
    if (!padding) {
      padding = [1.5];
    }

    let str = '';

    padding.forEach((val) => {
      str += val + 'rem ';
    });

    return str;
  },

  applyDefaultContentClasses() {
    return 'Block3d__content';

    // TODO: remove this later? I decided there should only be one default block class, and one override within
    // the theme manifest...these felt too in-between and added confusion

    // the class added here determines default background and border css properties for the element,
    // so lower elements appear darker
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

  applyDepth() {
    //TODO: maybe use this to create side walls for mobile instead of psuedo selectors
    return !this.props.isMobile ? this.props.depth : null;
  },

  renderShadow() {
    if (this.props.shadow && this.props.shadowDepth) {
      return <div className='Block3d--shadow' style={{transform: 'translateZ(' + this.props.shadowDepth + 'rem)'}}></div>;
    }
    else if (this.props.shadow) {
      // shadow is just intended for mobile because depth has not been defined
      return <div className='Block3d--shadow'></div>;
    }
  },

  handleClick() {
    if (this.props.route) {
      hashHistory.push(this.props.route);
    }

    if (this.props.externalUrl) {
      window.open(this.props.externalUrl);
    }

    if (this.props.clickHandler) {
      this.props.clickHandler();
    }
  },


  render() {
    //if ( Math.abs(parseInt(this.props.z, 10)) + Math.abs(parseInt(this.props.depth, 10)) !== 14) {
    //  console.warn(this.props.cssClass + ' has improper total depth');
    //}

    let wrapperClasses = 'Block3d--wrapper'; // wrapper element does not have translation and intercepts user input
    if (typeof this.props.cssClass !== 'undefined') {
      wrapperClasses += ' ' + this.props.cssClass;
    }

    let contentClasses = this.applyDefaultContentClasses(); // styles applied based off of element's depth

    //key changes when mobile view activates so we can re-measure scaled height when we re-mount
    return (
      <div className={wrapperClasses} onClick={this.handleClick} key={`isMobile--${this.props.isMobile}`} ref={(el) => { this.el = el; }} style={{
        transform: this.applyXYTranslation()
      }}>

        { this.renderShadow() }

        <div className='Block3d' style={{
          width: this.props.width,
          height: this.props.height,
          zIndex: this.props.z,
          transform: this.applyTransform(),
          animationDelay: this.props.animationDelay
        }}>
          <div className={contentClasses} style={{
            padding: this.applyPadding(this.props.padding),
            fontSize: this.props.fontSize + 'rem',
            lineHeight: this.props.lineHeight + 'rem'
          }}>
            { this.props.children }
          </div>
          { !this.props.isMobile && !this.props.noLeft && <div className='Block3d__face Block3d__face--left' style={{width: this.applyDepth() + 'rem'}}></div> }
          { !this.props.isMobile && !this.props.noRight && <div className='Block3d__face Block3d__face--right' style={{width: this.applyDepth() + 'rem'}}></div> }
          { !this.props.isMobile && !this.props.noBottom && <div className='Block3d__face Block3d__face--bottom' style={{height: this.applyDepth() + 'rem'}}></div> }

          { !this.props.isMobile && !this.props.noBottom && <div className='Block3d__face Block3d__face--bottom--extraBorderLeft' style={{height: this.applyDepth() + 'rem'}}></div> }
          { !this.props.isMobile && !this.props.noBottom && <div className='Block3d__face Block3d__face--bottom--extraBorderRight' style={{height: this.applyDepth() + 'rem'}}></div> }
          { !this.props.isMobile && !this.props.noBottom && <div className='Block3d__face Block3d__face--bottom--extraBorderBottom' style={{transform: 'translate3d(0, 0, -' + this.applyDepth() + 'rem'}}></div> }
        </div>
      </div>
    )
  }
});

export default Block3d;