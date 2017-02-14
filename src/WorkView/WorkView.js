import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Block3d from '../Block3d/Block3d';
import './WorkView.css';

const WorkView = React.createClass({
  getInitialState() {
    return {
      routeTransition: null
    }
  },

  componentWillEnter(callback) {
    this.setState({routeTransition: 'intro'});
    setTimeout(() => {
      this.setState({routeTransition: null});
      callback();
    }, 500);
  },

  componentWillLeave(callback) {
    this.setState({routeTransition: 'outro'});
    setTimeout(() => {
      this.setState({routeTransition: null});
      callback();
    }, 500);
  },

  randomizeLetterAnimation() {
    const title = ['G','R','E','G','C','O','M','S','T','O','C','K'];

    let blocks = [];
    title.forEach( (letter, i) => {
      //const min = 100;
      //const max = 200 * i;
      //const rnd = Math.floor(Math.random() * (max - min)) + min;
      const rnd = i * 150;

      if (i == 4) {
        blocks.push(<br key={i+'br'}/>);
      }
      blocks.push(<Block3d key={i} cssClass='WorkView__title__letter' width='3.5rem' depth='2.75' animationDelay={rnd + 'ms'}>{letter}</Block3d>);
    });
    return blocks;
  },

  render() {
    const App__wrapper = classNames(
      'App__wrapper', {
        'App__wrapper--intro': this.state.routeTransition === 'intro',
        'App__wrapper--outro': this.state.routeTransition === 'outro'
      }
    );

    return (
      <div className={App__wrapper}>
        <div className='App__body__content__scrollable'>


          <div className='App__wrapper'>

            <div className="App__wrapper__leftFrame">
              <Block3d width='20rem' height='100%' depth='10' z='-4' />
            </div>


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
                      and advertising. Full release coming soon! <b>To opt in to the public beta, go to your Pandora.com settings
                      page and follow the link at the bottom.</b>
                    </p>
                  </Block3d>


                  <div className='WorkView__project__note WorkView__project__note--marginRight'>
                    <Block3d cssClass='WorkView__project__note__title' width='100%' height='auto' depth='6' z='-8'>
                      <h2>technologies used</h2>
                    </Block3d>
                    <Block3d cssClass='WorkView__project__note__text' width='100%' height='auto' depth='5' z='-9'>
                      <ul>
                        <li>React, Redux, ES6/2015</li>
                        <li>NPM, Webpack, SASS</li>
                        <li>Mocha, Enzyme</li>
                        <li>Photoshop, Illustrator</li>
                      </ul>
                    </Block3d>
                  </div>


                  <div className='WorkView__project__note WorkView__project__note--marginRight'>
                    <Block3d cssClass='WorkView__project__note__title' width='100%' depth='6' z='-8'>
                      <h2>key responsibilities</h2>
                    </Block3d>
                    <Block3d cssClass='WorkView__project__note__text' width='100%' depth='5' z='-9'>
                      <ul>
                        <li>Core UI decision-making with product design team</li>
                        <li>React component development for main application views</li>
                        <li>UI animations</li>
                        <li>Display ad integrations</li>
                      </ul>
                    </Block3d>
                  </div>


                  <Block3d cssClass='WorkView__project__launch' externalUrl='//pandora.com' width='auto' height='auto' depth='0.75' z='0' y='0' x='-1.5'>
                    <h2>launch project</h2>
                  </Block3d>
                </div>

                <div className='WorkView__project--rightCol'>
                  <Block3d cssClass='WorkView__project__pic' width='22rem' height='auto' depth='14' z='0'>
                    <img width='100%' src='work/pandora/pandora-hero-1.jpg'/>
                  </Block3d>
                  <Block3d cssClass='WorkView__project__pic' width='22rem' height='auto' depth='12' z='-2'>
                    <img width='100%' src='work/pandora/pandora-hero-2.jpg'/>
                  </Block3d>
                </div>
              </div>


      {/*
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
                      touch-friendly desktop application available for all Windows 10 users. Available for download now in the Microsoft store!
                    </p>
                  </Block3d>
                  <Block3d cssClass='WorkView__project__pic' width='16rem' height='auto' depth='10' z='-4'>
                    <img width='100%' src='work/pandora-windows10/win10-3.jpg'/>
                  </Block3d>


                  <div className='WorkView__project__note WorkView__project__note--marginRight'>
                    <Block3d cssClass='WorkView__project__note__title' width='100%' depth='6' z='-8'>
                      <h2>technologies used</h2>
                    </Block3d>
                    <Block3d cssClass='WorkView__project__note__text' width='100%' depth='5' z='-9'>
                      <ul>
                        <li>Javascript, backbone.js, WinJS</li>
                        <li>Moustache templating</li>
                        <li>CSS, SASS</li>
                      </ul>
                    </Block3d>
                  </div>


                  <div className='WorkView__project__note WorkView__project__note--marginRight'>
                    <Block3d cssClass='WorkView__project__note__title' width='100%' depth='6' z='-8'>
                      <h2>key responsibilities</h2>
                    </Block3d>
                    <Block3d cssClass='WorkView__project__note__text' width='100%' depth='5' z='-9'>
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
                    <img width='100%' src='work/pandora-windows10/win10-1.jpg'/>
                  </Block3d>
                  <Block3d cssClass='WorkView__project__pic' width='22rem' height='auto' depth='12' z='-2'>
                    <img width='100%' src='work/pandora-windows10/win10-2.jpg'/>
                  </Block3d>


                  <Block3d cssClass='WorkView__project__launch' externalUrl='//www.microsoft.com/en-us/store/p/pandora/9wzdncrfj46v' width='auto' height='auto' depth='1' z='0'>
                    <h2>launch project</h2>
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


                  <div className='WorkView__project__note WorkView__project__note--marginRight'>
                    <Block3d cssClass='WorkView__project__note__title' width='100%' depth='6' z='-8'>
                      <h2>technologies used</h2>
                    </Block3d>
                    <Block3d cssClass='WorkView__project__note__text' width='100%' depth='5' z='-9'>
                      <ul>
                        <li>Javascript, CSS, LESS</li>
                        <li>Photoshop, Illustrator</li>
                        <li>Squarespace templating engine, API, and dev environment</li>
                      </ul>
                    </Block3d>
                  </div>


                  <div className='WorkView__project__note WorkView__project__note--marginRight'>
                    <Block3d cssClass='WorkView__project__note__title' width='100%' depth='6' z='-8'>
                      <h2>key responsibilities</h2>
                    </Block3d>
                    <Block3d cssClass='WorkView__project__note__text' width='100%' depth='5' z='-9'>
                      <ul>
                        <li>Sole designer and photographer</li>
                        <li>Sole front-end developer</li>
                        <li>API integration with Squarespace backend</li>
                      </ul>
                    </Block3d>
                  </div>


                  <Block3d cssClass='WorkView__project__launch' externalUrl='//christynatsumi.com' width='auto' height='auto' depth='1' z='0' x='-1.5'>
                    <h2>launch project</h2>
                  </Block3d>
                </div>


                <div className='WorkView__project--rightCol'>
                  <Block3d cssClass='WorkView__project__pic' width='22rem' depth='14' z='0'>
                    <img width='100%' src='work/christynatsumi/cn-1.jpg'/>
                  </Block3d>
                  <Block3d cssClass='WorkView__project__pic' width='22rem' depth='8' z='-6'>
                    <img width='100%' src='work/christynatsumi/cn-2.jpg'/>
                  </Block3d>
                </div>
              </div>




              <div className='WorkView__project'>
                <div className='WorkView__project--leftCol'>
                  <Block3d cssClass='WorkView__project__title' depth='10' z='-4'>
                    <h1>riddickart</h1>
                  </Block3d>
                  <Block3d cssClass='WorkView__project__desc' depth='8' z='-6'>
                    <p>
                      Mark Riddick has been creating grotesquely gorgeous death metal illustrations since 1991, and has garnered a devoted following within
                      the community. I have been maintaining his modest site since 2009, occasionally adding new features and visual refreshes.
                    </p>
                  </Block3d>


                  <div className='WorkView__project__note WorkView__project__note--marginRight'>
                    <Block3d cssClass='WorkView__project__note__title' width='100%' depth='6' z='-8'>
                      <h2>technologies used</h2>
                    </Block3d>
                    <Block3d cssClass='WorkView__project__note__text' width='100%' depth='5' z='-9'>
                      <ul>
                        <li>Javascript, CSS, SASS</li>
                        <li>Photoshop, Illustrator</li>
                        <li>Wordpress</li>
                      </ul>
                    </Block3d>
                  </div>


                  <div className='WorkView__project__note WorkView__project__note--marginRight'>
                    <Block3d cssClass='WorkView__project__note__title' width='100%' depth='6' z='-8'>
                      <h2>key responsibilities</h2>
                    </Block3d>
                    <Block3d cssClass='WorkView__project__note__text' width='100%' depth='5' z='-9'>
                      <ul>
                        <li>Co-designed with Mark Riddick</li>
                        <li>Sole front-end developer</li>
                        <li>Developed a custom, responsive Wordpress theme</li>
                      </ul>
                    </Block3d>
                  </div>


                  <Block3d cssClass='WorkView__project__launch' externalUrl='//riddickart.com' depth='1' z='0' x='-1.5'>
                    <h2>launch project</h2>
                  </Block3d>
                </div>


                <div className='WorkView__project--rightCol'>
                  <Block3d cssClass='WorkView__project__pic' width='22rem' height='auto' depth='14' z='0'>
                    <img width='100%' height='100%' src='work/riddickart/riddick-1.jpg'/>
                  </Block3d>

                  <Block3d cssClass='WorkView__project__pic' width='22rem' height='auto' depth='8' z='-6'>
                    <img width='100%' height='100%' src='work/riddickart/riddick-2.jpg'/>
                  </Block3d>
                </div>
              </div>



              <div className='WorkView__about'>
                <Block3d cssClass='WorkView__about__title' depth='8' width='auto' z='-6'>
                  <h1>about me</h1>
                </Block3d>
                <br/>
                <Block3d cssClass='WorkView__about__text' depth='6' width='22rem' z='-8'>
                  <p>
                    Thank you for taking the time to view some of my work! I apologize for this site being sparse at the moment,
                    and not yet mobile-friendly. It is important to show some of the projects that have been dearest to me in
                    the best manner, so there is still much work to be done! A new portfolio site was a 2017 New Year's resolution
                    that I am in the process of fulfilling.
                  </p>
                  <br/>
                  <p>
                    ----------
                  </p>
                  <br/>
                  <p>
                    I hold a lifelong passion for great design. After several years of industry experience as a graphic designer, it became
                    increasingly important to me to preserve the integrity and vision of a product. How a product feels, its flow,
                    its gravity and inertia, is best communicated with the actual code implementation. As means to an end,
                    I became a developer, and am continuing to learn what it takes to build production-ready software in a team
                    environment, and how design must have a leading role in implementation decisions. I'm not striving to be the most
                    knowledgeable scale engineer, or command the highest salary through arcane technical sorcery. I have a working
                    knowledge of the full stack, but remain firmly committed to the user experience, and all the intricacies that go
                    into making a product feel "just right."
                  </p>
                </Block3d>
              </div>
            </div>


            <div className="App__wrapper__rightFrame">
              <Block3d width='20rem' height='100%' depth='10' z='-4' />
            </div>


          </div>
        </div>
      </div>
    );
  }
});

export default WorkView;