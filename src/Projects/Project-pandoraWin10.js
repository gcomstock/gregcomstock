import React from 'react';
import Block3d from '../Block3d/Block3d';
import ProjectNugget from '../ProjectNugget/ProjectNugget';
import ProjectGroup from '../ProjectGroup/ProjectGroup';


export const Content = Object.freeze({
  ROUTE: '/project/pandora-windows10',
  TITLE: 'Pandora for Windows 10',
  EXTERNAL_URL: 'https://www.microsoft.com/en-us/store/p/pandora/9wzdncrfj46v',

  PREVIEW_SNIPPET: 'Working with a small team under a tight deadline, we put together a desktop application to coincide with Microsoft\'s Windows 10 release. I was responible for implementing key parts of the UI while making design decisions on the fly.',
  PREVIEW_THUMBNAILPATH: 'work/pandora-windows10/tn.jpg',

  NUGGET1__SUBHEAD: 'Synopsis',
  NUGGET1__TEXT: 'As part of an arrangement with Microsoft, we assembled a small team to work under a tight deadline to be one of the first apps available for the Windows 10 ecosystem. I was pulled off of my current work to implement key parts of the UI, including the "now playing" main application screen, along with most of the apps\' transitions and animations.',
  NUGGET2__SUBHEAD: 'Role',
  NUGGET2__TEXT: '<b>Front-end Engineer</b> - UI, animation, responsive layout</b>',
  NUGGET3__SUBHEAD: 'Technologies',
  NUGGET3__TEXT: 'Javascript, backbone.js, WinJS<br/>CSS, SASS<br/>Moustache templating',

  RESPONSIVE_DESIGN__SUBHEAD: 'Building a Responsive Desktop App',
  RESPONSIVE_DESIGN__DESC: 'Creating the UI for a responsive, touch-enabled desktop application was a new challenge for me, and I welcomed the opportunity to learn from it. Because the UI is touch-enabled, most of the animations are based on coordinate values being set at different rates as the user\'s hand performs the gesture, rather than on simply applying an animation to a set destination on a click event. This creatively-technical process required close collaboration with lead product designer Simon O\'Shea. Together, we also made quick decisions around the responsive nature of the UI, often times during development.',
  RESPONSIVE_DESIGN__VIDEOPATH: 'https://www.youtube.com/embed/Lhg9iIj7AE4',
  RESPONSIVE_DESIGN__WEBVIDEORATIO: 46.5,
  RESPONSIVE_DESIGN__MOBILEVIDEORATIO: 70
});


export const Layout = React.createClass({
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
            <img width='100%' src='work/pandora-windows10/pandora-windows10-1.jpg' alt='portfolio'/>
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
            <img width='100%' src='work/pandora-windows10/pandora-windows10-2.jpg' alt='portfolio'/>
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
            <div className='button__text button__text--arrowRight'>Download the App</div>
          </Block3d>
        </div>



        <div className='ProjectView__row'>
          <Block3d
            cssClass='ProjectView__row__mobilePic'
            depth='3'
            z='0'
            shadow={true}
            shadowDepth={-16}
            noLeft={true}
            isMobile={this.props.isMobile}
          >
            <img width='100%' src='work/pandora-windows10/pandora-windows10-1m.jpg' alt='portfolio'/>
          </Block3d>

          <Block3d
            cssClass='ProjectView__row__mobilePic'
            depth='3'
            z='0'
            shadow={true}
            shadowDepth={-16}
            noLeft={true}
            noRight={true}
            isMobile={this.props.isMobile}
          >
            <img width='100%' src='work/pandora-windows10/pandora-windows10-2m.jpg' alt='portfolio'/>
          </Block3d>

          <Block3d
            cssClass='ProjectView__row__mobilePic'
            depth='3'
            z='0'
            shadow={true}
            shadowDepth={-16}
            noRight={true}
            isMobile={this.props.isMobile}
          >
            <img width='100%' src='work/pandora-windows10/pandora-windows10-3m.jpg' alt='portfolio'/>
          </Block3d>
        </div>


        <ProjectGroup
          subhead={Content.RESPONSIVE_DESIGN__SUBHEAD}
          desc={Content.RESPONSIVE_DESIGN__DESC}
          isVideo={true}
          videoPath={Content.RESPONSIVE_DESIGN__VIDEOPATH}
          webVideoRatio={Content.RESPONSIVE_DESIGN__WEBVIDEORATIO}
          mobileVideoRatio={Content.RESPONSIVE_DESIGN__MOBILEVIDEORATIO}
          isMobile={this.props.isMobile}
        />

      </div>
    );
  }
});