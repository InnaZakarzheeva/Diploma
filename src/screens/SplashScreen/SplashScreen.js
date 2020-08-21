/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Wrapper} from '../../config/styles';
import {Actions} from 'react-native-router-flux';
import {ActivityIndicator} from 'react-native';
import colors from '../../config/constants';

class SplashScreen extends Component {
  componentDidMount = () => {
    setTimeout(() => {
      Actions.fingerprint(); // add check to user
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
