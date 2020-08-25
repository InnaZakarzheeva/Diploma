import React from 'react';
import InsetShadow from 'react-native-inset-shadow';
import colors from '../../../config/constants';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  lightShadow: {
    maxWidth: 300,
    height: 'auto',
    borderRadius: 15,
    borderBottomRightRadius: 0,
  },
  darkShadow: {
    maxWidth: 300,
    height: 'auto',
    borderRadius: 15,
    borderBottomRightRadius: 0,
    paddingLeft: 10,
    paddingBottom: 5,
    paddingRight: 10,
    paddingTop: 5,
  },
});

const InnerBubble = ({theme, children}) => {
  return (
    <InsetShadow
      top={false}
      left={false}
      shadowOffset={10}
      shadowOpacity={10}
      elevation={10}
      shadowRadius={10}
      shadowColor={colors[theme].lightShadow}
      containerStyle={styles.lightShadow}>
      <InsetShadow
        bottom={false}
        right={false}
        shadowOffset={10}
        shadowOpacity={10}
        elevation={10}
        shadowRadius={10}
        shadowColor={colors[theme].darkShadow}
        containerStyle={styles.darkShadow}>
        {children}
      </InsetShadow>
    </InsetShadow>
  );
};

export default InnerBubble;
