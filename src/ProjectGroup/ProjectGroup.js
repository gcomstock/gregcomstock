import React, { PropTypes } from 'react';
import Block3d from '../Block3d/Block3d';


const ProjectGroup = React.createClass({
  propTypes: {
    subhead: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    isVideo: PropTypes.bool.isRequired,
    videoPath: PropTypes.string,
    webVideoRatio: PropTypes.number,
    mobileVideoRatio: PropTypes.number,
    isMobile: PropTypes.bool.isRequired
  },

  renderContentType() {
    const paddingBottom = this.props.isMobile ? this.props.mobileVideoRatio : this.props.webVideoRatio;

    if (this.props.isVideo) {
      return (
        <div className='ProjectGroup__video' style={{paddingBottom: paddingBottom + '%'}}>
          <iframe src={this.props.videoPath} allowFullScreen></iframe>

          <Block3d
            cssClass='ProjectGroup__video__block'
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
            <h2>{this.props.subhead}</h2>
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