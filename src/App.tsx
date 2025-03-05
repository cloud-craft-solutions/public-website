import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/templates/MainLayout';
import { Home } from './pages/Home';
import { ServiceDetails } from './pages/ServiceDetails';
import { CaseStudies } from './pages/CaseStudies';
import { CaseStudyDetails } from './pages/CaseStudyDetails';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { content } from './content/index';

function App() {
  const [lang, setLang] = useState<'pt' | 'en'>('pt');
  const t = content[lang];

  const handleLanguageChange = () => {
    setLang(lang === 'pt' ? 'en' : 'pt');
  };

  return (
    <Router>
      <MainLayout lang={lang} onLanguageChange={handleLanguageChange} t={t}>
        <Routes>
          <Route path="/" element={<Home t={t} />} />
          <Route path="/services/:serviceId" element={<ServiceDetails t={t} />} />
          <Route path="/cases" element={<CaseStudies t={t.cases} />} />
          <Route path="/cases/:caseId" element={<CaseStudyDetails t={t.cases} />} />
          <Route path="/about" element={<About t={t.about} />} />
          <Route path="/contact" element={<Contact t={t.contact} />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;