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
      //const min = 100;
      //const max = 200 * i;
      //const rnd = Math.floor(Math.random() * (max - min)) + min;
      const rnd = i * 150;

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
                As a member of the web applications team, I am actively working on the new pandora.com. I collaborate
                closely with the design and product teams on core UI decisions, and help ensure that we bring production-quality
                code to millions of monthly listeners that handles complex asynchronous use cases between audio playback
                and advertising. Full release coming soon. <b>To opt in, go to your Pandora settings page.</b>
              </p>
            </Block3d>
            <Block3d cssClass='WorkView__project__pic' width='22rem' height='auto' depth='6' z='-8'>
              <img width='100%' src='work/pandora/pandora-hero-2.jpg'/>
            </Block3d>
          </div>

          <div className='WorkView__project--rightCol'>
            <Block3d cssClass='WorkView__project__pic' width='22rem' height='auto' depth='14' z='0'>
              <img width='100%' src='work/pandora/pandora-hero-1.jpg'/>
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


            <Block3d cssClass='WorkView__project__launch' externalUrl='//pandora.com' width='auto' height='auto' depth='0.75' z='0'>
              <h2>launch project ></h2>
            </Block3d>


          </div>
        </div>


{/*
        <div className='WorkView__project'>
          <div className='WorkView__project--leftCol'>
            <Block3d cssClass='WorkView__project__title' height='auto' depth='10' z='-4'>
              <h1>pandora display</h1>
              <h1>ad architecture</h1>
            </Block3d>
            <Block3d cssClass='WorkView__project__desc' height='auto' depth='8' z='-6'>
              <p>
                As one member of a very talented team, we rewrote the Pandora.com web client from the ground up using the latest web technologies,
                like React and Redux, solving complex asynchronous behavior between audio playback, video, and display ads using Redux Saga.
              </p>
            </Block3d>
          </div>


          <div className='WorkView__project--rightCol'>
            <Block3d cssClass='WorkView__project__pic' width='22rem' height='14rem' depth='14' z='0'>
              <img width='100%' height='100%' src='placeholder.png'/>
            </Block3d>
          </div>


          <div className='WorkView__project__picStrip'>
            <Block3d cssClass='WorkView__project__pic' width='13.66rem' height='10rem' depth='12' z='-2'>
              <img width='100%' height='100%' src='placeholder.png'/>
            </Block3d>

            <Block3d cssClass='WorkView__project__pic' width='13.66rem' height='10rem' depth='12' z='-2'>
              <img width='100%' height='100%' src='placeholder.png'/>
            </Block3d>

            <Block3d cssClass='WorkView__project__pic' width='13.66rem' height='10rem' depth='12' z='-2'>
              <img width='100%' height='100%' src='placeholder.png'/>
            </Block3d>
          </div>
        </div>
*/}




        <div className='WorkView__project'>
          <div className='WorkView__project--leftCol'>
            <Block3d cssClass='WorkView__project__title' height='auto' depth='10' z='-4'>
              <h1>pandora for windows 10</h1>
            </Block3d>
            <Block3d cssClass='WorkView__project__desc' height='auto' depth='8' z='-6'>
              <p>
                Working with a small team, we leveraged front-end development with the WinJS framework to create a
                touch-friendly desktop application available for all Windows 10 users. Available for download in the Microsoft store
              </p>
            </Block3d>
            <Block3d cssClass='WorkView__project__pic' width='22rem' height='auto' depth='7' z='-4'>
              <img width='100%' height='100%' src='work/pandora-windows10/win10-2.jpg'/>
            </Block3d>


            <div className='WorkView__project__note'>
              <Block3d cssClass='WorkView__project__note__title' width='10rem' height='auto' depth='6' z='-8'>
                <h2>technologies used</h2>
              </Block3d>
              <Block3d cssClass='WorkView__project__note__text' width='10rem' height='auto' depth='5' z='-9'>
                <ul>
                  <li>Javascript, backbone.js, WinJS</li>
                  <li>Moustache templating</li>
                  <li>CSS, SASS</li>
                </ul>
              </Block3d>
            </div>


            <div className='WorkView__project__note'>
              <Block3d cssClass='WorkView__project__note__title' width='10rem' height='auto' depth='6' z='-8'>
                <h2>key responsibilities</h2>
              </Block3d>
              <Block3d cssClass='WorkView__project__note__text' width='10rem' height='auto' depth='5' z='-9'>
                <ul>
                  <li>Core UI decision-making with the product design team</li>
                  <li>UI animations</li>
                  <li>Main application view development using backbone.js</li>
                </ul>
              </Block3d>
            </div>
          </div>


          <div className='WorkView__project--rightCol'>
            <Block3d cssClass='WorkView__project__pic' width='22rem' height='auto' depth='14' z='0'>
              <img width='100%' height='100%' src='work/pandora-windows10/win10-1.jpg'/>
            </Block3d>

            <Block3d cssClass='WorkView__project__pic' width='18rem' height='auto' depth='12' z='-2'>
              <img width='100%' height='100%' src='work/pandora-windows10/win10-3.jpg'/>
            </Block3d>

            <Block3d cssClass='WorkView__project__launch' externalUrl='//www.microsoft.com/en-us/store/p/pandora/9wzdncrfj46v' width='auto' height='auto' depth='1' z='0'>
              <h2>launch project ></h2>
            </Block3d>
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
                It is my wife's small business and I am always happy to lend my spare time contributing to it. Though
                not a large project, it is a welcome opportunity to have full creative freedom over the website and photography.
              </p>
            </Block3d>
            <Block3d cssClass='WorkView__project__pic' width='22rem' height='auto' depth='6' z='-8'>
              <img width='100%' height='100%' src='work/christynatsumi/cn-2.jpg'/>
            </Block3d>
          </div>


          <div className='WorkView__project--rightCol'>
            <Block3d cssClass='WorkView__project__pic' width='22rem' height='auto' depth='14' z='0'>
              <img width='100%' height='100%' src='work/christynatsumi/cn-1.jpg'/>
            </Block3d>


            <div className='WorkView__project__note'>
              <Block3d cssClass='WorkView__project__note__title' width='10rem' height='auto' depth='6' z='-8'>
                <h2>key responsibilities</h2>
              </Block3d>
              <Block3d cssClass='WorkView__project__note__text' width='10rem' height='auto' depth='5' z='-9'>
                <ul>
                  <li>Sole designer and photographer</li>
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

            <Block3d cssClass='WorkView__project__launch' externalUrl='//christynatsumi.com' width='auto' height='auto' depth='1' z='0'>
              <h2>launch project ></h2>
            </Block3d>
          </div>
        </div>




        <div className='WorkView__project'>
          <div className='WorkView__project--leftCol'>
            <Block3d cssClass='WorkView__project__title' height='auto' depth='10' z='-4'>
              <h1>riddickart</h1>
            </Block3d>
            <Block3d cssClass='WorkView__project__desc' height='auto' depth='8' z='-6'>
              <p>
                Mark Riddick has been doing death metal illustration since 1991, and garnered a devoted following within
                the community. I have been maintaining his modest site for 8 years now, occasionally adding new features like
                a responsive layout and visual refreshes.
              </p>
            </Block3d>
            <Block3d cssClass='WorkView__project__pic' width='22rem' height='auto' depth='6' z='-8'>
              <img width='100%' height='100%' src='work/riddickart/riddick-2.jpg'/>
            </Block3d>
          </div>


          <div className='WorkView__project--rightCol'>
            <Block3d cssClass='WorkView__project__pic' width='22rem' height='auto' depth='14' z='0'>
              <img width='100%' height='100%' src='work/riddickart/riddick-1.jpg'/>
            </Block3d>


            <div className='WorkView__project__note'>
              <Block3d cssClass='WorkView__project__note__title' width='10rem' height='auto' depth='6' z='-8'>
                <h2>key responsibilities</h2>
              </Block3d>
              <Block3d cssClass='WorkView__project__note__text' width='10rem' height='auto' depth='5' z='-9'>
                <ul>
                  <li>Co-designed with Mark Riddick</li>
                  <li>Sole front-end developer</li>
                  <li>Custom, responsive Wordpress theme</li>
                </ul>
              </Block3d>
            </div>


            <div className='WorkView__project__note'>
              <Block3d cssClass='WorkView__project__note__title' width='10rem' height='auto' depth='6' z='-8'>
                <h2>technologies used</h2>
              </Block3d>
              <Block3d cssClass='WorkView__project__note__text' width='10rem' height='auto' depth='5' z='-9'>
                <ul>
                  <li>Javascript, CSS, SASS</li>
                  <li>Photoshop, Illustrator</li>
                  <li>Wordpress</li>
                </ul>
              </Block3d>
            </div>

            <Block3d cssClass='WorkView__project__launch' externalUrl='//riddickart.com' width='auto' height='auto' depth='1' z='0'>
              <h2>launch project ></h2>
            </Block3d>
          </div>
        </div>


      </div>
    );
  }
}

export default WorkView;