import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Block3d from '../../Block3d/Block3d';


const PandoraView = React.createClass({


  render() {
    return (
      <div className='ProjectView'>
        <Block3d cssClass='ProjectView__pic' width='100%' height='auto' depth='14' z='0'>
          <img width='100%' src='work/pandora/pandora-hero-1.jpg' alt='portfolio'/>
        </Block3d>

        <Block3d cssClass='ProjectView__pic' width='100%' height='auto' depth='14' z='0'>
          <img width='100%' src='work/pandora/pandora-hero-2.jpg' alt='portfolio'/>
        </Block3d>

        <Block3d cssClass='ProjectView__pic' width='100%' height='auto' depth='14' z='0'>
          <img width='100%' src='work/pandora/pandora-hero-2.jpg' alt='portfolio'/>
        </Block3d>
      </div>
    );
  }
});

export default PandoraView;


export const PandoraConsts = Object.freeze({
  TITLE: 'pandora.com',
  TEXT: [
    'As a member of the web applications team, I am actively working on the new pandora.com. I collaborate closely with the design and product teams on core UI decisions, and help ensure that we bring production-quality code to millions of monthly listeners that handles complex asynchronous use cases between audio playback and advertising. Full release coming soon!'
  ],
  RESPONSIBILITIES: [
    'Collaborate with design and product on key UI decisions',
    'Development of react components for main application views',
    'Display ad integration',
    'UI animations'
  ],
  TECHNOLOGIES: [
    'React, Redux, ES6',
    'Webpack, npm, SASS',
    'Photoshop, Illustrator'
  ]
});
