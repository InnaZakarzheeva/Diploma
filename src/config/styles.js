import styled from 'styled-components';
import {View, Text} from 'react-native';

export const Wrapper = styled(View)({
  flex: 1,
  alignItems: 'center',
});

export const AlertTitle = styled(Text)({
  width: '60%',
  fontSize: 14,
  lineHeight: 16,
  textAlign: 'center',
  fontStyle: 'normal',
  fontWeight: 'normal',
});
