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
            shadowDepth={-15.99}
            noTop={true}
            noLeft={true}
            noRight={true}
            isMobile={this.props.isMobile}
          >
            Pandora.com
          </Block3d>
        </div>

        {/*
        <div className="ProjectView__title">
          Pandora Display Ad Architecture
          <div className="ProjectView__title__shadow">
            Pandora Display Ad Architecture
          </div>
        </div>
         */}


        <Block3d
          cssClass='ProjectView__pic--intro'
          width='100%'
          height='auto'
          depth='14'
          z='0'
          isMobile={this.props.isMobile}
        >
          <img width='100%' src='work/pandora/pandora-1.jpg' alt='portfolio'/>
        </Block3d>

        <div className='ProjectView__textCol'>
          <Block3d
            cssClass='ProjectView__textCol__subhead'
            width='100%'
            height='auto'
            depth='8'
            z='0'
            padding={[1.5,1.5,1,1.25]}
            shadow={true}
            shadowDepth={-15.5}
            isMobile={this.props.isMobile}
          >
            Responsibilities
          </Block3d>

          <Block3d
            cssClass='ProjectView__textCol__text'
            height='auto'
            depth='6'
            z='-2'
            shadow={true}
            shadowDepth={-15.5}
            isMobile={this.props.isMobile}
          >
            <p>{PandoraConsts.TEXT}</p>
          </Block3d>




          <div className='ProjectView__textCol__half'>
            <Block3d
              cssClass='ProjectView__textCol__subhead'
              width='100%'
              height='auto'
              depth='8'
              z='0'
              padding={[1.5,1.5,1,1.25]}
              shadow={true}
              shadowDepth={-15.5}
              isMobile={this.props.isMobile}
            >
              Tech
            </Block3d>
            <br/>
            <Block3d
              cssClass='ProjectView__textCol__text'
              height='auto'
              depth='7'
              z='-1'
              shadow={true}
              shadowDepth={-15.5}
              isMobile={this.props.isMobile}
            >
              <p className='list'>React + Redux (ES6) <br/>Webpack, npm, SASS<br/>Photoshop<br/>Illustrator</p>
            </Block3d>
          </div>




          <div className='ProjectView__textCol__half'>
            <Block3d
              cssClass='ProjectView__textCol__subhead'
              height='auto'
              width='100%'
              depth='4'
              z='0'
              padding={[1.5,1.5,1,1.25]}
              shadow={true}
              shadowDepth={-15.99}
              isMobile={this.props.isMobile}
            >
              Role
            </Block3d>
            <br/>
            <Block3d
              cssClass='ProjectView__textCol__text'
              height='auto'
              width='100%'
              depth='3'
              z='-1'
              shadow={true}
              shadowDepth={-15.99}
              isMobile={this.props.isMobile}
            >
              <p className='list'>Front-end Dev <br/>Product Design (display ads)</p>
            </Block3d>
          </div>




        </div>




        <Block3d cssClass='ProjectView__pic' width='100%' height='auto' depth='14' z='0' isMobile={this.props.isMobile}>
          <img width='100%' src='work/pandora/pandora-2.jpg' alt='portfolio'/>
        </Block3d>

        <Block3d cssClass='ProjectView__pic' width='100%' height='auto' depth='14' z='0' isMobile={this.props.isMobile}>
          <img width='100%' src='work/pandora/pandora-3.jpg' alt='portfolio'/>
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
    'As a member of the web team, I develop production-ready, front-end code for several areas of pandora.com, with an emphasis on display ad integration, layout, and animation. We are actively working on bringing on-demand listening to the platform.'
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
