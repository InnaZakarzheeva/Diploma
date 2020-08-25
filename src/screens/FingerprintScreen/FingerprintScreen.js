import React, {Component} from 'react';
import {Wrapper, AlertTitle} from '../../config/styles';
import Alert from '../../components/Alert';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../config/constants';
import TouchID from 'react-native-touch-id';
import {IconWrapper} from './styles';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

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
    const {theme} = this.props;
    return (
      <Wrapper style={{backgroundColor: colors[theme].primary}}>
        <Alert theme={theme}>
          <AlertTitle style={{color: colors[theme].accent}}>
            Unlock with fingerprint
          </AlertTitle>
          <AlertTitle style={{color: colors[theme].accent}}>
            (Please, click on icon)
          </AlertTitle>
        </Alert>
        <IconWrapper onPress={() => this.pressHandler()}>
          <Icon
            name="fingerprint" //name="fingerprint-off"
            size={120}
            color={colors[theme].white}
          />
        </IconWrapper>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    theme: state.app.theme,
  };
};

export default connect(mapStateToProps, {})(FingerprintScreen);
