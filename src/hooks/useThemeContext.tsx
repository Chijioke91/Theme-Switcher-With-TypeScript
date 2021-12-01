import { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';

export default function useThemeContext() {
  const context = useContext(ThemeContext);

  if (context === undefined)
    throw new Error('This hook must be used within a context provider');

  return context;
}
