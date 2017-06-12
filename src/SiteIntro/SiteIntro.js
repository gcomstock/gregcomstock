import React, { PropTypes } from 'react';
import Block3d from '../Block3d/Block3d';


export const SiteIntro = React.createClass({
  propTypes: {
    isMobile: PropTypes.bool.isRequired
  },

  populateTitle() {
    const title = ['G','R','E','G','C','O','M','S','T','O','C','K'];
    let blocks = [];

    title.forEach( (letter, i) => {
      //const min = 100;
      //const max = 200 * i;
      //const rnd = Math.floor(Math.random() * (max - min)) + min;
      const rnd = i * 150;

      if (i === 4) {
        blocks.push(<br key={i+'br'}/>);
      }
      blocks.push(
        <Block3d
          key={i}
          cssClass='SiteIntro__title__letter'
          depth='1.5'
          animationDelay={rnd + 'ms'}
          noTop={true}
          noLeft={true}
          shadow={true}
          shadowDepth={-6}
          isMobile={this.props.isMobile}
          padding={[1,0,0.5,0.5]}
        >
          {letter}
        </Block3d>
      );
    });
    return blocks;
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

  render() {
    return (
      <div className='SiteIntro'>

        <div className='SiteIntro__title'>
          { this.populateTitle() }
          <div className='SiteIntro__title__subtitle'>
            DESIGN + DEVELOPMENT
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