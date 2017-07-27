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
    const htmlFontSize = parseInt(htmlStyles['font-size'], 10);

    return initialYRem * htmlFontSize + this.props.scrollY * multiplier + 'px';
  },


  renderWord() {
    if (this.props.isMobile) {
      return <h1>Design,<br/>UX,<br/>Web Dev,<br/>Fun!</h1>;
    }
    return <h1>Design, UX, Web Dev, Fun!</h1>;
  },

  render() {
    if (this.props.scrollY > 1200) {
      return null; //memory cleanup
    }
    return (
      <div className='SiteIntro'>

        {/* <div className='wrapper wrapper--centered' style={{transformStyle: 'preserve-3d', transform: 'rotate3d(1,0,0,' + this.props.scrollY/10 +'deg)'}}> */}

        <div className='wrapper wrapper--centered'>
          <Block3d
            cssClass='SiteIntro__word'
            depth='6'
            z='0'
            padding={[1.5,1.25,1.5,1.5]}
            noRight={true}
            noLeft={true}
            shadow={true}
            shadowDepth={-24}
            isMobile={this.props.isMobile}
          >
            {this.renderWord()}
          </Block3d>
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