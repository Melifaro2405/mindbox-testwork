import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../../pages/Home";
import About from "../../pages/About";

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

export default App;
