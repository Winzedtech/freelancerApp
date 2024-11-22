import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Freelancers from './pages/Freelancers';
import FreelancerDetails from './pages/FreelancerDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/freelancers" element={<Freelancers />} />
        <Route path="/freelancer/:id" element={<FreelancerDetails />} />
      </Routes>
    </Router>
  );
}

export default App;