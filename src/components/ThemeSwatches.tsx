import useThemeContext from '../hooks/useThemeContext';
import './ThemeSwatches.css';

const colors = ['#235789', '#F26157', '#E2C044', '#690500'];

export default function ThemeSwatches() {
  const { changeColor } = useThemeContext();

  return (
    <div className="swatches">
      {colors.map((color) => (
        <div
          className="swatch"
          onClick={() => changeColor(color)}
          key={color}
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
}
