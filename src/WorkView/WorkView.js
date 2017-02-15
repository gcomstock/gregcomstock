import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Block3d from '../Block3d/Block3d';
import './WorkView.css';

const WorkView = React.createClass({
  propTypes: {
    params: PropTypes.object.isRequired,
    scrollY: PropTypes.number
  },

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
    }, 600);
  },

  componentWillLeave(callback) {
    this.setState({routeTransition: 'outro'});
    setTimeout(() => {
      this.setState({routeTransition: null});
      callback();
    }, 600);
  },

  randomizeLetterAnimation() {
    const title = ['G','R','E','G','C','O','M','S','T','O','C','K'];

    let blocks = [];
    title.forEach( (letter, i) => {
      //const min = 100;
      //const max = 200 * i;
      //const rnd = Math.floor(Math.random() * (max - min)) + min;
      const rnd = i * 150;

      if (i === 4) {
        blocks.push(<br key={i+'br'}/>);
      }
      blocks.push(<Block3d key={i} cssClass='WorkView__title__letter' width='3.5rem' depth='2.75' animationDelay={rnd + 'ms'}>{letter}</Block3d>);
    });
    return blocks;
  },

  render() {
    const App__body__scrollable__wrapper = classNames(
      'App__body__scrollable__wrapper', {
        'App__body__scrollable__wrapper--intro': this.state.routeTransition === 'intro',
        'App__body__scrollable__wrapper--outro': this.state.routeTransition === 'outro'
      }
    );

    return (
      <div className='App__body'>
        <div className='App__body__scrollable'>
          <div className={App__body__scrollable__wrapper}>
            <div className='App__body__scrollable__wrapper__leftFrame'>
              <Block3d width='20rem' height='100%' depth='10' z='-4' />
            </div>




            <div className='WorkView__title'>
              {this.randomizeLetterAnimation()}
            </div>

            <div className='WorkView__subtitle'>
              DESIGN + DEVELOPMENT
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




            <div className='App__body__scrollable__wrapper__rightFrame'>
              <Block3d width='20rem' height='100%' depth='10' z='-4' />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default WorkView;