import React, { PropTypes } from 'react';
import Block3d from '../Block3d/Block3d';


export const SiteIntro = React.createClass({
  propTypes: {
    isMobile: PropTypes.bool.isRequired,
    scrollY: PropTypes.number.isRequired
  },

  onViewWorkClick() {
    const siteIntroEl = document.querySelector('.SiteIntro');
    const scrollingEl = document.querySelector('.App__body__scrollable');

    function scrollTo(element, to, duration) {
      var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;

      var animateScroll = function(){
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if(currentTime < duration) {
          setTimeout(animateScroll, increment);
        }
      };
      animateScroll();
    }

    Math.easeInOutQuad = function (t, b, c, d) {
      t /= d/2;
      if (t < 1) return c/2*t*t + b;
      t--;
      return -c/2 * (t*(t-2) - 1) + b;
    };

    scrollTo(scrollingEl, siteIntroEl.offsetHeight, 500);
  },

  getDeviceOffset(initialYRem, multiplier) {
    const htmlStyles = window.getComputedStyle(document.documentElement, null);
    const htmlFontSize = parseInt(htmlStyles['font-size']);

    console.log(htmlFontSize);

    return initialYRem * htmlFontSize + this.props.scrollY * multiplier + 'px';
  },

  render() {
    if (this.props.scrollY > 600) {
      return null;
    }
    return (
      <div className='SiteIntro'>

        <div className='SiteIntro__background'></div>
        <div className='SiteIntro__device SiteIntro__device--monitor' style={{top: this.getDeviceOffset(0, 0.3)}}>
          <div className='SiteIntro__device__screen'>
          </div>
        </div>
        <div className='SiteIntro__device SiteIntro__device--watch' style={{top: this.getDeviceOffset(14.5, 0.05)}}>
          <div className='SiteIntro__device__screen'>
          </div>
        </div>
        <div className='SiteIntro__device SiteIntro__device--ipad' style={{top: this.getDeviceOffset(5.5, 0.25)}}>
          <div className='SiteIntro__device__screen'>
          </div>
        </div>
        <div className='SiteIntro__device SiteIntro__device--iphone'
             style={{top: this.getDeviceOffset(11.5, -0.25)}}>
          <div className='SiteIntro__device__screen'>
          </div>
        </div>
        <div className='SiteIntro__device SiteIntro__device--macbook' style={{top: this.getDeviceOffset(7.5, 0.1)}}>
          <div className='SiteIntro__device__screen'>
          </div>
        </div>


        <Block3d
          cssClass='SiteIntro__viewWork button'
          depth='1'
          z='0'
          shadow={true}
          shadowDepth={-16}
          noRight={true}
          noLeft={true}
          clickHandler={this.onViewWorkClick}
          isMobile={this.props.isMobile}
        >
          <div className='button__text button__text--arrowBottom'>View Work</div>
        </Block3d>

      </div>
    )
  }
});