import { render } from 'preact';
import Router from 'preact-router';
import Home from './page';
import About from './about/page';
import Location from './location/page';
import Careers from './careers/page';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { routes } from './_const';
import './globals.css';

document.body.className = 'min-h-dvh  md:min-h-screen flex flex-col items-center justify-space-between';

function App() {
  return (
    <>
      <Navbar />
      <main className="mx-auto mb-auto flex w-full max-w-[2140px] flex-col items-center overflow-x-clip ">
        <Router>
          <Home path={routes.home} />
          <About path={routes.about} />
          <Location path={routes.location} />
          <Careers path={routes.careers} />
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
