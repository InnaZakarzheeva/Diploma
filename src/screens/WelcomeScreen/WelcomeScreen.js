import React from 'react';
import CustomMessageInner, {CustomMessageOuter} from './styles';
import {Wrapper} from '../../config/styles';
import Button from '../../components/Button';
import {Actions} from 'react-native-router-flux';
import {StyleSheet} from 'react-native';

export default class WelcomeScreen extends React.Component {
  render() {
    return (
      <Wrapper>
        <CustomMessageOuter />
        <CustomMessageInner />
        <Button
          title="CREATE PROFILE"
          onPress={() => Actions.share()}
          position={styles.buttonPosition}
        />
      </Wrapper>
    );
  }
}

const styles = StyleSheet.create({
  buttonPosition: {
    position: 'absolute',
    bottom: 70,
  },
});
