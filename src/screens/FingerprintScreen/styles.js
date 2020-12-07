import styled from 'styled-components';
import {TouchableOpacity, Dimensions} from 'react-native';

const {height} = Dimensions.get('screen');

export const IconWrapper = styled(TouchableOpacity)({
  width: 120,
  height: 120,
  position: 'absolute',
  top: height / 2 - 60,
});
