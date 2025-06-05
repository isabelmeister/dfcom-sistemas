import './App.css';
import Provider from './Context/GeneralProvider';
import { Pages } from './Pages/Pages';

export default function App() {
  return (
    <Provider>
      <Pages />
    </Provider>
  );
}