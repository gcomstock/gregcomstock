import React, { PropTypes } from 'react';
import Block3d from '../Block3d/Block3d';
import ProjectNugget from '../ProjectNugget/ProjectNugget';


export const Content = Object.freeze({
  ROUTE: '/project/display-ad-design',
  TITLE: 'Display Ad Design',

  PREVIEW_SNIPPET: 'Before I was a product designer and front-end developer, I designed and produced hundreds of display ads that ran on the old, OLD Pandora.com. For a trip down memory lane, check some of my favorite ones out!',
  PREVIEW_THUMBNAILPATH: 'work/display-ad-design/tn.jpg',

  NUGGET1__SUBHEAD: 'Synopsis',
  NUGGET1__TEXT: 'Before I was a product designer and front-end developer, I designed and produced hundreds of display ads that ran on the old, OLD Pandora.com. The process usually involved taking advertiser-provided assets, and making a cohesive layout with them that integrated with the Pandora product and brand. Often times I needed to produce additional or substitute assets in Photoshop. Occasionally, I also designed and developed artist landing pages, promoting special interviews with Pandora, or a new album release. For a trip down memory lane, check some of my favorite work from the early days of Pandora!',
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
            <img width='100%' src='work/display-ad-design/1-intro.jpg' alt='portfolio'/>
          </Block3d>
        </div>


        <div className='ProjectView__textCol'>
          <ProjectNugget
            subhead={Content.NUGGET1__SUBHEAD}
            text={Content.NUGGET1__TEXT}
          />
        </div>


        <div className='ProjectView__row'>
          <Block3d
            cssClass='ProjectView__row__webPic'
            depth='3'
            z='0'
            shadow={true}
            shadowDepth={-16}
            noLeft={true}
            noRight={true}
            isMobile={this.props.isMobile}
          >
            <img width='100%' src='work/display-ad-design/2.jpg' alt='portfolio'/>
          </Block3d>

          <Block3d
            cssClass='ProjectView__row__webPic'
            depth='3'
            z='0'
            shadow={true}
            shadowDepth={-16}
            noLeft={true}
            noRight={true}
            isMobile={this.props.isMobile}
          >
            <img width='100%' src='work/display-ad-design/3.jpg' alt='portfolio'/>
          </Block3d>
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
          noLeft={true}
          noRight={true}
          padding={[1.5,1.5,0,1.5]}
          isMobile={this.props.isMobile}
        >
          <p>Pandora.com used to have a collection of skins that could be shown behind the UI. I designed this "cosmic rift" skin, a favorite around the office. Thanks for the free assets, NASA!</p>
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
          <img width='100%' src='work/display-ad-design/cosmic-rift.jpg' alt='portfolio'/>
        </Block3d>


        <div className='ProjectView__row'>
          <Block3d
            cssClass='ProjectView__row__webPic'
            depth='3'
            z='0'
            shadow={true}
            shadowDepth={-16}
            noLeft={true}
            noRight={true}
            isMobile={this.props.isMobile}
          >
            <img width='100%' src='work/display-ad-design/4.jpg' alt='portfolio'/>
          </Block3d>

          <Block3d
            cssClass='ProjectView__row__webPic'
            depth='3'
            z='0'
            shadow={true}
            shadowDepth={-16}
            noLeft={true}
            noRight={true}
            isMobile={this.props.isMobile}
          >
            <img width='100%' src='work/display-ad-design/5.jpg' alt='portfolio'/>
          </Block3d>


          <Block3d
            cssClass='ProjectView__row__webPic'
            depth='3'
            z='0'
            shadow={true}
            shadowDepth={-16}
            noLeft={true}
            noRight={true}
            isMobile={this.props.isMobile}
          >
            <img width='100%' src='work/display-ad-design/hub1.jpg' alt='portfolio'/>
          </Block3d>

          <Block3d
            cssClass='ProjectView__row__webPic'
            depth='3'
            z='0'
            shadow={true}
            shadowDepth={-16}
            noLeft={true}
            noRight={true}
            isMobile={this.props.isMobile}
          >
            <img width='100%' src='work/display-ad-design/hub2.jpg' alt='portfolio'/>
          </Block3d>


          <Block3d
            cssClass='ProjectView__row__webPic'
            depth='3'
            z='0'
            shadow={true}
            shadowDepth={-16}
            noLeft={true}
            noRight={true}
            isMobile={this.props.isMobile}
          >
            <img width='100%' src='work/display-ad-design/6.jpg' alt='portfolio'/>
          </Block3d>

          <Block3d
            cssClass='ProjectView__row__webPic'
            depth='3'
            z='0'
            shadow={true}
            shadowDepth={-16}
            noLeft={true}
            noRight={true}
            isMobile={this.props.isMobile}
          >
            <img width='100%' src='work/display-ad-design/7.jpg' alt='portfolio'/>
          </Block3d>
        </div>


      </div>
    );
  }
});
