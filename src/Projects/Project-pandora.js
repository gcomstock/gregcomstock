import React, { PropTypes } from 'react';
import Block3d from '../Block3d/Block3d';
import ProjectNugget from '../ProjectNugget/ProjectNugget';
import ProjectGroup from '../ProjectGroup/ProjectGroup';


export const Content = Object.freeze({
  ROUTE: '/project/pandora',
  TITLE: 'Pandora.com',
  EXTERNAL_URL: 'https://pandora.com',

  PREVIEW_SNIPPET: 'In 2016-17, we re-wrote Pandora.com from the ground up using the latest front-end technologies. The project, process, and team collaboration made for an unforgettable professional experience.',
  PREVIEW_THUMBNAILPATH: 'work/pandora/tn.jpg',

  NUGGET1__SUBHEAD: 'Synopsis',
  NUGGET1__TEXT: 'In 2016-17, we rewrote Pandora.com from the ground up, rethinking what Pandora.com could be on the modern web. Though my official involvement was front-end development throughout the project, I collaborated closely with the product design team to author and commit core UI decisions for several areas of the web app, including the main “now playing” view. I strive to straddle the divide between product design and engineering, and love the opportunity to bring technical know-how to the design conversation. Some of my other responsibilities included co-designing and implementing the display ad layout and lifecycle, and most of the site’s interaction animation.',
  NUGGET2__SUBHEAD: 'Role',
  NUGGET2__TEXT: '<b>Front-end Engineer</b> - UI, display ads, animation<br/><b>Product Designer</b> - display ads<br/><b>UX Prototyping</b>',
  NUGGET3__SUBHEAD: 'Technologies',
  NUGGET3__TEXT: 'React + Redux (Javascript ES6)<br/>Webpack, npm, SASS<br/>Photoshop<br/>Illustrator',

  INTERACTION_DESIGN__SUBHEAD: 'Interaction Design',
  INTERACTION_DESIGN__DESC: 'Elegant animations and meaningful interaction design is a challenge that requires both an eye for design and an understanding of technical implementation. In a React application, where direct DOM manipulation is avoided, this can be especially difficult. The journey was exciting, though, and by iterating closely with our other product designers, I believe we arrived at some effective solutions. Take a look!',
  INTERACTION_DESIGN__VIDEOPATH: 'https://www.youtube.com/embed/SiSP14wmY94',
  INTERACTION_DESIGN__WEBVIDEORATIO: 39.2,
  INTERACTION_DESIGN__MOBILEVIDEORATIO: 60
});


export const Layout = React.createClass({
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
            <h1>{Content.TITLE}</h1>
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
            <img width='100%' src='work/pandora/pandora-2.jpg' alt='portfolio'/>
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
            <img width='100%' src='work/pandora/pandora-3.jpg' alt='portfolio'/>
          </Block3d>
        </div>


        <div className='ProjectView__textCol'>
          <ProjectNugget
            subhead={Content.NUGGET1__SUBHEAD}
            text={Content.NUGGET1__TEXT}
          />

          <ProjectNugget
            subhead={Content.NUGGET2__SUBHEAD}
            text={Content.NUGGET2__TEXT}
          />

          <ProjectNugget
            subhead={Content.NUGGET3__SUBHEAD}
            text={Content.NUGGET3__TEXT}
          />

          <Block3d
            cssClass='ProjectView__textCol__button button'
            externalUrl={Content.EXTERNAL_URL}
            depth='1'
            z='0'
            noRight={true}
            shadow={true}
            shadowDepth={-16}
            isMobile={this.props.isMobile}
            padding={[1]}
          >
            <div className='button__text button__text--arrowRight'>Visit Pandora.com</div>
          </Block3d>
        </div>


        <ProjectGroup
          subhead={Content.INTERACTION_DESIGN__SUBHEAD}
          desc={Content.INTERACTION_DESIGN__DESC}
          isVideo={true}
          videoPath={Content.INTERACTION_DESIGN__VIDEOPATH}
          webVideoRatio={Content.INTERACTION_DESIGN__WEBVIDEORATIO}
          mobileVideoRatio={Content.INTERACTION_DESIGN__MOBILEVIDEORATIO}
          isMobile={this.props.isMobile}
        />

      </div>
    );
  }
});