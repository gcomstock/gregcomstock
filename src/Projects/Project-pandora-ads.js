import React from 'react';
import Block3d from '../Block3d/Block3d';


export const PandoraAdsLayout = React.createClass({
  render() {
    return (
      <div className='ProjectView'>
        <Block3d cssClass='ProjectView__pic' width='100%' height='auto' depth='14' z='0'>
          <img width='100%' src='work/pandora-ads/pandora-ads-1.jpg' alt='portfolio'/>
        </Block3d>

        <Block3d cssClass='ProjectView__pic' width='100%' height='auto' depth='14' z='0'>
          <img width='100%' src='work/pandora-ads/pandora-ads-2.jpg' alt='portfolio'/>
        </Block3d>

        <Block3d cssClass='ProjectView__pic' width='100%' height='auto' depth='14' z='0'>
          <img width='100%' src='work/pandora-ads/pandora-ads-3.jpg' alt='portfolio'/>
        </Block3d>
      </div>
    );
  }
});


export const PandoraAdsConsts = Object.freeze({
  ROUTE: '/project/pandora-display-ads',
  TITLE: 'Pandora Display Ad Architecture',
  SNIPPET: 'I have been closely tied to the display ad workflow during my tenure at Pandora. On Pandora.com, we had a unique opportunity to do things that have never been done before with display advertising.',
  THUMBNAIL_PATH: 'work/pandora-ads/tn.jpg',
  TEXT: [
    'Display ads on Pandora.com now have the ability to re-color key areas of the UI, creating an immersive, branded experience without obstructing a user from interacting with the site. This is accomplished by an internal tool that I authored that allows designers to size, position, and add interactivity to their assets, without ever touching code.'
  ],
  RESPONSIBILITIES: [
    'Work closely with designers to build tools they need',
    'Hands on the display ad workflow from Photoshop templates to rendering code in the web client',
    'Ensure 3rd party tracking and view-ability of all display ads',
    'Establishment of guidelines and best practices'
  ],
  TECHNOLOGIES: [
    'React, Redux, ES6',
    'Webpack, npm, CSS/SASS',
    'Photoshop'
  ]
});
