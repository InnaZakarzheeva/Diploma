import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import WelcomeScreen from './WelcomeScreen/WelcomeScreen';
import ShareScreen from './ShareScreen/ShareScreen';
import QRScreen from './QRCode/QRCodeScreen';
import AllConversationScreen from './Conversation/AllConversationScreen';
import ConversationScreen from './Conversation/ConversationScreen';
import FingerprintScreen from './FingerprintScreen/FingerprintScreen';
import SplashScreen from './SplashScreen/SplashScreen';

const RouterComponent = () => (
  <Router>
    <Scene key="root" hideNavBar>
      <Scene key="splash" component={SplashScreen} />
      <Scene key="welcome" component={WelcomeScreen} />
      <Scene key="fingerprint" component={FingerprintScreen} />
      <Scene key="share" component={ShareScreen} />
      <Scene key="qr" component={QRScreen} />
      <Scene key="listOfConversations" component={AllConversationScreen} />
      <Scene key="conversation" component={ConversationScreen} />
    </Scene>
  </Router>
);

export default RouterComponent;
