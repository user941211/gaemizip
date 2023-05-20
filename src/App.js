import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import first from "./pages/first";
import mainPage from "./pages/mainPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <first />} />
        <Route path="/mainPage" element={ <mainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
