import React from 'react';
import {Bubble} from 'react-native-gifted-chat';
import colors from '../../../config/constants';

const MessageBubble = ({theme, ...props}) => (
  <Bubble
    {...props}
    wrapperStyle={{
      left: {
        padding: 5,
        backgroundColor: colors[theme].primary,
      },
      right: {
        padding: 5,
        backgroundColor: colors[theme].primary,
      },
    }}
    textStyle={{
      left: {
        color: colors[theme].accent,
      },
      right: {
        color: colors[theme].accent,
      },
    }}
    onLongPress={() => {}}
  />
);

export default MessageBubble;
