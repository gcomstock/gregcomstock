import React, { PropTypes } from 'react';
import Block3d from '../Block3d/Block3d';
import ProjectNugget from '../ProjectNugget/ProjectNugget';
import ProjectGroup from '../ProjectGroup/ProjectGroup';


export const Content = Object.freeze({
  ROUTE: '/project/pandora-internal-tools',
  EXTERNAL_URL: '',

  PREVIEW_TITLE: 'Pandora Internal Tools & Sites',
  PREVIEW_SNIPPET: 'At Pandora, I’ve had the opportunity to design and develop both internal tools and external sites for different internal organizations. The challenges are different from working on a company’s flagship product, but the sense of ownership and satisfaction of making your co-worker’s lives easier can be more fulfilling.',
  PREVIEW_THUMBNAILPATH: 'work/pandora-internal-tools/tn.png',

  TITLE: 'Pandora Internal Tools & Sites',

  NUGGET1__SUBHEAD: 'Synopsis',
  NUGGET1__TEXT: 'When working on a large, public-facing product, design iteration usually requires scrutinizing over analytics, focus group sessions, A/B testing, and sometimes just plain intuition. By contrast, internal tools can be a delight to work on, because you have the luxury of meeting directly with your users and understanding exactly what they need! At Pandora, I’ve had the pleasure of contributing to several internal tools, as well as public-facing sites for internal organizations. Seeing your co-workers light up when presenting or implementing new designs to make their work easier is deeply rewarding.',

  ICONS__SUBHEAD: 'Rhythm Icon Library',
  ICONS__DESC: 'This video walks through an internal tool I designed and developed for Pandora, to ensure that we have a single, evolving source of truth for all of our company’s iconography. It is searchable, and uses a backend script that calls our cloud storage API to keep the design team’s icon folder in sync with the icons surfaced on this page, allowing several designers to contribute to and evolve this library without having to touch any code.',
  ICONS__VIDEOPATH: 'https://player.vimeo.com/video/226627838',
  ICONS__WEBVIDEORATIO: 39.2,
  ICONS__MOBILEVIDEORATIO: 60,

  CAREERS__SUBHEAD: 'Pandora Careers',
  CAREERS__DESC: 'Working with our employee experience team, I designed and developed our original careers page to provide a look into Pandora’s employee culture and job opportunities. Using Jobvite’s API, the job postings stay up to date and are sortable through javascript that I authored. Since its launch in 2013, this page has evolved and improved under fellow product design Joyce Lau, however the original design I created can be seen in this video.',
  CAREERS__VIDEOPATH: 'https://player.vimeo.com/video/226922020',
  CAREERS__WEBVIDEORATIO: 39.2,
  CAREERS__MOBILEVIDEORATIO: 60,
  
  INSIGHTS__SUBHEAD: 'Campaign Insights',
  INSIGHTS__DESC: 'One of Pandora’s premium advertising products are custom, sponsored radio stations with audio content that can only be heard on Pandora. I collaborated with fellow designer Savio Alphonso to create an internal dashboard that our analysts and campaign managers can use to evaluate the success of these stations. We both worked to develop a clean way to present information graphics, and then I introduced interaction animation and UI work into the codebase alongside full-stack engineers. This was my first exposure to version control, code review, and pair programming, so it holds a special place in my heart!',
  INSIGHTS__VIDEOPATH: 'https://player.vimeo.com/video/226934506',
  INSIGHTS__WEBVIDEORATIO: 39.2,
  INSIGHTS__MOBILEVIDEORATIO: 60
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
            <img width='100%' src='work/pandora-internal-tools/pandora-internal-tools-1.png' alt='portfolio'/>
          </Block3d>
        </div>


        <div className='ProjectView__textCol'>
          <ProjectNugget
            subhead={Content.NUGGET1__SUBHEAD}
            text={Content.NUGGET1__TEXT}
          />
        </div>


        <ProjectGroup
          subhead={Content.CAREERS__SUBHEAD}
          desc={Content.CAREERS__DESC}
          isVideo={true}
          videoPath={Content.CAREERS__VIDEOPATH}
          webVideoRatio={Content.CAREERS__WEBVIDEORATIO}
          mobileVideoRatio={Content.CAREERS__MOBILEVIDEORATIO}
          isMobile={this.props.isMobile}
        />


        <ProjectGroup
          subhead={Content.INSIGHTS__SUBHEAD}
          desc={Content.INSIGHTS__DESC}
          isVideo={true}
          videoPath={Content.INSIGHTS__VIDEOPATH}
          webVideoRatio={Content.INSIGHTS__WEBVIDEORATIO}
          mobileVideoRatio={Content.INSIGHTS__MOBILEVIDEORATIO}
          isMobile={this.props.isMobile}
        />


        <ProjectGroup
          subhead={Content.ICONS__SUBHEAD}
          desc={Content.ICONS__DESC}
          isVideo={true}
          videoPath={Content.ICONS__VIDEOPATH}
          webVideoRatio={Content.ICONS__WEBVIDEORATIO}
          mobileVideoRatio={Content.ICONS__MOBILEVIDEORATIO}
          isMobile={this.props.isMobile}
        />

      </div>
    );
  }
});
