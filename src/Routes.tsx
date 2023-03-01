import { Routes as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';

export default function Routes() {
  return (
    <Router>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Router>
  );
}

