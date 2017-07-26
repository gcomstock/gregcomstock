import React, { PropTypes } from 'react';
import Block3d from '../Block3d/Block3d';
import Utils from '../Utils';


const ProjectGroup = React.createClass({
  propTypes: {
    subhead: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    isVideo: PropTypes.bool.isRequired,
    videoPath: PropTypes.string,
    webVideoRatio: PropTypes.number,
    mobileVideoRatio: PropTypes.number,
    webImagePath: PropTypes.string,
    mobileImagePath: PropTypes.string,
    isMobile: PropTypes.bool.isRequired
  },

  renderContentType() {

    if (this.props.isVideo) {
      const paddingBottom = this.props.isMobile ? this.props.mobileVideoRatio : this.props.webVideoRatio;

      return (
        <div className='ProjectGroup__rightCol' style={{paddingBottom: paddingBottom + '%'}}>
          <iframe src={this.props.videoPath} allowFullScreen></iframe>

          <Block3d
            cssClass='ProjectGroup__rightCol__videoBgBlock'
            width='100%'
            height='100%'
            depth='16'
            z='0'
            noLeft={true}
            noRight={true}
            isMobile={this.props.isMobile}
          >
          </Block3d>
        </div>
      )
    }

    if (!this.props.isVideo) {
      const imgPath = this.props.isMobile ? this.props.mobileImagePath : this.props.webImagePath;

      return (
        <div className='ProjectGroup__rightCol'>
          <Block3d
            width='100%'
            depth='16'
            z='0'
            noLeft={true}
            noRight={true}
            isMobile={this.props.isMobile}
          >
            <img width='100%' src={imgPath} alt='portfolio'/>
          </Block3d>
        </div>
      )
    }

  },

  render() {
    return (
      <div className='ProjectGroup'>
        <div className='ProjectGroup__leftCol'>
          <Block3d
            cssClass='ProjectGroup__leftCol__subhead'
            depth='4'
            z='0'
            noLeft={true}
            shadow={true}
            shadowDepth={-16}
            isMobile={this.props.isMobile}
          >
            <h2 dangerouslySetInnerHTML={Utils.renderStringAsHTML(this.props.subhead)}></h2>
          </Block3d>

          <Block3d
            cssClass='ProjectGroup__leftCol__text'
            depth='4'
            z='-2'
            noLeft={true}
            shadow={true}
            shadowDepth={-16}
            isMobile={this.props.isMobile}
          >
            <p className='z4'>{this.props.desc}</p>
          </Block3d>
        </div>

        {this.renderContentType()}

      </div>
    )
  }
});

export default ProjectGroup;
