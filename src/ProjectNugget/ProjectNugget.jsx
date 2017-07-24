import React, { PropTypes } from 'react';
import Block3d from '../Block3d/Block3d';
import Utils from '../Utils';


const ProjectNugget = React.createClass({
  propTypes: {
    subhead: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    isMobile: PropTypes.bool.isRequired
  },

  render() {
    return (
      <div className='ProjectNugget'>
        <Block3d
          cssClass='ProjectNugget__subhead'
          width='100%'
          height='auto'
          depth='8'
          z='0'
          noRight={true}
          padding={[1.5,1.5,1.5,1.25]}
          shadow={true}
          shadowDepth={-16}
          isMobile={this.props.isMobile}
        >
          <h2>{this.props.subhead}</h2>
        </Block3d>

        <Block3d
          cssClass='ProjectNugget__text'
          width='100%'
          height='auto'
          depth='6'
          z='-2'
          noRight={true}
          shadow={true}
          shadowDepth={-16}
          isMobile={this.props.isMobile}
        >
          <p className='z4' dangerouslySetInnerHTML={Utils.renderStringAsHTML(this.props.text)}></p>
        </Block3d>
      </div>
    )
  }
});

export default ProjectNugget;