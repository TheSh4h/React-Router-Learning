import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App
