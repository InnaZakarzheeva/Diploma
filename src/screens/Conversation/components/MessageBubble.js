import React from 'react';
import {Bubble} from 'react-native-gifted-chat';
import colors from '../../../config/constants';

const MessageBubble = ({props}) => (
    <Bubble
      {...props}
      wrapperStyle={{
        left: {
          padding: 5, 
          backgroundColor: colors.primary,
          shadowColor: colors.darkShadow,
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 10,
          shadowRadius: 3,
        },
        right: {
          padding: 5,
          backgroundColor: colors.primary,
          shadowColor: colors.lightShadow,
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 10,
          shadowRadius: 3,

          elevation: 3,
        },
      }}
      onLongPress={() => {}}
    />
);

export default MessageBubble;
