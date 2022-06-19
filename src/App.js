import { InputValuesProvider } from './context/inputValuesContext';
import Calculator from './pages/calculator/index';

function App() {
  return (
    <div className="container">
      <InputValuesProvider>
        <Calculator />
      </InputValuesProvider>
    </div>
  );
}

export default App;
