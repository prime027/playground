import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Leaderboard from './pages/Leaderboard';
import Practice from './pages/Practice';
import Navbar from './Navbar';
import './App.css';
import ChessGame from './pages/ChessGame';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/chessgame" element={<ChessGame />} />
      </Routes>

     {/* <Body /> */}

     {/* <Footer /> */}
    </div>
  );
}

export default App;
