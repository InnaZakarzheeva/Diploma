import types from '../config/actionTypes';

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
      return {
        ...state,
        theme: appTheme,
      };

    default:
      return state;
  }
}
