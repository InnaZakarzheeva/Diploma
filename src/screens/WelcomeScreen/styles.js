import styled from 'styled-components';
import colors from '../../config/constants';

export const Wrapper = styled.View`
  flex: 1;
  background: ${colors.primary};
  align-items: center;
`;

export const CustomMessageOuter = styled.View`
  position: absolute;
  width: 200px;
  height: 50px;
  left: 62px;
  top: 253px;

  background: ${colors.primary};
  box-shadow: 3px 3px 10px ${colors.darkShadow};
  box-shadow: -3px -3px 10px ${colors.lightShadow};
  border-radius: 15px 15px 15px 0px;
`;

export const CustomMessageInner = styled.View`
  position: absolute;
  width: 200px;
  height: 50px;
  left: 337px;
  top: 341px;

  background: ${colors.primary};

  border-radius: 15px 15px 15px 0px;
`;

// box-shadow: inset 3px 3px 10px ${colors.darkShadow};
// box-shadow: inset -3px -3px 10px ${colors.lightShadow};