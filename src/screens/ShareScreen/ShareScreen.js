import React from 'react';
import {Actions} from 'react-native-router-flux';
import Button from '../../components/Button';
import {Wrapper} from '../../config/styles';
import Alert from '../../components/Alert';
import {Title, Subtitle, styles} from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {View} from 'react-native';
import colors from '../../config/constants';
import {connect} from 'react-redux';
import Share from 'react-native-share';

class ShareScreen extends React.Component {
  render() {
    const {theme} = this.props;
    const shareUserId = () => {
      Share.open({
        title: 'Beaver: add new connection',
        message:
          'Click by following link to start chatting! https://demolink.com',
      });
    };
    return (
      <Wrapper style={{backgroundColor: colors[theme].primary}}>
        <Alert style={styles.warning} theme={theme}>
          <Icon name="warning" color={colors[theme].yellow} size={30} />
          <View>
            <Title style={{color: colors[theme].yellow}}>WARNING</Title>
            <Subtitle style={{color: colors[theme].yellow}}>
              Not secure!
            </Subtitle>
          </View>
        </Alert>
        <Icon
          name="sharealt"
          color={colors[theme].accent}
          size={120}
          style={styles.shareIcon}
        />
        <Button
          title="SHARE TO SOCIAL MEDIA"
          position={{position: 'absolute', bottom: 230}}
          onPress={shareUserId}
          theme={theme}
        />
        <Button
          title="QR - CODE"
          position={{position: 'absolute', bottom: 150}}
          onPress={() => Actions.qr()}
          theme={theme}
        />
        <Button
          title="START CHATTING"
          position={{position: 'absolute', bottom: 70}}
          onPress={() => Actions.listOfConversations()}
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

export default connect(mapStateToProps, {})(ShareScreen);
