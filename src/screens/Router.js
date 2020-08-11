import React from 'react';
import {Router, Scene, Tabs, Actions} from 'react-native-router-flux';
import WelcomeScreen from './WelcomeScreen/WelcomeScreen';
import ShareScreen from './ShareScreen/ShareScreen';
import QRScreen from './QRCode/QRCodeScreen';

const RouterComponent = () => (
  <Router>
    <Scene key="root" hideNavBar>
      <Scene key="welcome" component={WelcomeScreen} />
      <Scene key="share" component={ShareScreen} />
      <Scene key="qr" component={QRScreen} />
    </Scene>
  </Router>
);

export default RouterComponent;
