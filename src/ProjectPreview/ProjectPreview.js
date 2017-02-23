import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Block3d from '../Block3d/Block3d';


export const ProjectPreview = React.createClass({
  propTypes: {
    route: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    snippet: PropTypes.string.isRequired,
    thumbnailPath: PropTypes.string.isRequired
  },

  render() {
    return (
      <div className='ProjectPreview'>
        <div className='ProjectPreview__leftCol'>
          <Block3d cssClass='ProjectPreview__leftCol__title' height='auto' depth='10' z='-4' noRight={true} noLeft={true}>
            <h1>{this.props.title}</h1>
          </Block3d>
          <Block3d cssClass='ProjectPreview__leftCol__snippet' width='100%' height='auto' depth='8' z='-6' noTop={true} noRight={true} noLeft={true}>
            <p className='snippet'>{this.props.snippet}</p>
          </Block3d>
          <Block3d cssClass='ProjectPreview__leftCol__route' route={this.props.route} width='auto' height='auto' depth='1' z='0' y='0' x='0' noRight={true} noLeft={true}>
            <h2>learn more</h2>
          </Block3d>
        </div>

        <div className='ProjectPreview__rightCol'>
          <Block3d width='100%' depth='14' z='0' noRight={true} noLeft={true}>
            <img width='100%' src={this.props.thumbnailPath} alt='portfolio'/>
            {/*
            <div className='Block3d__content__imgFrame' style={{
              width: '21rem',
              height: '13rem',
              backgroundImage: 'url(' + this.props.thumbnailPath + ')'
            }}></div>
            */}
          </Block3d>
        </div>
      </div>
    )
  }
});