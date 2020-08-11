import React from 'react';
import styled from 'styled-components';
import colors from '../config/constants';
import {TouchableOpacity} from 'react-native';

const Button = ({title, onPress, style}) => {
  return (
    <ButtonShadow onPress={() => onPress()} style={{...style}}>
      <ButtonWrapper>
        <ButtonTitle>{title}</ButtonTitle>
      </ButtonWrapper>
    </ButtonShadow>
  );
};

const ButtonShadow = styled(TouchableOpacity)`
  width: 300px;
  height: 50px;
  box-shadow: -3px -3px 10px ${colors.lightShadow};
  background: ${colors.primary};
  border-radius: 20px;
  justify-content: center;
`;

const ButtonWrapper = styled.View`
  width: 300px;
  height: 50px;
  box-shadow: 3px 3px 10px ${colors.darkShadow};
  background: ${colors.primary};
  border-radius: 20px;
  justify-content: center;
`;

const ButtonTitle = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: ${colors.white};
`;

export default Button;
