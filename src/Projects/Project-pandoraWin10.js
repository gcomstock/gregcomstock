import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Block3d from '../Block3d/Block3d';


export const PandoraWin10Layout = React.createClass({
  render() {
    return (
      <div className='ProjectView'>
        <Block3d cssClass='ProjectView__pic' width='100%' height='auto' depth='14' z='0'>
          <img width='100%' src='work/pandora-windows10/pandora-windows10-1.jpg' alt='portfolio'/>
        </Block3d>

        <Block3d cssClass='ProjectView__pic' width='100%' height='auto' depth='14' z='0'>
          <img width='100%' src='work/pandora-windows10/pandora-windows10-2.jpg' alt='portfolio'/>
        </Block3d>

        <Block3d cssClass='ProjectView__pic' width='100%' height='auto' depth='14' z='0'>
          <img width='100%' src='work/pandora-windows10/pandora-windows10-3.jpg' alt='portfolio'/>
        </Block3d>
      </div>
    );
  }
});


export const PandoraWin10Consts = Object.freeze({
  ROUTE: '/project/pandora-windows10',
  TITLE: 'pandora for windows 10',
  SNIPPET: 'Working with a small team, we leveraged the WinJS framework to create a touch-friendly desktop application running on javascript structured with backbone.js.',
  THUMBNAIL_PATH: 'work/pandora-windows10/tn.jpg',
  TEXT: [
    'Working with a small team, we leveraged the WinJS framework to create a touch-friendly desktop application running on javascript structured with backbone.js. I coordinated closely with product design to ensure touch events on the Microsoft Surface were responsive and the animation was smooth. (better screen shots coming soon)'
  ],
  RESPONSIBILITIES: [
    'Core UI decision-making with product design team',
    'Development of backbone views, including main screen',
    'UI animations'
  ],
  TECHNOLOGIES: [
    'Javascript, backbone, WinJS',
    'Moushtache templating',
    'CSS/SASS'
  ]
});
