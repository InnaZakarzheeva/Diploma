import React from 'react';
import {Wrapper, AlertTitle} from '../../config/styles';
import Alert from '../../components/Alert';
import Button from '../../components/Button';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import colors from '../../config/constants';

class QRScreen extends React.Component {
  render() {
    const {theme} = this.props;
    return (
      <Wrapper style={{backgroundColor: colors[theme].primary}}>
        <Alert theme={theme}>
          <AlertTitle style={{color: colors[theme].accent}}>
            Show QR-code your friend and start chatting
          </AlertTitle>
        </Alert>
        <Button
          title="START CHATTING"
          onPress={() => Actions.listOfConversations()}
          position={{position: 'absolute', bottom: 70}}
          theme={theme}
        />
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    theme: state.app.theme,
  };
};

export default connect(mapStateToProps, {})(QRScreen);
