import styled from 'styled-components';
import {Text, StyleSheet, Dimensions} from 'react-native';

export const Title = styled(Text)({
  width: 200,
  height: 21,
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: 18,
  lineHeight: 21,
  textAlign: 'center',
});

export const Subtitle = styled(Text)({
  width: 200,
  height: 15,
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: 14,
  lineHeight: 16,
  textAlign: 'center',
});

export const styles = StyleSheet.create({
  warning: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  shareIcon: {
    position: 'absolute',
    top: Dimensions.get('screen').height / 3.5,
  },
});
