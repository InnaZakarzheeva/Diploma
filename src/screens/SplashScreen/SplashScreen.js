/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Wrapper} from '../../config/styles';
import {Actions} from 'react-native-router-flux';
import {ActivityIndicator} from 'react-native';
import colors from '../../config/constants';
import TouchID from 'react-native-touch-id';

class SplashScreen extends Component {
  componentDidMount = () => {
    setTimeout(() => {
      // check user account
      // if user & chats.length > 0 => listOfConversation
      // if user & chats.length === 0 => share
      // if !user => welcome
      TouchID.isSupported()
        .then(() => Actions.fingerprint())
        .catch((error) => {
          console.log('TouchID not supported', error.message);
          // Actions.listOfConversations();
          Actions.welcome();
        });
      // Actions.welcome();
    }, 1000);
  };

  render() {
    return (
      <Wrapper style={{justifyContent: 'center'}}>
        <ActivityIndicator size="large" color={colors.white} />
      </Wrapper>
    );
  }
}

export default SplashScreen;
