/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Wrapper, AlertTitle} from '../../config/styles';
import Alert from '../../components/Alert';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../config/constants';
import {Dimensions} from 'react-native';

class FingerprintScreen extends Component {
  render() {
    return (
      <Wrapper>
        <Alert>
          <AlertTitle>Unlock with fingerprint</AlertTitle>
        </Alert>
        <Icon
          name="fingerprint" //name="fingerprint-off"
          size={120}
          color={colors.white}
          style={{
            position: 'absolute',
            top: Dimensions.get('screen').height / 2 - 60,
          }}
        />
      </Wrapper>
    );
  }
}

export default FingerprintScreen;
