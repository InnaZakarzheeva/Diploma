/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Wrapper, AlertTitle} from '../../config/styles';
import Alert from '../../components/Alert';
import Button from '../../components/Button';

export default class QRScreen extends React.Component {
  render() {
    return (
      <Wrapper>
        <Alert>
          <AlertTitle>Show QR-code your friend and start chatting</AlertTitle>
        </Alert>
        <Button
          title="START CHATTING"
          onPress={() => {}}
          style={{position: 'absolute', bottom: 70}}
        />
      </Wrapper>
    );
  }
}
