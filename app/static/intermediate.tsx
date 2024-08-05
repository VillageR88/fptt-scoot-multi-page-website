import { h, render } from 'preact';
import htm from 'htm';
import { App } from './layout'; // Import the App component from layout.js
import '../static/css/globals.css'; // Import Tailwind CSS

const html = htm.bind(h);
document.body.className = 'min-h-screen w-full flex flex-col items-center justify-space-between';

function Body(props: string) {
    return html`<${App} ...${props} />`;
}

render(html`<${Body} />`, document.body);