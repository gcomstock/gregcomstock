import React, { Component } from 'react';
import BaseView from '../BaseView';
import Block3d from '../Block3d/Block3d';
import './WorkView.css';

class WorkView extends BaseView {

  render() {
    return (
      <div className='BaseView WorkView'>


        <Block3d width='22rem' height='15rem' depth='16' z='0'>
          <div className='WorkView__pic'></div>
        </Block3d>

        <div className='WorkView__text'>
          <Block3d cssClass='WorkView__text__title' width='18rem' height='auto' depth='12' z='-4'>
            <h1>Project title</h1>
          </Block3d>
          <Block3d cssClass='WorkView__text__desc' width='18rem' height='auto' depth='10' z='-6'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius rutrum placerat. Pellentesque sed
              aliquet ipsum. Praesent pellentesque posuere libero, eu egestas metus tempus at. Morbi bibendum eu risus
              quis sagittis. Nullam tincidunt lacus vel felis lobortis consectetur. Ut in nibh mauris. Aenean at velit
              sit amet metus lacinia imperdiet a eget arcu. Vestibulum auctor, dolor id ultricies sollicitudin, sapien
              odio faucibus orci, placerat pretium est lorem id quam.
            </p>
          </Block3d>
        </div>

      </div>
    );
  }
}

export default WorkView;