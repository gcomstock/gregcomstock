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
                However, I don't strive to be a full-time, full-stack software engineer; my passion lies in visual problem
                solving. If you're looking for an empathetic designer and developer that can bring a user interface to life,
                always keeps the user experience in mind, and can talk at length with designers about the technical implications of
                creative decisions, <a href='https://www.linkedin.com/in/gregcomstock/' target='_blank'>we should talk</a>!
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
});
