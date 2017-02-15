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
  TITLE: 'pandora.com'
});
