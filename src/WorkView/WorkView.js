import React, { Component } from 'react';
import BaseView from '../BaseView';
import Block3d from '../Block3d/Block3d';
import './WorkView.css';

class WorkView extends BaseView {

  render() {
    return (
      <div className='BaseView WorkView'>




        <div className='WorkView__text'>
          <Block3d cssClass='WorkView__text__title THEME_CLASS_HERE' height='auto' depth='8' z='-4'>
            <h1>Pandora.com</h1>
          </Block3d>
          <Block3d height='auto' depth='6' z='-6'>
            <div className='WorkView__text__desc'>
              <p>
                As one member of a very talented team, we rewrote the Pandora.com web client using the latest web technologies,
                like React and Redux, and solving complex asynchronous behavior between audio playback and display ad impressions using Redux Saga.
              </p>
            </div>
          </Block3d>

          <Block3d width='14rem' height='10rem' depth='2' z='-4'>
            <div className='WorkView__pic'></div>
          </Block3d>
        </div>

        <Block3d width='22rem' height='14rem' depth='12' z='0'>
          <div className='WorkView__pic'></div>
        </Block3d>




        <Block3d width='22rem' height='15rem' depth='16' z='0'>
          <div className='WorkView__pic'></div>
        </Block3d>

        <div className='WorkView__text'>
          <Block3d cssClass='THEME_CLASS_HERE' width='18rem' height='auto' depth='12' z='-4'>
            <div className='WorkView__text__title'>
              <h1>Christy Natsumi</h1>
            </div>
          </Block3d>
          <Block3d width='18rem' height='auto' depth='10' z='-6'>
            <div className='WorkView__text__desc'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius rutrum placerat. Pellentesque sed
                aliquet ipsum. Praesent pellentesque posuere libero, eu egestas metus tempus at. Morbi bibendum eu risus
                quis sagittis. Nullam tincidunt lacus vel felis lobortis consectetur. Ut in nibh mauris. Aenean at velit
                sit amet metus lacinia imperdiet a eget arcu. Vestibulum auctor, dolor id ultricies sollicitudin, sapien
                odio faucibus orci, placerat pretium est lorem id quam.
              </p>
            </div>
          </Block3d>
        </div>

      </div>
    );
  }
}

export default WorkView;