import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  const [lang, setLang] = useState('ID');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <Projects lang={lang} />
      <Skills lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}

export default App;