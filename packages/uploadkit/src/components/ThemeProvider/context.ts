import React, { useContext } from 'react';

export type ColorMode = 'light' | 'dark';

export interface ThemeContextProps {
  colorMode: ColorMode;
}

export const ThemeContext = React.createContext({} as ThemeContextProps);

export function useTheme() {
  const context = useContext(ThemeContext);
  return context;
}
