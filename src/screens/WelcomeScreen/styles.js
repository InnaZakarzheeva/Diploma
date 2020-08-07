import React from 'react';
import InsetShadow from 'react-native-inset-shadow';
import styled from 'styled-components';
import colors from '../../config/constants';
import {View, StyleSheet, Dimensions} from 'react-native';

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
      containerStyle={styles.lightShadowRight}
    />
    <InsetShadow
      bottom={false}
      right={false}
      shadowOffset={10}
      shadowOpacity={10}
      elevation={10}
      shadowRadius={10}
      shadowColor={colors.darkShadow}
      containerStyle={styles.darkShadowRight}
    />
  </View>
);

export const CustomMessageOuter = () => (
  <View>
    <InsetShadow
      top={false}
      left={false}
      shadowOffset={10}
      shadowOpacity={10}
      elevation={10}
      shadowRadius={10}
      shadowColor={colors.lightShadow}
      containerStyle={styles.lightShadowLeft}
    />
    <InsetShadow
      bottom={false}
      right={false}
      shadowOffset={10}
      shadowOpacity={10}
      elevation={10}
      shadowRadius={10}
      shadowColor={colors.darkShadow}
      containerStyle={styles.darkShadowLeft}
    />
  </View>
);

export const Wrapper = styled.View`
  flex: 1;
  background: ${colors.primary};
  align-items: center;
`;

const styles = StyleSheet.create({
  lightShadowRight: {
    width: 200,
    height: 50,
    position: 'absolute',
    top: Dimensions.get('screen').height / 2.5,
    right: 0,
    borderRadius: 10,
    borderBottomRightRadius: 0,
  },
  darkShadowRight: {
    width: 200,
    height: 50,
    position: 'absolute',
    top: Dimensions.get('screen').height / 2.5 - 5,
    right: 0,
    borderRadius: 10,
  },
  lightShadowLeft: {
    width: 200,
    height: 50,
    position: 'absolute',
    top: Dimensions.get('screen').height / 3,
    left: 0,
    borderRadius: 10,
    borderBottomLeftRadius: 0,
  },
  darkShadowLeft: {
    width: 200,
    height: 50,
    position: 'absolute',
    left: 0,
    top: Dimensions.get('screen').height / 3 - 5,
    borderRadius: 10,
  },
});

export default CustomMessageInner;
