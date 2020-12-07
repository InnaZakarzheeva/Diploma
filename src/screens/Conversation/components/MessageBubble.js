import React from 'react';
import {Bubble} from 'react-native-gifted-chat';
import {connect} from 'react-redux';
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

const mapStateToProps = (state) => {
  return {
    theme: state.app.theme,
  };
};

export default connect(mapStateToProps, {})(MessageBubble);
