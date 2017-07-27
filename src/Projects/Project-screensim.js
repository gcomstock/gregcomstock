import React from 'react';
import Block3d from '../Block3d/Block3d';
import ProjectNugget from '../ProjectNugget/ProjectNugget';
import ProjectGroup from '../ProjectGroup/ProjectGroup';


export const Content = Object.freeze({
  ROUTE: '/project/screensim',
  TITLE: 'Screen Sim',
  EXTERNAL_URL: '//screensim.com',

  PREVIEW_SNIPPET: 'Although there are many ways a developer can measure and preview screen sizes, I wanted to create a user-friendly site with shareable links to demonstrate responsive site design for everyone.',
  PREVIEW_THUMBNAILPATH: 'work/screensim/tn.jpg',

  NUGGET1__SUBHEAD: 'Synopsis',
  NUGGET1__TEXT: 'Although there are many ways a developer can measure and preview screen sizes, I wanted to create a user-friendly site with shareable links to demonstrate responsive site design for everyone. Screensim was a personal project that could use some updating with modern devices, but it\'s proven a useful tool internally at Pandora and externally among design friends.',
  NUGGET2__SUBHEAD: 'Role',
  NUGGET2__TEXT: '<b>Product Designer</b> - site design<br/><b>Front-end Engineer</b> - site development<br/>',
  NUGGET3__SUBHEAD: 'Technologies',
  NUGGET3__TEXT: 'Javascript, jQuery<br/>CSS<br/>iframe magic'
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
            <img width='100%' src='work/screensim/screensim-1.jpg' alt='portfolio'/>
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
            <img width='100%' src='work/screensim/screensim-2.jpg' alt='portfolio'/>
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
            <img width='100%' src='work/screensim/screensim-3.jpg' alt='portfolio'/>
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



      </div>
    );
  }
});
