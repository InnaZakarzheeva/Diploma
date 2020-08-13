/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Wrapper, AlertTitle} from '../../config/styles';
import Alert from '../../components/Alert';
import Button from '../../components/Button';
import {Actions} from 'react-native-router-flux';

export default class QRScreen extends React.Component {
  render() {
    return (
      <Wrapper>
        <Alert>
          <AlertTitle>Show QR-code your friend and start chatting</AlertTitle>
        </Alert>
        <Button
          title="START CHATTING"
          onPress={() => Actions.listOfConversations()}
          position={{position: 'absolute', bottom: 70}}
        />
      </Wrapper>
    );
  }
}
