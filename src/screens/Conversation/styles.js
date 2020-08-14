import {StyleSheet, View, Dimensions, Text} from 'react-native';
import styled from 'styled-components';
import colors from '../../config/constants';

export const styles = StyleSheet.create({
  label: {
    width: 200,
    borderRadius: 10,
  },
  theme: {
    width: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemWrapper: {
    backgroundColor: colors.primary,
    width: '100%',
    height: 80,
  },
  conversationBlock: {
    width: Dimensions.get('screen').width - 50,
    height: 60,
    borderRadius: 15,
  },
  conversationInnerBlock: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: -1,
  },
  conversationAvatar: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  conversationsList: {
    width: '100%',
    justifyContent: 'center',
  },
  addConversationButton: {
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const Header = styled(View)({
  width: '100%',
  height: 140,
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  alignItems: 'center',
});

export const ConversationName = styled(Text)({
  width: Dimensions.get('screen').width - 150,
  fontSize: 16,
  fontStyle: 'normal',
  fontWeight: '400',
  color: colors.white,
});
