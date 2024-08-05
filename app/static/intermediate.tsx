/** @jsxImportSource preact */
import { render } from 'preact';
import { App } from './layout'; // Import the App component from layout.js
import '../static/css/globals.css'; // Import Tailwind CSS

document.body.className = 'min-h-screen w-full flex flex-col items-center justify-space-between';

function Body() {
  return <App />;
}

render(<Body />, document.body);
