import React, { PropTypes } from 'react';
import Block3d from '../Block3d/Block3d';


export const ProjectPreview = React.createClass({
  propTypes: {
    route: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    snippet: PropTypes.string.isRequired,
    thumbnailPath: PropTypes.string.isRequired,
    isMobile: PropTypes.bool.isRequired
  },

  renderTitleHTML() {
    // to allow markup for the title...I like to break the title at just the right word.
    return {
      __html: this.props.title
    }
  },

  renderMobileThumbnail() {
    if (this.props.isMobile) {
      return (
        <Block3d
          cssClass='ProjectPreview__leftCol__thumb'
          width='100%'
          depth='0'
          z='0'
          isMobile={this.props.isMobile}
        >
          <img width='100%' src={this.props.thumbnailPath} alt='portfolio'/>
        </Block3d>
      )
    }
  },

  renderWebThumbnail() {
    if (!this.props.isMobile) {
      return (
        <div className='ProjectPreview__rightCol'>
          <Block3d
            width='100%'
            depth='16'
            z='0'
            noRight={false}
            noLeft={false}
            isMobile={this.props.isMobile}
          >
            <img width='100%' src={this.props.thumbnailPath} alt='portfolio'/>
          </Block3d>
        </div>
      )
    }
  },

  render() {
    return (
      <div className='ProjectPreview'>
        <div className='ProjectPreview__leftCol'>
          <Block3d
            cssClass='ProjectPreview__leftCol__title'
            depth='4'
            z='-4'
            noLeft={true}
            shadow={true}
            shadowDepth={-15.99}
            isMobile={this.props.isMobile}
          >
            <div className='ProjectPreview__leftCol__title__text' dangerouslySetInnerHTML={this.renderTitleHTML()} />
          </Block3d>

          {this.renderMobileThumbnail()}

          <Block3d
            cssClass='ProjectPreview__leftCol__snippet'
            width='100%'
            depth='8'
            z='-8'
            noLeft={true}
            isMobile={this.props.isMobile}
          >
            <p className='z8'>{this.props.snippet}</p>
          </Block3d>

          <div className='ProjectPreview__leftCol__routeWrapper'>
            <Block3d
              cssClass='ProjectPreview__leftCol__route button'
              route={this.props.route}
              depth='2'
              z='0'
              noLeft={true}
              shadow={true}
              shadowDepth={-15.99}
              isMobile={this.props.isMobile}
              padding={[0.75]}
            >
              <div className='button__text button__text--arrowRight'>Learn More</div>
            </Block3d>
          </div>
        </div>

        {this.renderWebThumbnail()}
      </div>
    )
  }
});