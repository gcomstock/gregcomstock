import React, { PropTypes } from 'react';
import Block3d from '../Block3d/Block3d';
import ProjectGroup from '../ProjectGroup/ProjectGroup';


export const PandoraLayout = React.createClass({
  propTypes: {
    isMobile: PropTypes.bool.isRequired
  },

  render() {
    return (
      <div className='ProjectView'>

        <div className='wrapper wrapper--centered'>
          <Block3d
            cssClass='ProjectView__title'
            width='100%'
            height='auto'
            depth='4'
            z='0'
            padding={[1.5,2.75,1.5,3]}
            shadow={true}
            shadowDepth={-16}
            noLeft={true}
            noRight={true}
            isMobile={this.props.isMobile}
          >
            <h1>{PROJECT_CONSTS.TITLE}</h1>
          </Block3d>
        </div>


        <div className='ProjectView__picCol'>
          <Block3d
            cssClass='ProjectView__picCol__pic'
            width='100%'
            height='auto'
            depth='16'
            z='0'
            noLeft={true}
            noRight={true}
            isMobile={this.props.isMobile}
          >
            <img width='100%' src='work/pandora/pandora-1.jpg' alt='portfolio'/>
          </Block3d>


          <Block3d
            cssClass='ProjectView__picCol__pic'
            width='100%'
            height='auto'
            depth='16'
            z='0'
            noLeft={true}
            noRight={true}
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
            noRight={true}
            padding={[1.5,1.5,1.5,1.25]}
            shadow={true}
            shadowDepth={-16}
            isMobile={this.props.isMobile}
          >
            <h2>Synopsis</h2>
          </Block3d>

          <Block3d
            cssClass='ProjectView__textCol__text'
            height='auto'
            depth='6'
            z='-2'
            noRight={true}
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
            noRight={true}
            padding={[1.5,1.5,1.5,1.25]}
            shadow={true}
            shadowDepth={-16}
            isMobile={this.props.isMobile}
          >
            <h2>Technologies</h2>
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
            noRight={true}
            padding={[1.5,1.5,1.5,1.25]}
            shadow={true}
            shadowDepth={-16}
            isMobile={this.props.isMobile}
          >
            <h2>Role</h2>
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
            <p className='z4'>
              <b>Front-end Engineer</b> - UI, display ads, animation<br/>
              <b>Product Designer</b> - display ads<br/>
              <b>UX Prototyping</b>
            </p>
          </Block3d>
        </div>



        <ProjectGroup
          subhead={PROJECT_CONSTS.INTERACTION_DESIGN__SUBHEAD}
          desc={PROJECT_CONSTS.INTERACTION_DESIGN__DESC}
          isVideo={true}
          videoPath={PROJECT_CONSTS.INTERACTION_DESIGN__VIDEOPATH}
          webVideoRatio={PROJECT_CONSTS.INTERACTION_DESIGN__WEBVIDEORATIO}
          mobileVideoRatio={PROJECT_CONSTS.INTERACTION_DESIGN__MOBILEVIDEORATIO}
          isMobile={this.props.isMobile}
        />



      </div>
    );
  }
});

const PROJECT_CONSTS = Object.freeze({
  TITLE: 'Pandora.com',
  INTERACTION_DESIGN__SUBHEAD: 'Interaction Design',
  INTERACTION_DESIGN__DESC: 'Elegant animations and meaningful interaction design is a challenge that requires both an eye for design and an understanding of technical implementation. In a React application, where direct DOM manipulation is avoided, this can be especially difficult. The journey was exciting, though, and by iterating closely with our other product designers, I believe we arrived at some effective solutions. Take a look!',
  INTERACTION_DESIGN__VIDEOPATH: 'https://player.vimeo.com/video/226627838',
  INTERACTION_DESIGN__WEBVIDEORATIO: 39.2,
  INTERACTION_DESIGN__MOBILEVIDEORATIO: 60
});



export const PandoraConsts = Object.freeze({

  ROUTE: '/project/pandora',
  TITLE: 'Pandora.com',
  EXTERNAL_URL: 'https://pandora.com',
  SNIPPET: 'In preparation for on-demand listening, the new Pandora.com has been re-written from the ground up using the latest front-end technologies to address complex asynchronous use cases between audio playback and advertising.',
  THUMBNAIL_PATH: 'work/pandora/tn.jpg',
  TEXT: [
    'Pandora allows a user to listen to the music they love, and help them discover their next favorite song. In 2016-17, we rewrote the web client from the ground up, rethinking what Pandora.com could mean on the modern web. I collaborated closely with the product design team to author and commit core UI decisions for several areas of the web app, including the main "now playing" view. Some of my other responsibilities included designing and implementing the display ad layout and lifecycle, and most of the site\'s interaction animation.'
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
