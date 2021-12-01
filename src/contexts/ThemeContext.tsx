import { createContext, useReducer } from 'react';
import { CHANGE_COLOR } from './constants';

const initialState = {
  color: '#235789',
};

export type AppContextType = {
  color: string;
  changeColor: (color: string) => void;
};

type ThemeProviderProps = {
  children: React.ReactNode;
};

type IACTION = { type: string; payload: string };

const themeReducer = (
  state: typeof initialState,
  { type, payload }: IACTION
) => {
  switch (type) {
    case CHANGE_COLOR:
      return {
        ...state,
        color: payload,
      };

    default:
      return state;
  }
};

const ThemeContext = createContext({} as AppContextType);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [{ color }, dispatch] = useReducer(themeReducer, initialState);

  const changeColor = (color: string) => {
    dispatch({
      type: CHANGE_COLOR,
      payload: color,
    });
  };

  return (
    <ThemeContext.Provider value={{ color, changeColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
