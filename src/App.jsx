import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PreLoader from './components/preLoader/preloader';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Team } from './pages/Team';
import { Event } from './pages/Event';
import Navbar from './pages/Navbar';

const App = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      if (!sessionStorage.getItem('preloaderShown')) {
          setLoading(true);
          setTimeout(() => {
              setLoading(false);
              sessionStorage.setItem('preloaderShown', 'true');
          }, 3000);
      }
  }, []);

    useEffect(() => {
      // Check if the page is being refreshed
      if (performance.navigation.type === 1) {
          setLoading(true);
          setTimeout(() => {
              setLoading(false);
          }, 3000);
      }
  }, []);

    return (

      <>
        {loading ? (
            <PreLoader loading={loading} />
        ) : (
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
          )}
      </>
    );
};

const AppWrapper = () => (
    <Router>
        <App />
    </Router>
);

export default AppWrapper;
