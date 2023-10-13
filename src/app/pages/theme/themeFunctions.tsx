import { Dispatch } from 'react';

export const toggleTheme = (currentState: string, dispatch: Dispatch<any>) => {
  const newTheme = currentState === 'light' ? 'dark' : 'light';
  dispatch({
    type: 'CHANGE_STATUS',
    payload: {
      status: newTheme,
    },
  });
};


export const getThemeClass = (currentState: string) => (currentState === 'light' ? 'light-theme' : 'dark-theme');
