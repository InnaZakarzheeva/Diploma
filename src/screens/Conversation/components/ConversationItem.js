import React from 'react';
import InsetShadow from 'react-native-inset-shadow';
import colors from '../../../config/constants';
import {styles, ConversationName} from '../styles';
import {View, TouchableOpacity} from 'react-native';
import Button from '../../../components/Button';
import {Actions} from 'react-native-router-flux';

const ConversationItem = ({chat, theme}) => (
  <TouchableOpacity
    onPress={() => Actions.conversation({chat})}
    style={{...styles.itemWrapper, backgroundColor: colors[theme].primary}}>
    <InnerBlock theme={theme}>
      <Button
        style={styles.conversationAvatar}
        onPress={() => {}}
        title={`${chat.name.length ? chat.name.charAt(0) : chat.id.charAt(0)}`}
        theme={theme}
        disabled={true}
      />
      <ConversationName style={{color: colors[theme].accent}}>
        {chat.name.length ? chat.name : chat.id}
      </ConversationName>
    </InnerBlock>
  </TouchableOpacity>
);

export default ConversationItem;

const InnerBlock = ({theme, children}) => (
  <View>
    <InsetShadow
      top={false}
      left={false}
      shadowOffset={10}
      shadowOpacity={10}
      elevation={10}
      shadowRadius={10}
      shadowColor={colors[theme].lightShadow}
      containerStyle={styles.conversationBlock}>
      <InsetShadow
        bottom={false}
        right={false}
        shadowOffset={10}
        shadowOpacity={10}
        elevation={10}
        shadowRadius={10}
        shadowColor={colors[theme].darkShadow}
        containerStyle={{
          ...styles.conversationBlock,
          ...styles.conversationInnerBlock,
        }}>
        {children}
      </InsetShadow>
    </InsetShadow>
  </View>
);
