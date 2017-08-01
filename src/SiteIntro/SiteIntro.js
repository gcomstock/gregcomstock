import React, { PropTypes } from 'react';
import Block3d from '../Block3d/Block3d';


export const SiteIntro = React.createClass({
  propTypes: {
    isMobile: PropTypes.bool.isRequired,
    scrollY: PropTypes.number.isRequired,
    theme: PropTypes.string.isRequired
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
    const htmlFontSize = parseInt(htmlStyles['font-size'], 10);

    return initialYRem * htmlFontSize + this.props.scrollY * multiplier + 'px';
  },


  renderTitle(className) {
    if (this.props.isMobile) {
      return <h1 className={className}>Design,<br/>UX,<br/>Web Dev,<br/>Fun!</h1>;
    }
    return <h1 className={className}>Design, UX,<br/>Web Dev, Fun!</h1>;
  },

  renderThemedIntro() {
    return (
      <div className='SiteIntro'>

        <Block3d
          cssClass='SiteIntro__titleBlock'
          depth='3'
          z='0'
          padding={[2,2.5,2,2.5]}
          shadow={true}
          shadowDepth={-16}
          noRight={true}
          noLeft={true}
          isMobile={this.props.isMobile}
        >
          {this.renderTitle('SiteIntro__header')}
        </Block3d>

        <br/>

        {/* <div className='SiteIntro__bg'/> */}

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
  },

  render() {
    if (this.props.scrollY > 1200 && !this.props.isMobile) {
      return null; // once scrolled off screen, dont render it
    }
    return this.renderThemedIntro();
  }
});