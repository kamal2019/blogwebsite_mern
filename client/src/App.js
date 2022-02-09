import React from 'react';
import Home from './components/Home/Home';
import Container from '@mui/material/Container';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from './components/Auth/Auth';

function App() {
  return (
    <Router>
    <Container maxWidth="lg">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/auth" element={<Auth/>} />
      </Routes>
    </Container>
    </Router>
  );
}

export default App;
