import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import ColorContextChange from './ColorContextChange.jsx';

createRoot(document.getElementById('root')).render(
  <ColorContextChange>
    <App />
  </ColorContextChange>
);
