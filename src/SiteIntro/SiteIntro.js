import React, { PropTypes } from 'react';
import Block3d from '../Block3d/Block3d';


export const SiteIntro = React.createClass({
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
      blocks.push(<Block3d key={i} cssClass='SiteIntro__title__letter' depth='1.5' animationDelay={rnd + 'ms'}  noTop={true} noLeft={true}>{letter}</Block3d>);
    });
    return blocks;
  },

  render() {
    return (
      <div className='SiteIntro'>
        <div className='SiteIntro__title'>
          { this.populateTitle() }
          <div className='SiteIntro__title__subtitle'>
            <h1>DESIGN + DEVELOPMENT</h1>
          </div>
        </div>
        <Block3d cssClass='SiteIntro__viewWork' width='auto' height='auto' depth='1' z='0' noRight={true} noLeft={true}>
          <h2>view work</h2>
        </Block3d>
      </div>
    )
  }
});