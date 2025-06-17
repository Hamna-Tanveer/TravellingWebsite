import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./routes/about";
import Contact from "./routes/contact";
import Home from "./routes/home";
import Service from "./routes/service";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
