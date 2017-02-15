import React from 'react';

//const hoc = React.createClass({
//  render() {
//    return (
//      <div className="test">
//        {this.props.children}
//      </div>
//    );
//  }
//});
//
//
//export default hoc;


export default function hoc(WrappedComponent) {
  // information that we don’t want everything to access
  //var secretUserInfo = {
  //  name: 'Jack Franklin',
  //  favouriteColour: 'blue'
  //};

  //<Component user={secretUserInfo} {...props} />

  // return a newly generated React component
  // using a functional, stateless component
  return function(props) {
    // pass in the user variable as a property, along with
    // all the other props that we might be given
    return (
      <div className='App__body'>
        <div className='App__body__scrollable'>
          <div className={App__body__scrollable__wrapper}>
            <div className='App__body__scrollable__wrapper__leftFrame'>
              <Block3d width='20rem' height='100%' depth='10' z='-4' />
            </div>



            <WrappedComponent {...props} />



            <div className='App__body__scrollable__wrapper__rightFrame'>
              <Block3d width='20rem' height='100%' depth='10' z='-4' />
            </div>
          </div>
        </div>
      </div>
    )
  }
}