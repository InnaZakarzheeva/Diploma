import React from 'react';
import {Router, Scene, Tabs, Actions} from 'react-native-router-flux';
import WelcomeScreen from './WelcomeScreen/WelcomeScreen';

const RouterComponent = () => (
  <Router>
    <Scene key="root" hideNavBar>
      <Scene key="home" component={WelcomeScreen} />
    </Scene>
  </Router>
);

export default RouterComponent;
