import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Junction from './junction';
import Footer from './components/Footer';
import './App.css';

function ScrollToSectionOnRouteChange() {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.pathname.replace('/', '');
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return <Junction />;
}

function App() {
  return (
    <div className="wh-100 flex-column">
      <Header />
      <Routes>
        <Route path="/*" element={<ScrollToSectionOnRouteChange />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
