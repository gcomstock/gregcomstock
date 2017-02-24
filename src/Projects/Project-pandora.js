import React from 'react';
import Block3d from '../Block3d/Block3d';


export const PandoraLayout = React.createClass({
  render() {
    return (
      <div className='ProjectView'>
        <Block3d cssClass='ProjectView__pic' width='100%' height='auto' depth='14' z='0'>
          <img width='100%' src='work/pandora/pandora-1.jpg' alt='portfolio'/>
        </Block3d>

        <Block3d cssClass='ProjectView__pic' width='100%' height='auto' depth='14' z='0'>
          <img width='100%' src='work/pandora/pandora-2.jpg' alt='portfolio'/>
        </Block3d>

        <Block3d cssClass='ProjectView__pic' width='100%' height='auto' depth='14' z='0'>
          <img width='100%' src='work/pandora/pandora-3.jpg' alt='portfolio'/>
        </Block3d>
      </div>
    );
  }
});


export const PandoraConsts = Object.freeze({
  ROUTE: '/project/pandora',
  TITLE: 'pandora.com',
  EXTERNAL_URL: 'https://pandora.com',
  SNIPPET: 'In preparation for on-demand listening, the new Pandora.com has been re-written from the ground up using the latest front-end technologies to address complex asynchronous use cases between audio playback and advertising.',
  THUMBNAIL_PATH: 'work/pandora/tn.jpg',
  TEXT: [
    'As a member of the web team, I develop production-ready, front-end code for several areas of pandora.com, with an emphasis on display ad integration, layout, and animation. We are actively working on bringing on-demand listening to the platform.'
  ],
  RESPONSIBILITIES: [
    'Collaborate closely with design and product on core UI decisions',
    'Development of react components for main application views',
    'Display ad integration',
    'UI animations'
  ],
  TECHNOLOGIES: [
    'React, Redux, ES6',
    'Webpack, npm, CSS/SASS',
    'Photoshop, Illustrator'
  ]
});
