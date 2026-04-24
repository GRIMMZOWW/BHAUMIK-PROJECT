import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';

// Lazy loading components
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Resume = lazy(() => import('./components/Resume'));
const Contact = lazy(() => import('./components/Contact'));

// Loading fallback component
const Loader = () => (
  <div style={{ 
    height: '100vh', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
    background: '#fff',
    color: '#111',
    fontFamily: 'Instrument Serif, serif'
  }}>
    <div style={{ fontSize: '2rem', fontStyle: 'italic' }}>Loading...</div>
  </div>
);

function App() {
  return (
    <div className="App">
      <Navbar />
      <Suspense fallback={<Loader />}>
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </Suspense>
      
      <footer style={{ 
        padding: '60px 10%', 
        color: '#888',
        fontSize: '0.8rem',
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: '1px'
      }}>
        &copy; {new Date().getFullYear()} Bhaumik Shivmath &mdash; B.Tech Student
      </footer>
    </div>
  );
}

export default App;
