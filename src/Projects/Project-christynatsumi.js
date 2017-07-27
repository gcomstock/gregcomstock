import React, { PropTypes } from 'react';
import Block3d from '../Block3d/Block3d';
import ProjectNugget from '../ProjectNugget/ProjectNugget';
import ProjectGroup from '../ProjectGroup/ProjectGroup';


export const Content = Object.freeze({
  ROUTE: '/project/christynatsumi',
  TITLE: 'Christy Natsumi',
  EXTERNAL_URL: 'https://christynatsumi.com',

  PREVIEW_SNIPPET: 'A San Francisco based independent design studio that creates modern jewelry essentials. I design, build, and maintain all of the site\'s front-end, adding updates regularly. I also shoot most of the photography.',
  PREVIEW_THUMBNAILPATH: 'work/christynatsumi/tn.jpg',

  NUGGET1__SUBHEAD: 'Synopsis',
  NUGGET1__TEXT: 'A San Francisco based independent design studio that creates modern jewelry essentials. I collaborate closely with founder and jewelry designer Christy Natsumi to help showcase her work in the most effective way. Because it\'s a small business, I touch every part of the process, from sketching wireframes to implementing the final layout and photos.',
  NUGGET2__SUBHEAD: 'Role',
  NUGGET2__TEXT: '<b>Front-end Engineer</b> - UI, Squarespace API integration<br/><b>Designer</b> - Site, branding, promotionals<br/><b>Photographer</b> - product, model',
  NUGGET3__SUBHEAD: 'Technologies',
  NUGGET3__TEXT: 'Javascript, CSS/LESS, HTML templating<br/>Photoshop<br/>Illustrator<br/>Sony A7 Mirrorless DSLR',

  CUSTOM_EDUCATION__SUBHEAD: 'Custom Work Education',
  CUSTOM_EDUCATION__DESC: 'A large part of Christy Natsumi\'s business is custom jewelry. While many customers scour the internet for an unbiased education on jewelry practices and prices, we saw an opportunity to educate potential customers on what the process would like when working with Christy, and to provide clarity into everything that goes into making a piece unique and meaningful. The education plays out chronologically; a jewelry journey peppered with in-progress photography.',
  CUSTOM_EDUCATION__WEBIMAGEPATH: 'work/christynatsumi/christynatsumi-3.jpg',
  CUSTOM_EDUCATION__MOBILEIMAGEPATH: 'work/christynatsumi/christynatsumi-3.jpg'
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
            <img width='100%' src='work/christynatsumi/christynatsumi-1.jpg' alt='portfolio'/>
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
            <img width='100%' src='work/christynatsumi/christynatsumi-2.jpg' alt='portfolio'/>
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
            shadowDepth={-15.99}
            isMobile={this.props.isMobile}
            padding={[1]}
          >
            <div className='button__text button__text--arrowRight'>Visit Christynatsumi.com</div>
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
            <img width='100%' src='work/christynatsumi/christynatsumi-mobile-1.jpg' alt='portfolio'/>
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
            <img width='100%' src='work/christynatsumi/christynatsumi-mobile-2.jpg' alt='portfolio'/>
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
            <img width='100%' src='work/christynatsumi/christynatsumi-mobile-3.jpg' alt='portfolio'/>
          </Block3d>
        </div>


        <ProjectGroup
          subhead={Content.CUSTOM_EDUCATION__SUBHEAD}
          desc={Content.CUSTOM_EDUCATION__DESC}
          isVideo={false}
          webImagePath={Content.CUSTOM_EDUCATION__WEBIMAGEPATH}
          mobileImagePath={Content.CUSTOM_EDUCATION__MOBILEIMAGEPATH}
          isMobile={this.props.isMobile}
        />

      </div>
    );
  }
});
