/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Wrapper} from '../../config/styles';
import {Actions} from 'react-native-router-flux';
import {ActivityIndicator} from 'react-native';
import colors from '../../config/constants';
import TouchID from 'react-native-touch-id';
import {connect} from 'react-redux';
import {setAppTheme} from '../../actions/index';

class SplashScreen extends Component {
  componentDidMount = () => {
    this.props.setAppTheme();
    setTimeout(() => {
      // check user account
      // if user & chats.length > 0 => listOfConversation
      // if user & chats.length === 0 => share
      // if !user => welcome
      // TouchID.isSupported()
      //   .then(() => Actions.fingerprint())
      //   .catch((error) => {
      //     console.log('TouchID not supported', error.message);
      //     // Actions.listOfConversations();
      //     Actions.welcome();
      //   });
      Actions.welcome();
    }, 1000);
  };

  render() {
    const {theme} = this.props;
    console.log(theme);
    return (
      <Wrapper
        style={{
          justifyContent: 'center',
          backgroundColor: colors[theme].primary,
        }}>
        <ActivityIndicator size="large" color={colors[theme].accent} />
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    theme: state.app.theme,
  };
};

export default connect(mapStateToProps, {setAppTheme})(SplashScreen);
