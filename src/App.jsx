import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';

// Lazy loading components
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Resume = lazy(() => import('./components/Resume'));
const Contact = lazy(() => import('./components/Contact'));

// Loading fallback component matching the YC theme
const Loader = () => (
  <div style={{ 
    height: '100vh', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
    background: '#faf8f0',
    color: '#ff6600',
    fontFamily: 'system-ui, sans-serif'
  }}>
    <div style={{ fontSize: '1.5rem', fontWeight: '800' }}>B</div>
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
        padding: '50px 40px', 
        borderTop: '1px solid var(--yc-border)',
        textAlign: 'center',
        fontSize: '0.85rem',
        color: 'var(--text-yc-muted)',
        fontFamily: 'var(--font-sans)'
      }}>
        <div style={{ marginBottom: '10px' }}>
          &copy; {new Date().getFullYear()} Bhaumik Shivmath &bull; B.Tech Student &bull; Full Stack Developer
        </div>
        <div style={{ fontSize: '0.75rem', opacity: 0.8 }}>
          Inspired by Y Combinator. Built using React and Vite.
        </div>
      </footer>
    </div>
  );
}

export default App;
