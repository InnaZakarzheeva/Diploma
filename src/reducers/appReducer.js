import types from '../config/actionTypes';
import AsyncStorage from '@react-native-community/async-storage';

const initialState = {
  theme: 'dark',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.SET_APP_THEME:
      return {
        ...state,
        theme: action.theme,
      };

    case types.CHANGE_APP_THEME:
      const appTheme = state.theme === 'light' ? 'dark' : 'light';
      AsyncStorage.setItem('theme', appTheme);
      return {
        ...state,
        theme: appTheme,
      };

    default:
      return state;
  }
}
