import React, { PropTypes } from 'react';
import Block3d from '../Block3d/Block3d';
import ProjectNugget from '../ProjectNugget/ProjectNugget';
import ProjectGroup from '../ProjectGroup/ProjectGroup';


export const Content = Object.freeze({
  ROUTE: '/project/pandora-display-ads',
  TITLE: 'Pandora Display Ad Architecture',
  EXTERNAL_URL: '',

  PREVIEW_SNIPPET: 'I have been closely tied to the display ad workflow during my tenure at Pandora. On Pandora.com, we had a unique opportunity to do things that have never been done before with display advertising.',
  PREVIEW_THUMBNAILPATH: 'work/pandora-ads/tn.jpg',

  NUGGET1__SUBHEAD: 'Synopsis',
  NUGGET1__TEXT: 'Although Pandora is an audio product, display advertising remains an invaluable complement to its video and audio ad counterparts. Display advertising allows a brand to reach a receptive listener, giving them an opportunity to follow-through on an audio ad’s message by engaging with the brand. Product designer Aaron Drath and I ideated on tasteful ways to allow the advertiser to seamlessly integrate with the core Pandora UI. What we arrived at is a thing of beauty, and its effectiveness is backed by higher engagement and conversion rates than standard display advertisements.',
  NUGGET2__SUBHEAD: 'Role',
  NUGGET2__TEXT: '<b>Product Designer</b> - Ad layout, display animation, customization options<br/><b>Front-end Engineer</b> - Pandora.com integration, tool development<br/>',
  NUGGET3__SUBHEAD: 'Technologies',
  NUGGET3__TEXT: 'React + Redux (Javascript ES6)<br/>Webpack, npm, SASS<br/>Photoshop<br/>Sketch',

  ADSKIN_BUILDER__SUBHEAD: 'Display Ad Production Tool',
  ADSKIN_BUILDER__DESC: 'With freedom comes responsibility! Because Pandora\'s new display ads have the ability to do so much with the Pandora.com UI, there’s an inherent possibility for human error, or even exploitation from an advertiser. To solve this, I designed and developed an internal tool that Pandora\'s in-house ad design team uses to generate the CSS file for a corresponding display ad. The predefined form fields and live preview ensures visual consistency with no syntax errors.',
  ADSKIN_BUILDER__VIDEOPATH: 'https://player.vimeo.com/video/226793914',
  ADSKIN_BUILDER__WEBVIDEORATIO: 39.2,
  ADSKIN_BUILDER__MOBILEVIDEORATIO: 60,

  AD_OPTIMIZATIONS__SUBHEAD: 'The UX of Ad Impressions',
  AD_OPTIMIZATIONS__DESC: 'While implementing display ads on the new Pandora.com, I recognized an important optimization: By toggling display ad impressions between two alternating iframes, we have the ability to invisibly preload the next display ad while the current one is still active. Once the next display ad iframe has fired its onload event, we can perform an elegant cross-fade between ads, and remove the old one from the DOM once its fadeout animation ends. This design decision ensures a display ad is always visible, because no impression time is spent waiting for ad assets to load. The result has been about a 15% increase in display ad capacity without impacting the user experience. This video highlights the transition between display ads as the user interacts with the site.',
  AD_OPTIMIZATIONS__VIDEOPATH: 'https://player.vimeo.com/video/227131626',
  AD_OPTIMIZATIONS__WEBVIDEORATIO: 41,
  AD_OPTIMIZATIONS__MOBILEVIDEORATIO: 60
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
            depth='16'
            z='0'
            noLeft={true}
            noRight={true}
            isMobile={this.props.isMobile}
          >
            <img width='100%' src='work/pandora-ads/pandora-ads-1.jpg' alt='portfolio'/>
          </Block3d>

          <Block3d
            cssClass='ProjectView__picCol__pic'
            width='100%'
            depth='16'
            z='0'
            noLeft={true}
            noRight={true}
            isMobile={this.props.isMobile}
          >
            <img width='100%' src='work/pandora-ads/pandora-ads-2.jpg' alt='portfolio'/>
          </Block3d>

          <Block3d
            cssClass='ProjectView__picCol__pic'
            width='100%'
            depth='16'
            z='0'
            noLeft={true}
            noRight={true}
            isMobile={this.props.isMobile}
          >
            <img width='100%' src='work/pandora-ads/pandora-ads-3.jpg' alt='portfolio'/>
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
        </div>


        <Block3d
          cssClass='ProjectView__fact'
          height='auto'
          depth='2'
          z='0'
          noLeft={true}
          noBottom={true}
          shadow={true}
          shadowDepth={-16}
          padding={[1.5,1.5,0,1.5]}
          isMobile={this.props.isMobile}
        >
          <p>Wireframes I produced that explore the pros and cons of possible layouts for display ads, showing different screen resolutions with different resizing behaviors for the Pandora.com UI.</p>
        </Block3d>

        <Block3d
          cssClass='ProjectView__factPic'
          width='100%'
          depth='16'
          z='0'
          noLeft={true}
          noRight={true}
          isMobile={this.props.isMobile}
        >
          <img width='100%' src='work/pandora-ads/pandora-ads-wireframes.jpg' alt='portfolio'/>
        </Block3d>


        <ProjectGroup
          subhead={Content.ADSKIN_BUILDER__SUBHEAD}
          desc={Content.ADSKIN_BUILDER__DESC}
          isVideo={true}
          videoPath={Content.ADSKIN_BUILDER__VIDEOPATH}
          webVideoRatio={Content.ADSKIN_BUILDER__WEBVIDEORATIO}
          mobileVideoRatio={Content.ADSKIN_BUILDER__MOBILEVIDEORATIO}
          isMobile={this.props.isMobile}
        />


        <ProjectGroup
          subhead={Content.AD_OPTIMIZATIONS__SUBHEAD}
          desc={Content.AD_OPTIMIZATIONS__DESC}
          isVideo={true}
          videoPath={Content.AD_OPTIMIZATIONS__VIDEOPATH}
          webVideoRatio={Content.AD_OPTIMIZATIONS__WEBVIDEORATIO}
          mobileVideoRatio={Content.AD_OPTIMIZATIONS__MOBILEVIDEORATIO}
          isMobile={this.props.isMobile}
        />

      </div>
    );
  }
});
