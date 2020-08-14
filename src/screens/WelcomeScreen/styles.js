import React from 'react';
import InsetShadow from 'react-native-inset-shadow';
import styled from 'styled-components';
import colors from '../../config/constants';
import {View, StyleSheet, Dimensions, Text} from 'react-native';

const CustomMessageInner = () => (
  <View>
    <InsetShadow
      top={false}
      left={false}
      shadowOffset={10}
      shadowOpacity={10}
      elevation={10}
      shadowRadius={10}
      shadowColor={colors.lightShadow}
      containerStyle={styles.lightShadow}
    />
    <InsetShadow
      bottom={false}
      right={false}
      shadowOffset={10}
      shadowOpacity={10}
      elevation={10}
      shadowRadius={10}
      shadowColor={colors.darkShadow}
      containerStyle={styles.darkShadow}>
      <MessageText>Hi! How are you?</MessageText>
    </InsetShadow>
  </View>
);

export const CustomMessageOuter = () => (
  <View>
    <LightShadowLeft>
      <DarkShadowLeft>
        <MessageText>Ha*ks[%##ask?/</MessageText>
      </DarkShadowLeft>
    </LightShadowLeft>
  </View>
);

const MessageText = styled(Text)({
  fontSize: 16,
  color: colors.white,
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
  box-shadow: -3px -3px 10px ${colors.lightShadow};
  background: ${colors.primary};
  border-radius: 10px;
  border-bottom-left-radius: 0px;
  justify-content: center;
  align-items: center;
  elevation: 3;
`;

const DarkShadowLeft = styled.View`
  width: 200px;
  height: 50px;
  box-shadow: 3px 3px 10px ${colors.darkShadow};
  background: ${colors.primary};
  border-radius: 10px;
  border-bottom-left-radius: 0px;
  justify-content: center;
  align-items: center;
  elevation: 3;
`;

export default CustomMessageInner;
