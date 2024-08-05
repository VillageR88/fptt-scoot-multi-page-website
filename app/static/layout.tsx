/** @jsxImportSource preact */
import { render } from 'preact';
import Router from 'preact-router';
import Home from './pages/page'; // Import Home component
import About from './pages/about/page';
import Location from './pages/location/page';
import Careers from './pages/careers/page';
import Navbar from './components/Navbar'; // Import Navbar component
import '../static/css/globals.css'; // Import Tailwind CSS

document.body.className = 'min-h-screen w-full flex flex-col items-center justify-space-between';

function App() {
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

function Body() {
  return <App />;
}

render(<Body />, document.body);
