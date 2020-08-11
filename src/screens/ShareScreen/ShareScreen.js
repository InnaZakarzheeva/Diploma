/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Actions} from 'react-native-router-flux';
import Button from '../../components/Button';
import {Wrapper} from '../../config/styles';
import Alert from '../../components/Alert';
import {Title, Subtitle} from './styles';

export default class ShareScreen extends React.Component {
  render() {
    return (
      <Wrapper>
        <Alert>
          <Title>WARNING</Title>
          <Subtitle>Not secure!</Subtitle>
        </Alert>
        <Button
          title="SHARE TO SOCIAL MEDIA"
          style={{position: 'absolute', bottom: 230}}
          onPress={() => {}}
        />
        <Button
          title="QR - CODE"
          style={{position: 'absolute', bottom: 150}}
          onPress={() => Actions.qr()}
        />
        <Button
          title="START CHATTING"
          style={{position: 'absolute', bottom: 70}}
          onPress={() => {}}
        />
      </Wrapper>
    );
  }
}
