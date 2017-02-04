import React from 'react';
import BaseView from '../BaseView';
import Block3d from '../Block3d/Block3d';
import routeUser from '../clickHandlers';

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
            <Block3d cssClass='WorkView__project__pic' width='14rem' height='auto' depth='2' z='-4'>
              <img width='100%' src='../work/pandora/pandora-hero-2.jpg'/>
            </Block3d>
          </div>

          <div className='WorkView__project--rightCol'>
            <Block3d cssClass='WorkView__project__pic' width='22rem' height='auto' depth='12' z='0'>
              <img width='606' height='370' src='../work/pandora/pandora-hero-1.jpg'/>
            </Block3d>

            <Block3d cssClass='WorkView__project__learnMore' clickHandler={routeUser} route='/pandora' height='auto' depth='1' z='-2' x='-0.75'>
              <h1>learn more ></h1>
            </Block3d>
          </div>
        </div>



        <div className='WorkView__project'>


          <div className='WorkView__project--leftCol'>
            <Block3d cssClass='WorkView__project__title' height='auto' depth='8' z='-4'>
              <h1>pandora display</h1>
              <h1>ad architecture</h1>
            </Block3d>
            <Block3d cssClass='WorkView__project__desc' height='auto' depth='6' z='-6'>
              <p>
                As one member of a very talented team, we rewrote the Pandora.com web client from the ground up using the latest web technologies,
                like React and Redux, solving complex asynchronous behavior between audio playback, video, and display ads using Redux Saga.
              </p>
            </Block3d>

          </div>


          <div className='WorkView__project--rightCol'>
            <Block3d cssClass='WorkView__project__pic' width='22rem' height='14rem' depth='12' z='0'>
              <img width='100%' height='100%' src='../placeholder.png'/>
            </Block3d>
          </div>


          <div className='WorkView__project__picStrip'>
            <Block3d cssClass='WorkView__project__pic' width='13.66rem' height='10rem' depth='12' z='-4'>
              <img width='100%' height='100%' src='../placeholder.png'/>
            </Block3d>

            <Block3d cssClass='WorkView__project__pic' width='13.66rem' height='10rem' depth='12' z='-4'>
              <img width='100%' height='100%' src='../placeholder.png'/>
            </Block3d>

            <Block3d cssClass='WorkView__project__pic' width='13.66rem' height='10rem' depth='12' z='-4'>
              <img width='100%' height='100%' src='../placeholder.png'/>
            </Block3d>
          </div>


        </div>
      </div>
    );
  }
}

export default WorkView;