import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {InputToolbar, Composer, Send} from 'react-native-gifted-chat';
import colors from '../../../config/constants';
import InsetShadow from 'react-native-inset-shadow';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  inputToolbar: {
    height: 60,
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
    alignSelf: 'center',
  },
});

const InputToolbarComponent = ({theme, giftedProps}) => {
  return (
    <InputToolbar
      {...giftedProps}
      containerStyle={{
        ...styles.inputToolbar,
        backgroundColor: colors[theme].primary,
      }}
      renderComposer={(props1) => (
        <ComposerWrapper theme={theme}>
          <Composer
            {...props1}
            textInputStyle={{...styles.textInput, color: colors[theme].accent}}
          />
        </ComposerWrapper>
      )}
      renderSend={(sendProps) => (
        <Send {...sendProps} containerStyle={styles.sendButton}>
          <Icon name="send-outline" color={colors[theme].accent} size={25} />
        </Send>
      )}
    />
  );
};

const ComposerWrapper = ({theme, children}) => (
  <View>
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
  </View>
);

export default InputToolbarComponent;
