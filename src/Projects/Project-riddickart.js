import React from 'react';
import Block3d from '../Block3d/Block3d';


export const RiddickartLayout = React.createClass({
  render() {
    return (
      <div className='ProjectView'>
        <Block3d cssClass='ProjectView__pic' depth='14' z='0'>
          <div className='Block3d__content__imgFrame' style={{
            width: '33rem',
            height: '27.5rem',
            backgroundImage: 'url(work/riddickart/riddickart-1.jpg)'
          }}></div>
        </Block3d>

        <br/>

        <Block3d cssClass='ProjectView__pic ProjectView__pic--mobile' depth='3' z='0'>
          <div className='Block3d__content__imgFrame' style={{
            width: '12.75rem',
            height: '21.5rem',
            maxWidth: '336px',
            maxHeight: '568px',
            backgroundImage: 'url(work/riddickart/riddickart-mobile-1.jpg)'
          }}></div>
        </Block3d>

        <Block3d cssClass='ProjectView__pic ProjectView__pic--mobile' depth='3' z='0'>
          <div className='Block3d__content__imgFrame' style={{
            width: '12.75rem',
            height: '21.5rem',
            maxWidth: '336px',
            maxHeight: '568px',
            backgroundImage: 'url(work/riddickart/riddickart-mobile-2.jpg)'
          }}></div>
        </Block3d>

        <br/>

        <Block3d cssClass='ProjectView__pic' depth='14' z='0'>
          <div className='Block3d__content__imgFrame' style={{
            width: '33rem',
            height: '27.5rem',
            backgroundImage: 'url(work/riddickart/riddickart-2.jpg)'
          }}></div>
        </Block3d>
      </div>
    );
  }
});


export const RiddickartConsts = Object.freeze({
  ROUTE: '/project/riddickart',
  TITLE: 'Riddickart',
  EXTERNAL_URL: '//riddickart.com',
  SNIPPET: 'Riddick has been creating grotesquely gorgeous illustrations since 1991, and has garnered a devoted following within the death metal community. I have been maintaining his site since 2009, occasionally adding new features and visual refreshes.',
  THUMBNAIL_PATH: 'work/riddickart/tn.jpg',
  TEXT: [
    'Death metal thrives in the underground, with low-quality xeroxed posters stapled to grungy note boards. My aim was to create a site that best tapped into the culture of the scene, while placing Mark\'s work front and center.'
  ],
  RESPONSIBILITIES: [
    'Sole front-end developer',
    'Designed with assets provided by artist',
    'Custom, responsive Wordpress theme hosted and updated by artist'
  ],
  TECHNOLOGIES: [
    'Javascript, CSS/SASS',
    'Wordpress, PHP',
    'Photoshop, Illustrator'
  ]
});
