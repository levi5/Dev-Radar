import React from 'react';
import Routes from './src/routes'
import {StatusBar, YellowBox} from 'react-native'

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket',
  'Unrecognized WebSocket',
  'Stack trace',
  'Remote debugger',
  'Debugger and device times'
])

export default function App() {
  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="#C1292E"/>
    <Routes/>
  </>
  );
}

