import React from 'react';
import {Wrapper, CustomMessageOuter, CustomMessageInner} from './styles';
import Button from '../../components/Button';

export default class WelcomeScreen extends React.Component {
  render() {
    return (
      <Wrapper>
        <CustomMessageOuter />
        <CustomMessageInner />
        <Button title="START CHATTING" />
      </Wrapper>
    );
  }
}
