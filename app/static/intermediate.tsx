import { h, render } from 'preact';
import htm from 'htm';
import { App } from './layout'; // Import the App component from layout.js
import '../static/css/globals.css'; // Import Tailwind CSS


const html = htm.bind(h);
function Body(props: any) {
    return html`<${App} ...${props} />`;
}
render(html`<${Body}/>`, document.body);