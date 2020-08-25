import types from '../config/actionTypes';
import AsyncStorage from '@react-native-community/async-storage';

export const setAppTheme = () => (dispatch) => {
  AsyncStorage.getItem('theme').then((value) => {
    if (value) {
      dispatch({
        type: types.SET_APP_THEME,
        theme: value,
      });
    }
  });
};

export const changeAppTheme = () => (dispatch) => {
  dispatch({
    type: types.CHANGE_APP_THEME,
  });
};
