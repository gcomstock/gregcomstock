import React, { PropTypes } from 'react';
import Block3d from '../Block3d/Block3d';


export const PandoraLayout = React.createClass({
  propTypes: {
    isMobile: PropTypes.bool.isRequired
  },

  render() {
    return (
      <div className='ProjectView'>
        <div style={{textAlign: 'center'}}>
          <Block3d
            cssClass='ProjectView__title'
            width='100%'
            height='auto'
            depth='4'
            z='0'
            shadow={true}
            shadowDepth={-16}
            noLeft={true}
            noRight={true}
            isMobile={this.props.isMobile}
          >
            <div className='ProjectView__title__text'>Pandora.com</div>
          </Block3d>
        </div>



        <div className='ProjectView__picCol'>
          <Block3d
            cssClass='ProjectView__pic--intro'
            width='100%'
            height='auto'
            depth='16'
            z='0'
            isMobile={this.props.isMobile}
          >
            <img width='100%' src='work/pandora/pandora-1.jpg' alt='portfolio'/>
          </Block3d>


          <Block3d
            cssClass='ProjectView__pic--intro'
            width='100%'
            height='auto'
            depth='16'
            z='0'
            isMobile={this.props.isMobile}
          >
            <img width='100%' src='work/pandora/pandora-1.jpg' alt='portfolio'/>
          </Block3d>
        </div>


        <div className='ProjectView__textCol'>
          <Block3d
            cssClass='ProjectView__textCol__subhead'
            width='100%'
            height='auto'
            depth='8'
            z='0'
            padding={[1.5,1.5,1.5,1.25]}
            shadow={true}
            shadowDepth={-16}
            isMobile={this.props.isMobile}
          >
            Synopsis
          </Block3d>

          <Block3d
            cssClass='ProjectView__textCol__text'
            height='auto'
            depth='6'
            z='-2'
            shadow={true}
            shadowDepth={-16}
            isMobile={this.props.isMobile}
          >
            <p className='z4'>{PandoraConsts.TEXT}</p>
          </Block3d>


          <Block3d
            cssClass='ProjectView__textCol__subhead'
            width='100%'
            height='auto'
            depth='8'
            z='0'
            padding={[1.5,1.5,1,1.25]}
            shadow={true}
            shadowDepth={-16}
            isMobile={this.props.isMobile}
          >
            Technologies
          </Block3d>
          <br/>
          <Block3d
            cssClass='ProjectView__textCol__text'
            height='auto'
            width='100%'
            depth='6'
            z='-2'
            shadow={true}
            shadowDepth={-16}
            isMobile={this.props.isMobile}
          >
            <p className='z4'>React + Redux (ES6)<br/>Webpack, npm, SASS<br/>Photoshop<br/>Illustrator</p>
          </Block3d>


          <Block3d
            cssClass='ProjectView__textCol__subhead'
            width='100%'
            height='auto'
            depth='8'
            z='0'
            padding={[1.5,1.5,1,1.25]}
            shadow={true}
            shadowDepth={-16}
            isMobile={this.props.isMobile}
          >
            Role
          </Block3d>
          <br/>
          <Block3d
            cssClass='ProjectView__textCol__text'
            height='auto'
            width='100%'
            depth='6'
            z='-2'
            shadow={true}
            shadowDepth={-16}
            isMobile={this.props.isMobile}
          >
            <p className='z4'>Front-end Engineer<br/>Product Designer (display advertising)</p>
          </Block3d>
        </div>




        <Block3d
          cssClass='ProjectView__fact'
          height='auto'
          width='100%'
          depth='2'
          z='0'
          shadow={true}
          shadowDepth={-15.99}
          padding={[1.5,1.5,0,1.5]}
          isMobile={this.props.isMobile}
        >
          <div className='ProjectView__fact__title'>
            Video:<br/>Animation Showcase
          </div>
          <p>A selection of interaction designs that I implemented by collaborating closely with Pandora's product design team.</p>
        </Block3d>

        <Block3d
          cssClass='ProjectView__pic'
          width='100%'
          height='auto'
          depth='16'
          z='0'
          isMobile={this.props.isMobile}
        >
          <img width='100%' src='work/pandora/pandora-2.jpg' alt='portfolio'/>
        </Block3d>


      </div>
    );
  }
});


export const PandoraConsts = Object.freeze({
  ROUTE: '/project/pandora',
  TITLE: 'Pandora.com',
  EXTERNAL_URL: 'https://pandora.com',
  SNIPPET: 'In preparation for on-demand listening, the new Pandora.com has been re-written from the ground up using the latest front-end technologies to address complex asynchronous use cases between audio playback and advertising.',
  THUMBNAIL_PATH: 'work/pandora/tn.jpg',
  TEXT: [
    'Pandora allows a user to listen to the music they love, and help them discover their next favorite song. In 2016-17, we rewrote the web client from the ground up, rethinking what Pandora.com could mean on the modern web. I collaborated closely with the product design team to author and commit core UI decisions for several areas of the web app, including the main screen and its many presentations based on the current user state, playback state, and screen size. I was also responsible for most implementing most of the animations.'
  ],
  RESPONSIBILITIES: [
    'Collaborate closely with design and product on core UI decisions',
    'Development of react components for main application views',
    'Display ad integration',
    'UI animations'
  ],
  TECHNOLOGIES: [
    'React, Redux, ES6',
    'Webpack, npm, CSS/SASS',
    'Photoshop, Illustrator'
  ],
  TECH: 'React, Redux, ES6, Webpack, npm, CSS/SASS, Photoshop, Illustrator'
});
