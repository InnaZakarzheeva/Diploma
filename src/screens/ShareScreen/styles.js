import styled from 'styled-components';
import {Text} from 'react-native';
import colors from '../../config/constants';

export const Title = styled(Text)({
  width: 300,
  height: 21,
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: 18,
  lineHeight: 21,
  textAlign: 'center',
  color: colors.yellow,
});

export const Subtitle = styled(Text)({
  width: 300,
  height: 15,
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: 14,
  lineHeight: 16,
  textAlign: 'center',
  color: colors.yellow,
});
