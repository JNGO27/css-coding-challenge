import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "..";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/dashBoard" element={<Navbar />} />
        <Route path="/internalTools" element={<Navbar />} />
      </Routes>
    </Router>
  );
};

export default App;
