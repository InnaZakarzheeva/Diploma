import React from 'react';
import {Actions} from 'react-native-router-flux';
import Button from '../../components/Button';
import {Wrapper} from '../../config/styles';
import Alert from '../../components/Alert';
import {Title, Subtitle, styles} from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {View} from 'react-native';
import colors from '../../config/constants';

export default class ShareScreen extends React.Component {
  render() {
    return (
      <Wrapper>
        <Alert style={styles.warning}>
          <Icon name="warning" color={colors.yellow} size={30} />
          <View>
            <Title>WARNING</Title>
            <Subtitle>Not secure!</Subtitle>
          </View>
        </Alert>
        <Icon
          name="sharealt"
          color={colors.white}
          size={120}
          style={styles.shareIcon}
        />
        <Button
          title="SHARE TO SOCIAL MEDIA"
          position={{position: 'absolute', bottom: 230}}
          onPress={() => {}}
        />
        <Button
          title="QR - CODE"
          position={{position: 'absolute', bottom: 150}}
          onPress={() => Actions.qr()}
        />
        <Button
          title="START CHATTING"
          position={{position: 'absolute', bottom: 70}}
          onPress={() => Actions.listOfConversations()}
        />
      </Wrapper>
    );
  }
}
