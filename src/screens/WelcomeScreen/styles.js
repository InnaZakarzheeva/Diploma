import React from 'react';
import InsetShadow from 'react-native-inset-shadow';
import styled from 'styled-components';
import colors from '../../config/constants';
import {View, StyleSheet, Dimensions, Text} from 'react-native';

const CustomMessageInner = ({theme}) => (
  <View>
    <InsetShadow
      top={false}
      left={false}
      shadowOffset={10}
      shadowOpacity={10}
      elevation={10}
      shadowRadius={10}
      shadowColor={colors[theme].lightShadow}
      containerStyle={styles.lightShadow}
    />
    <InsetShadow
      bottom={false}
      right={false}
      shadowOffset={10}
      shadowOpacity={10}
      elevation={10}
      shadowRadius={10}
      shadowColor={colors[theme].darkShadow}
      containerStyle={styles.darkShadow}>
      <MessageText style={{color: colors[theme].accent}}>
        Hi! How are you?
      </MessageText>
    </InsetShadow>
  </View>
);

export const CustomMessageOuter = ({theme}) => (
  <View>
    <LightShadowLeft
      style={{
        backgroundColor: colors[theme].primary,
        shadowColor: colors[theme].lightShadow,
      }}>
      <DarkShadowLeft
        style={{
          backgroundColor: colors[theme].primary,
          shadowColor: colors[theme].darkShadow,
        }}>
        <MessageText style={{color: colors[theme].accent}}>
          Ha*ks[%##ask?/
        </MessageText>
      </DarkShadowLeft>
    </LightShadowLeft>
  </View>
);

const MessageText = styled(Text)({
  fontSize: 16,
});

const styles = StyleSheet.create({
  lightShadow: {
    width: 200,
    height: 50,
    position: 'absolute',
    top: Dimensions.get('screen').height / 2.5,
    left: -20,
    borderRadius: 10,
    borderBottomRightRadius: 0,
  },
  darkShadow: {
    width: 200,
    height: 50,
    position: 'absolute',
    top: Dimensions.get('screen').height / 2.5,
    left: -20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const LightShadowLeft = styled.View`
  position: absolute;
  top: ${Dimensions.get('screen').height / 3.2}px;
  right: -20px;
  width: 200px;
  height: 50px;
  box-shadow: -3px -3px 10px;
  border-radius: 10px;
  border-bottom-left-radius: 0px;
  justify-content: center;
  align-items: center;
  elevation: 3;
`;

const DarkShadowLeft = styled.View`
  width: 200px;
  height: 50px;
  box-shadow: 3px 3px 10px;
  border-radius: 10px;
  border-bottom-left-radius: 0px;
  justify-content: center;
  align-items: center;
  elevation: 3;
`;

export default CustomMessageInner;
