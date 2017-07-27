import React from 'react';
import Block3d from '../Block3d/Block3d';
import ProjectNugget from '../ProjectNugget/ProjectNugget';
import ProjectGroup from '../ProjectGroup/ProjectGroup';


export const Content = Object.freeze({
  ROUTE: '/project/riddickart',
  TITLE: 'Riddickart',
  EXTERNAL_URL: '//riddickart.com',

  PREVIEW_SNIPPET: 'Riddick has been creating grotesquely gorgeous illustrations since 1991, and has garnered a devoted following within the death metal community. I have been maintaining his site since 2009, occasionally adding new features and visual refreshes.',
  PREVIEW_THUMBNAILPATH: 'work/riddickart/tn.jpg',

  NUGGET1__SUBHEAD: 'Synopsis',
  NUGGET1__TEXT: 'Death metal thrives in the underground, with low-quality xeroxed posters stapled to grungy note boards. My aim was to create a site that best tapped into the culture of the scene, while placing Mark\'s work front and center.',
  NUGGET2__SUBHEAD: 'Role',
  NUGGET2__TEXT: '<b>Designer</b> - Website design<br/><b>Front-end Engineer</b> - Responsive Wordpress theme<br/>',
  NUGGET3__SUBHEAD: 'Technologies',
  NUGGET3__TEXT: 'Photoshop<br/>Illustrator<br/>Javascript, HTML, CSS<br/>Wordpress PHP templating'
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
            <img width='100%' src='work/riddickart/riddickart-1.jpg' alt='portfolio'/>
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
            <img width='100%' src='work/riddickart/riddickart-2.jpg' alt='portfolio'/>
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
            <div className='button__text button__text--arrowRight'>Visit Riddickart.com</div>
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
            <img width='100%' src='work/riddickart/riddickart-mobile-1.jpg' alt='portfolio'/>
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
            <img width='100%' src='work/riddickart/riddickart-mobile-2.jpg' alt='portfolio'/>
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
            <img width='100%' src='work/riddickart/riddickart-mobile-3.jpg' alt='portfolio'/>
          </Block3d>
        </div>
      </div>
    );
  }
});
