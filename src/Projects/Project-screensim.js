import React from 'react';
import Block3d from '../Block3d/Block3d';


export const ScreensimLayout = React.createClass({
  render() {
    return (
      <div className='ProjectView'>
        <Block3d cssClass='ProjectView__pic' width='100%' height='auto' depth='14' z='0'>
          <img width='100%' src='work/screensim/screensim-1.jpg' alt='portfolio'/>
        </Block3d>

        <Block3d cssClass='ProjectView__pic' width='100%' height='auto' depth='14' z='0'>
          <img width='100%' src='work/screensim/screensim-2.jpg' alt='portfolio'/>
        </Block3d>

        <Block3d cssClass='ProjectView__pic' width='100%' height='auto' depth='14' z='0'>
          <img width='100%' src='work/screensim/screensim-3.jpg' alt='portfolio'/>
        </Block3d>
      </div>
    );
  }
});


export const ScreensimConsts = Object.freeze({
  ROUTE: '/project/screensim',
  TITLE: 'Screen Sim',
  EXTERNAL_URL: '//screensim.com',
  SNIPPET: 'Although there are many ways a developer can measure and preview screen sizes, I wanted to create a user-friendly site with shareable links to demonstrate responsive site design for everyone.',
  THUMBNAIL_PATH: 'work/screensim/tn.jpg',
  TEXT: [
    'Although there are many ways a developer can measure and preview screen sizes, I wanted to create a user-friendly site with shareable links to demonstrate responsive site design for everyone. Screensim was a personal project that could use some updating, and perhaps a react rewrite!'
  ],
  RESPONSIBILITIES: [
    'Sole designer and developer'
  ],
  TECHNOLOGIES: [
    'Javascript, jQuery',
    'CSS',
    'iframe magic',
  ]
});
