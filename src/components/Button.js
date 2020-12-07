import React from 'react';
import styled from 'styled-components';
import colors from '../config/constants';
import {TouchableOpacity} from 'react-native';

const Button = ({
  title,
  onPress,
  position,
  style,
  disabled,
  theme,
  children,
}) => {
  return (
    <ButtonShadow
      onPress={() => onPress()}
      theme={theme}
      style={{
        ...position,
        ...style,
      }}
      disabled={disabled}>
      <ButtonWrapper style={{...style}} theme={theme}>
        {title ? <ButtonTitle theme={theme}>{title}</ButtonTitle> : children}
      </ButtonWrapper>
    </ButtonShadow>
  );
};

const ButtonShadow = styled(TouchableOpacity)`
  width: 300px;
  height: 50px;
  box-shadow: -3px -3px 10px;
  border-radius: 20px;
  justify-content: center;
  elevation: 3;
  background-color: ${(props) => colors[props.theme].primary};
  shadow-color: ${(props) => colors[props.theme].lightShadow};
`;

const ButtonWrapper = styled.View`
  width: 100%;
  height: 50px;
  box-shadow: 3px 3px 10px;
  border-radius: 20px;
  justify-content: center;
  elevation: 3;
  background-color: ${(props) => colors[props.theme].primary};
  shadow-color: ${(props) => colors[props.theme].darkShadow};
`;

const ButtonTitle = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: ${(props) => colors[props.theme].accent};
`;

export default Button;
