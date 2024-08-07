import { render } from 'preact';
import Router from 'preact-router';
import Home from './page';
import About from './about/page';
import Location from './location/page';
import Careers from './careers/page';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './globals.css';

document.body.className =
  'min-h-screen w-full flex overflow-x-clip mx-auto flex-col items-center justify-space-between';

function App() {
  return (
    <>
      <Navbar />
      <main className="mb-auto flex w-full max-w-[2140px] flex-col items-center overflow-x-clip ">
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
