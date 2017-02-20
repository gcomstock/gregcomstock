import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Block3d from '../Block3d/Block3d';


export const ChristynNatsumiLayout = React.createClass({
  render() {
    return (
      <div className='ProjectView'>
        <Block3d cssClass='ProjectView__pic' width='auto' height='auto' depth='14' z='0'>
          <img width='100%' src='work/christynatsumi/christynatsumi-1.jpg' alt='portfolio'/>
        </Block3d>

        <Block3d cssClass='ProjectView__pic' width='auto' height='auto' depth='14' z='0'>
          <img width='100%' src='work/christynatsumi/christynatsumi-2.jpg' alt='portfolio'/>
        </Block3d>

        <Block3d cssClass='ProjectView__pic' width='auto' height='auto' depth='14' z='0'>
          <img width='100%' src='work/christynatsumi/christynatsumi-3.jpg' alt='portfolio'/>
        </Block3d>
      </div>
    );
  }
});


export const ChristyNatsumiConsts = Object.freeze({
  ROUTE: '/project/christynatsumi',
  TITLE: 'christy natsumi',
  SNIPPET: 'A San Francisco based independent design studio that creates modern jewelry essentials. I design, build, and maintain all of the site\'s front-end, adding updates regularly in my spare time. I also shoot most of the photography.',
  THUMBNAIL_PATH: 'work/christynatsumi/tn.jpg',
  TEXT: [
    'asd'
  ],
  RESPONSIBILITIES: [
    'Sole designer and front-end developer',
    'Squarespace API integration and templating',
    'All product photography'
  ],
  TECHNOLOGIES: [
    'Javascript, CSS/LESS',
    'Photoshop, Illustrator',
    'Sony A7 Mirrorless DSLR'
  ]
});
