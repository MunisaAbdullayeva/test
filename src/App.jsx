// App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './main';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
