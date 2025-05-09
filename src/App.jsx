import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Junction from './components/Junction';
import Footer from './components/Footer';
import WhatsappIcon from './components/WhatsappIcon';
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

    const informationContent = document.querySelectorAll('.information-content');
    const stepsContent = document.querySelectorAll('.steps-content');

    if (sectionId === 'sobre') {
      informationContent.forEach((el) => {
        el.classList.add('x-appear');
      });
      stepsContent.forEach((el) => {
        el.classList.add('x-appear');
      });
    } else {
      informationContent.forEach((el) => {
        el.classList.remove('x-appear');
      });
      stepsContent.forEach((el) => {
        el.classList.remove('x-appear');
      });
    }
  }, [location]);

  return <Junction />;
}

function App() {
  return (
    <div className="wh-100 flex-column pr">
      <Header />
      <Routes>
        <Route path="/*" element={<ScrollToSectionOnRouteChange />} />
        <Route path="/produtos" element={<ScrollToSectionOnRouteChange />} />
        <Route path="/sobre" element={<ScrollToSectionOnRouteChange />} />
        <Route path="/contato" element={<ScrollToSectionOnRouteChange />} />
      </Routes>
      <Footer />
      <WhatsappIcon />
    </div>
  );
}

export default App;
