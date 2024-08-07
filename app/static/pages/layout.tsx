import { render } from 'preact';
import Router from 'preact-router';
import Home from './page';
import About from './about/page';
import Location from './location/page';
import Careers from './careers/page';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './globals.css';

document.body.className = 'min-h-screen w-full flex flex-col items-center justify-space-between overflow-x-clip';

function App() {
  return (
    <>
      <Navbar />
      <main className="mb-auto flex max-w-[1440px] flex-col items-center ">
        <Router>
          <Home path="/" />
          <About path="/about" />
          <Location path="/location" />
          <Careers path="/careers" />
        </Router>
      </main>
      <Footer />
    </>
  );
}

function Body() {
  return <App />;
}

render(<Body />, document.body);
