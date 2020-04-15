import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class hoblist extends Component {
  render() {
    return (
      <WebView
        source={{ uri: 'https://hoblist.com' }}
        style={{ marginTop: 20 }}
      />
    );
  }
}