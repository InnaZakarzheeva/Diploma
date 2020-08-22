import styled from 'styled-components';
import {View, Text} from 'react-native';
import colors from './constants';

export const Wrapper = styled(View)({
  flex: 1,
  backgroundColor: colors.primary,
  alignItems: 'center',
});

export const AlertTitle = styled(Text)({
  width: '60%',
  color: colors.white,
  fontSize: 14,
  lineHeight: 16,
  textAlign: 'center',
  fontStyle: 'normal',
  fontWeight: 'normal',
});
