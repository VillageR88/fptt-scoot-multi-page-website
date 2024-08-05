/** @jsxImportSource preact */
import Router from 'preact-router';
import Home from './pages/page'; // Import Home component
import About from './pages/about/page';
import Location from './pages/location/page';
import Careers from './pages/careers/page';

import Navbar from './components/Navbar'; // Import Navbar component

export function App() {
  return (
    <>
      <Navbar />
      <main className="mb-auto flex max-w-[1440px] flex-col items-center">
        <Router>
          <Home path="/" />
          <About path="/about" />
          <Location path="/location" />
          <Careers path="/careers" />
        </Router>
      </main>
      <footer>footer</footer>
    </>
  );
}
