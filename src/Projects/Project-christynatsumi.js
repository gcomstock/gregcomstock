import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Block3d from '../Block3d/Block3d';


export const ChristynNatsumiLayout = React.createClass({
  render() {
    return (
      <div className='ProjectView'>
        <Block3d cssClass='ProjectView__pic' depth='14' z='0'>
          <div className='Block3d__content__imgFrame' style={{
            width: '33rem',
            height: '27.5rem',
            backgroundImage: 'url(work/christynatsumi/christynatsumi-1.jpg)'
          }}></div>
        </Block3d>

        <br/>

        <Block3d cssClass='ProjectView__pic ProjectView__pic--mobile' depth='3' z='0'>
          <div className='Block3d__content__imgFrame' style={{
            width: '12.75rem',
            height: '21.5rem',
            maxWidth: '336px',
            maxHeight: '568px',
            backgroundImage: 'url(work/christynatsumi/christynatsumi-mobile-1.jpg)'
          }}></div>
        </Block3d>

        <Block3d cssClass='ProjectView__pic ProjectView__pic--mobile ProjectView__pic--margin' depth='3' z='0'>
          <div className='Block3d__content__imgFrame' style={{
            width: '12.75rem',
            height: '21.5rem',
            maxWidth: '336px',
            maxHeight: '568px',
            backgroundImage: 'url(work/christynatsumi/christynatsumi-mobile-2.jpg)'
          }}></div>
        </Block3d>

        <br/>

        <Block3d cssClass='ProjectView__pic' depth='14' z='0'>
          <div className='Block3d__content__imgFrame' style={{
            width: '33rem',
            height: '27.5rem',
            backgroundImage: 'url(work/christynatsumi/christynatsumi-2.jpg)'
          }}></div>
        </Block3d>

        <br/>

        <Block3d cssClass='ProjectView__pic ProjectView__pic--mobile' depth='3' z='0'>
          <div className='Block3d__content__imgFrame' style={{
            width: '12.75rem',
            height: '21.5rem',
            maxWidth: '336px',
            maxHeight: '568px',
            backgroundImage: 'url(work/christynatsumi/christynatsumi-mobile-3.jpg)'
          }}></div>
        </Block3d>

        <Block3d cssClass='ProjectView__pic ProjectView__pic--mobile ProjectView__pic--margin' depth='3' z='0'>
          <div className='Block3d__content__imgFrame' style={{
            width: '12.75rem',
            height: '21.5rem',
            maxWidth: '336px',
            maxHeight: '568px',
            backgroundImage: 'url(work/christynatsumi/christynatsumi-mobile-4.jpg)'
          }}></div>
        </Block3d>

        <br/>

        <Block3d cssClass='ProjectView__pic' depth='14' z='0'>
          <div className='Block3d__content__imgFrame' style={{
            width: '33rem',
            height: '27.5rem',
            backgroundImage: 'url(work/christynatsumi/christynatsumi-3.jpg)'
          }}></div>
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
    'I collaborate closely with founder and jewelry designer Christy Natsumi to help showcase her work in the most effective way. Because it\'s a small business, I touch every part of the process, from sketching wireframes to implementing the final layout and photos.'
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
