import React from 'react';
import CustomMessageInner, {CustomMessageOuter} from './styles';
import {Wrapper} from '../../config/styles';
import Button from '../../components/Button';
import {Actions} from 'react-native-router-flux';
import {StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import colors from '../../config/constants';

class WelcomeScreen extends React.Component {
  render() {
    const {theme} = this.props;
    return (
      <Wrapper style={{backgroundColor: colors[theme].primary}}>
        <CustomMessageOuter theme={theme} />
        <CustomMessageInner theme={theme} />
        <Button
          title="CREATE PROFILE"
          onPress={() => Actions.share()}
          position={styles.buttonPosition}
          theme={theme}
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

const mapStateToProps = (state) => {
  return {
    theme: state.app.theme,
  };
};

export default connect(mapStateToProps, {})(WelcomeScreen);
