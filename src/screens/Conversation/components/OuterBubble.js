import React from 'react';
import styled from 'styled-components';
import {TouchableOpacity, View} from 'react-native';
import colors from '../../../config/constants';

const OuterBubble = ({theme, children}) => {
  return (
    <LightShadow
      style={{
        backgroundColor: colors[theme].primary,
        shadowColor: colors[theme].lightShadow,
      }}>
      <DarkShadow
        style={{
          backgroundColor: colors[theme].primary,
          shadowColor: colors[theme].darkShadow,
        }}>
        {children}
      </DarkShadow>
    </LightShadow>
  );
};

const LightShadow = styled(TouchableOpacity)`
  max-width: 300px;
  height: auto;
  box-shadow: -3px -3px 10px;
  border-radius: 15px;
  border-bottom-left-radius: 0px;
  justify-content: center;
  elevation: 3;
`;

const DarkShadow = styled(View)`
  width: 100%;
  padding: 5px 10px 5px 10px;
  height: auto;
  box-shadow: 3px 3px 10px;
  border-radius: 15px;
  border-bottom-left-radius: 0px;
  justify-content: center;
  elevation: 3;
`;

export default OuterBubble;
