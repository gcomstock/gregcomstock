import React, { Component } from 'react';
import './BaseView.css';

class BaseView extends Component {
  componentWillMount() {
    console.log('baseview class will mount...scroll to top here?');
  }
}

export default BaseView;