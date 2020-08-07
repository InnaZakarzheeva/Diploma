import React from 'react';
import CustomMessageInner, {Wrapper, CustomMessageOuter} from './styles';
import Button from '../../components/Button';

export default class WelcomeScreen extends React.Component {
  render() {
    return (
      <Wrapper>
        <CustomMessageOuter />
        <CustomMessageInner />
        <Button title="CREATE PROFILE" />
      </Wrapper>
    );
  }
}
