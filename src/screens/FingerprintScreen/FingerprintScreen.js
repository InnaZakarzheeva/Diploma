import React, {Component} from 'react';
import {Wrapper, AlertTitle} from '../../config/styles';
import Alert from '../../components/Alert';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../config/constants';
import TouchID from 'react-native-touch-id';
import {IconWrapper} from './styles';
import {Actions} from 'react-native-router-flux';

const optionalConfigObject = {
  title: 'Touch ID for "beaver"',
  color: colors.primary,
  fallbackLabel: 'Show Passcode',
};

class FingerprintScreen extends Component {
  pressHandler = () => {
    TouchID.authenticate(
      'Confirm fingerprint to continue',
      optionalConfigObject,
    )
      .then((success) => {
        Actions.listOfConversations();
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
