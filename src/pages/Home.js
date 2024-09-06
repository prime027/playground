import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to the Chess App</h1>
      <Link to="/chessgame">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Play Chess
        </button>
      </Link>
    </div>
  );
}

export default Home;