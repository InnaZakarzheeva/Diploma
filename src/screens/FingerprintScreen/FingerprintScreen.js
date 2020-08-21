import React, {Component} from 'react';
import {Wrapper, AlertTitle} from '../../config/styles';
import Alert from '../../components/Alert';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../config/constants';
import TouchID from 'react-native-touch-id';
import {IconWrapper} from './styles';

const optionalConfigObject = {
  title: 'Authentication Required', // Android
  color: '#e00606', // Android,
  fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
};

class FingerprintScreen extends Component {
  pressHandler = () => {
    TouchID.authenticate('unlock', optionalConfigObject)
      .then((success) => {
        console.log('Authenticated Successfully', success);
      })
      .catch((error) => {
        console.log('Authentication Failed', error);
      });
  };

  render() {
    return (
      <Wrapper>
        <Alert>
          <AlertTitle>Unlock with fingerprint</AlertTitle>
          <AlertTitle>(Please, click on icon)</AlertTitle>
        </Alert>
        <IconWrapper onPress={() => this.pressHandler()}>
          <Icon
            name="fingerprint" //name="fingerprint-off"
            size={120}
            color={colors.white}
          />
        </IconWrapper>
      </Wrapper>
    );
  }
}

export default FingerprintScreen;
