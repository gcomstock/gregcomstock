import React, { Component } from 'react';
import BaseView from '../BaseView';
import Block3d from '../Block3d/Block3d';
import './WorkView.css';

class WorkView extends BaseView {

  render() {
    return (
      <div className='BaseView WorkView'>


        <div className='WorkView__project'>
          <div className='WorkView__project--leftCol'>
            <Block3d cssClass='WorkView__project__title' height='auto' depth='8' z='-4'>
              <h1>Pandora.com</h1>
            </Block3d>
            <Block3d cssClass='WorkView__project__desc' height='auto' depth='6' z='-6'>
              <p>
                As one member of a very talented team, we rewrote the Pandora.com web client from the ground up using the latest web technologies,
                like React and Redux, solving complex asynchronous behavior between audio playback, video, and display ads using Redux Saga.
              </p>
            </Block3d>
            <Block3d cssClass='WorkView__project__pic' width='14rem' height='10rem' depth='2' z='-4'>
              <img width='100%' height='100%' src='../placeholder.png'/>
            </Block3d>
          </div>

          <div className='WorkView__project--rightCol'>
            <Block3d cssClass='WorkView__project__pic' width='22rem' height='14rem' depth='12' z='0'>
              <img width='100%' height='100%' src='../placeholder.png'/>
            </Block3d>

            <Block3d cssClass='WorkView__project__learnMore' height='auto' depth='12' z='0'>
              <h1>learn more</h1>
            </Block3d>
          </div>
        </div>



      </div>
    );
  }
}

export default WorkView;