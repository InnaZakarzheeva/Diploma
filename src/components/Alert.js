import React from 'react';
import InsetShadow from 'react-native-inset-shadow';
import colors from '../config/constants';
import {StyleSheet, View} from 'react-native';

const Alert = ({style, theme, children, wrapperStyle}) => {
  return (
    <View style={styles.wrapper}>
      <InsetShadow
        top={false}
        left={false}
        shadowOffset={10}
        shadowOpacity={10}
        elevation={10}
        shadowRadius={10}
        shadowColor={colors[theme].lightShadow}
        containerStyle={{...styles.lightShadow, ...(wrapperStyle || {})}}
        children={<View />}
      />
      <InsetShadow
        bottom={false}
        right={false}
        shadowOffset={10}
        shadowOpacity={10}
        elevation={10}
        shadowRadius={10}
        shadowColor={colors[theme].darkShadow}
        containerStyle={{...styles.darkShadow, ...style}}>
        {children}
      </InsetShadow>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lightShadow: {
    width: 320,
    height: 60,
    position: 'absolute',
    top: 70,
    borderRadius: 20,
  },
  darkShadow: {
    width: 320,
    height: 60,
    position: 'absolute',
    top: 71,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Alert;
