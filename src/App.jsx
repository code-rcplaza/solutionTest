import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AboutUs, Home } from "./pages";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
