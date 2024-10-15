import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PreLoader from './components/preLoader/preloader';
import LoadingSpinner from './components/LoadingSpinner/loadingspinner';

import { About } from './pages/About';
import { Home } from './pages/Home';
import { Team } from './pages/Team';
import { Event } from './pages/Event';
import Navbar from './pages/Navbar';

function App() {

  const [loading,setLoading]=useState(false);

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },7000);
  },[])

  return (
    <Router>
      {
        loading ? <PreLoader loading={loading}/>
        :
        <>
        <Navbar />
        <main className="pt-0">
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Event />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </main>
        {/* <Footer /> */}

        </>
      }
    </Router>
  )
}

export default App;