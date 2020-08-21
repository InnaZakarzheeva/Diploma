import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {InputToolbar, Composer, Send} from 'react-native-gifted-chat';
import colors from '../../config/constants';
import InsetShadow from 'react-native-inset-shadow';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  inputToolbar: {
    height: 60,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  sendButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lightShadow: {
    width: Dimensions.get('screen').width - 50,
    height: 40,
    borderRadius: 10,
  },
  darkShadow: {
    width: Dimensions.get('screen').width - 50,
    height: 40,
    borderRadius: 10,
  },
  textInput: {
    width: '95%',
    textAlign: 'left',
    color: colors.white,
    alignSelf: 'center',
  },
});

const InputToolbarComponent = ({props}) => {
  return (
    <InputToolbar
      {...props}
      containerStyle={styles.inputToolbar}
      renderComposer={(props1) => (
        <ComposerWrapper>
          <Composer {...props1} textInputStyle={styles.textInput} />
        </ComposerWrapper>
      )}
      renderSend={(sendProps) => (
        <Send {...sendProps} containerStyle={styles.sendButton}>
          <Icon name="send-outline" color={colors.white} size={25} />
        </Send>
      )}
    />
  );
};

const ComposerWrapper = ({children}) => (
  <View>
    <InsetShadow
      top={false}
      left={false}
      shadowOffset={10}
      shadowOpacity={10}
      elevation={10}
      shadowRadius={10}
      shadowColor={colors.lightShadow}
      containerStyle={styles.lightShadow}>
      <InsetShadow
        bottom={false}
        right={false}
        shadowOffset={10}
        shadowOpacity={10}
        elevation={10}
        shadowRadius={10}
        shadowColor={colors.darkShadow}
        containerStyle={styles.darkShadow}>
        {children}
      </InsetShadow>
    </InsetShadow>
  </View>
);

export default InputToolbarComponent;
