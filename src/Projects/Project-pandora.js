import React, { PropTypes } from 'react';
import Block3d from '../Block3d/Block3d';
import ProjectNugget from '../ProjectNugget/ProjectNugget';
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
            <h1>{PandoraConsts.TITLE}</h1>
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
          <ProjectNugget
            subhead={PandoraConsts.NUGGET1__SUBHEAD}
            text={PandoraConsts.NUGGET1__TEXT}
          />

          <ProjectNugget
            subhead={PandoraConsts.NUGGET2__SUBHEAD}
            text={PandoraConsts.NUGGET2__TEXT}
          />

          <ProjectNugget
            subhead={PandoraConsts.NUGGET3__SUBHEAD}
            text={PandoraConsts.NUGGET3__TEXT}
          />
        </div>


        <ProjectGroup
          subhead={PandoraConsts.INTERACTION_DESIGN__SUBHEAD}
          desc={PandoraConsts.INTERACTION_DESIGN__DESC}
          isVideo={true}
          videoPath={PandoraConsts.INTERACTION_DESIGN__VIDEOPATH}
          webVideoRatio={PandoraConsts.INTERACTION_DESIGN__WEBVIDEORATIO}
          mobileVideoRatio={PandoraConsts.INTERACTION_DESIGN__MOBILEVIDEORATIO}
          isMobile={this.props.isMobile}
        />

      </div>
    );
  }
});

export const PandoraConsts = Object.freeze({
  ROUTE: '/project/pandora',
  EXTERNAL_URL: 'https://pandora.com',

  PREVIEW_TITLE: 'Pandora.com',
  PREVIEW_SNIPPET: 'In preparation for on-demand listening, the new Pandora.com has been re-written from the ground up using the latest front-end technologies to address complex asynchronous use cases between audio playback and advertising.',
  PREVIEW_THUMBNAILPATH: 'work/pandora/tn.jpg',

  TITLE: 'Pandora.com',

  NUGGET1__SUBHEAD: 'Synopsis',
  NUGGET1__TEXT: 'Pandora allows a user to listen to the music they love, and help them discover their next favorite song. In 2016-17, we rewrote the web client from the ground up, rethinking what Pandora.com could mean on the modern web. I collaborated closely with the product design team to author and commit core UI decisions for several areas of the web app, including the main "now playing" view. Some of my other responsibilities included designing and implementing the display ad layout and lifecycle, and most of the site\'s interaction animation.',
  NUGGET2__SUBHEAD: 'Role',
  NUGGET2__TEXT: '<b>Front-end Engineer</b> - UI, display ads, animation<br/><b>Product Designer</b> - display ads<br/><b>UX Prototyping</b>',
  NUGGET3__SUBHEAD: 'Technologies',
  NUGGET3__TEXT: 'React + Redux (ES6)<br/>Webpack, npm, SASS<br/>Photoshop<br/>Illustrator',

  INTERACTION_DESIGN__SUBHEAD: 'Interaction Design',
  INTERACTION_DESIGN__DESC: 'Elegant animations and meaningful interaction design is a challenge that requires both an eye for design and an understanding of technical implementation. In a React application, where direct DOM manipulation is avoided, this can be especially difficult. The journey was exciting, though, and by iterating closely with our other product designers, I believe we arrived at some effective solutions. Take a look!',
  INTERACTION_DESIGN__VIDEOPATH: 'https://player.vimeo.com/video/226627838',
  INTERACTION_DESIGN__WEBVIDEORATIO: 39.2,
  INTERACTION_DESIGN__MOBILEVIDEORATIO: 60,

  AD_ARCH__SUBHEAD: 'Display Ad Architecture'
});




/*

export const PandoraConsts = Object.freeze({
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
*/
