import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainLayout />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
export default App;
