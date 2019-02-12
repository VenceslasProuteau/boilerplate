import React from 'react';
import {Trans} from '@lingui/react';

export default class App extends React.Component {

  foo() {
    return 'dummy';
  }

  render() {
    return <Trans id="global.appTitle" />;
  }
}