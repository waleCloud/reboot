import './App.css';
import Landing from './components/Landing';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import ListCars from './components/ListCars';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/listings" element={<ListCars />} />
      </Routes>
    </Router>
  );
}

export default App;
