import React from 'react';
import BaseView from '../BaseView';
import Block3d from '../Block3d/Block3d';
import routeUser from '../clickHandlers';

import './WorkView.css';

class WorkView extends BaseView {

  randomizeLetterAnimation() {
    const title = ['G','R','E','G','C','O','M','S','T','O','C','K'];

    let blocks = [];
    title.forEach( (letter, i) => {
      const min = 100;
      const max = 200 * i;
      const rnd = Math.floor(Math.random() * (max - min)) + min;

      if (i == 4) {
        blocks.push(<br/>);
      }
      blocks.push(<Block3d cssClass='WorkView__title__letter' width='3.5rem' depth='2.75' animationDelay={rnd + 'ms'}>{letter}</Block3d>);
    });
    return blocks;
  }

  render() {
    return (
      <div className='BaseView WorkView'>

        <div className='WorkView__title'>
          {this.randomizeLetterAnimation()}
        </div>

        <div className='WorkView__subtitle'>
          DESIGN + DEVELOPMENT
        </div>

        <div className='WorkView__project'>
          <div className='WorkView__project--leftCol'>
            <Block3d cssClass='WorkView__project__title' height='auto' depth='10' z='-4'>
              <h1>Pandora.com</h1>
            </Block3d>
            <Block3d cssClass='WorkView__project__desc' height='auto' depth='8' z='-6'>
              <p>
                As one member of a very talented team, we rewrote the Pandora.com web client from the ground up using the latest web technologies,
                like React and Redux, solving complex asynchronous behavior between audio playback, video, and display ads using Redux Saga.
              </p>
            </Block3d>
            <Block3d cssClass='WorkView__project__pic' width='16rem' height='auto' depth='10' z='-4'>
              <img width='416' height='254' src='work/pandora/pandora-hero-2.jpg'/>
            </Block3d>
          </div>

          <div className='WorkView__project--rightCol'>
            <Block3d cssClass='WorkView__project__pic' width='22rem' height='auto' depth='14' z='0'>
              <img width='606' height='370' src='work/pandora/pandora-hero-1.jpg'/>
            </Block3d>


            <div className='WorkView__project__note'>
              <Block3d cssClass='WorkView__project__note__title' width='10rem' height='auto' depth='6' z='-8'>
                <h2>key responsibilities</h2>
              </Block3d>
              <Block3d cssClass='WorkView__project__note__text' width='10rem' height='auto' depth='5' z='-9'>
                <ul>
                  <li>Core UI decision-making with product design team</li>
                  <li>React component development for main application views</li>
                  <li>UI animations</li>
                  <li>Display ad integrations</li>
                </ul>
              </Block3d>
            </div>


            <div className='WorkView__project__note'>
              <Block3d cssClass='WorkView__project__note__title' width='10rem' height='auto' depth='6' z='-8'>
                <h2>technologies used</h2>
              </Block3d>
              <Block3d cssClass='WorkView__project__note__text' width='10rem' height='auto' depth='5' z='-9'>
                <ul>
                  <li>React, Redux, ES6/2015</li>
                  <li>NPM, Webpack, SASS</li>
                  <li>Mocha, Enzyme</li>
                  <li>Photoshop, Illustrator</li>
                </ul>
              </Block3d>
            </div>



          </div>
        </div>







        <div className='WorkView__project'>
          <div className='WorkView__project--leftCol'>
            <Block3d cssClass='WorkView__project__title' height='auto' depth='10' z='-4'>
              <h1>christy natsumi</h1>
            </Block3d>
            <Block3d cssClass='WorkView__project__desc' height='auto' depth='8' z='-6'>
              <p>
                Christy Natsumi is a San Francisco CA based independent design studio that creates modern jewelry essentials.
                It is my wife's small business and I am always happy to lend my spare time to contributing to it. Though it may
                not be a large project, it is a welcome opportunity to have full creative freedom over the website and photography.
              </p>
            </Block3d>

          </div>


          <div className='WorkView__project--rightCol'>
            <Block3d cssClass='WorkView__project__pic' width='22rem' height='16rem' depth='14' z='0'>
              <img width='100%' height='100%' src='work/christynatsumi/cn-1.jpg'/>
            </Block3d>


            <div className='WorkView__project__note'>
              <Block3d cssClass='WorkView__project__note__title' width='10rem' height='auto' depth='6' z='-8'>
                <h2>key responsibilities</h2>
              </Block3d>
              <Block3d cssClass='WorkView__project__note__text' width='10rem' height='auto' depth='5' z='-9'>
                <ul>
                  <li>Sole designer and product photographer</li>
                  <li>Sole front-end developer</li>
                  <li>API integration with Squarespace backend</li>
                </ul>
              </Block3d>
            </div>


            <div className='WorkView__project__note'>
              <Block3d cssClass='WorkView__project__note__title' width='10rem' height='auto' depth='6' z='-8'>
                <h2>technologies used</h2>
              </Block3d>
              <Block3d cssClass='WorkView__project__note__text' width='10rem' height='auto' depth='5' z='-9'>
                <ul>
                  <li>Javascript, CSS, LESS</li>
                  <li>Photoshop, Illustrator</li>
                  <li>Squarespace templating engine, API, and dev environment</li>
                </ul>
              </Block3d>
            </div>


          </div>


        </div>
      </div>
    );
  }
}

export default WorkView;