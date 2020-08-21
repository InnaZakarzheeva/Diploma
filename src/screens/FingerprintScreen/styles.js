import styled from 'styled-components';
import {TouchableOpacity, Dimensions} from 'react-native';

export const IconWrapper = styled(TouchableOpacity)({
  width: 120,
  height: 120,
  position: 'absolute',
  top: Dimensions.get('screen').height / 2 - 60,
});
