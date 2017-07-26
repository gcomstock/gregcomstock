import React, { PropTypes } from 'react';


export const SiteFooter = React.createClass({
  render() {
    return (
      <div className='SiteFooter'>
        <div className='SiteFooter__content'>
          <h2>Hi! I'm Greg</h2>
          <div className='SiteFooter__contentWrap'>
            <div className='SiteFooter__content__col'>
              <p>
                I hold a lifelong passion for good design. With over seven years of industry experience as a designer,
                it became increasingly important to me to preserve the integrity and vision of a product's design.
                How a product feels, its inertia, and its flow, is best expressed with an understanding
                of the final implementation. Seeking this knowledge led me down the path of front-end development,
                and made me realize just how creative code can be.
              </p>
            </div>
            <div className='SiteFooter__content__col'>
              <p>
                However, I'm not striving to be a full-time, full-stack software engineer; my passion lies in solving visual,
                user-facing challenges. So if you're looking for product-focused, empathetic designer and developer
                that can bring a user interface to life, talk at length with other team members about what can and can't be done
                under what time frames, and always has the user experience at the forefront of their mind, &nbsp;
                <a href='https://www.linkedin.com/in/gregcomstock/' target='_blank'>we should talk</a>!
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
});
