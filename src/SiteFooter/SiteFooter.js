import React, { PropTypes } from 'react';


export const SiteFooter = React.createClass({
  render() {
    return (
      <div className='SiteFooter'>
        <div className='SiteFooter__content'>
          <h2>Hello World,</h2>
          <div className='SiteFooter__contentWrap'>
            <div className='SiteFooter__content__col'>
              <p>
                I'm Greg, and I hold a life-long passion for good design. With over seven years of industry experience as a designer,
                I've seen work have great impact, and undergo great compromise. I've come to realize that preserving
                the integrity and vision of a product's design -- how it feels, its inertia, and its flow -- is most effective
                with an understanding of the final implementation. Seeking this knowledge led me to pick up a solid
                understanding of front-end development, and made me realize just how creative code can be.
              </p>
            </div>
            <div className='SiteFooter__content__col'>
              <p>
                However, I don't strive to be a full-time, full-stack software engineer. My passion lies in visual problem
                solving, bringing user interfaces to life, always keeping the user experience in mind, and informing fellow designers
                about the technical implications of creative decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
});
