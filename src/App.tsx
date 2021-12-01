import './App.css';
import ThemeSwatches from './components/ThemeSwatches';
import useThemeContext from './hooks/useThemeContext';

function App() {
  const { color } = useThemeContext();

  return (
    <div className="App" style={{ backgroundColor: color }}>
      <ThemeSwatches />
      <h1>Theme Switcher!!!</h1>
    </div>
  );
}

export default App;
