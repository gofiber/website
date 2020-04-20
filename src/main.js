import App from './App.svelte';

import hljs from 'highlight.js/lib/highlight';
import go from 'highlight.js/lib/languages/go';
import 'highlight.js/styles/monokai.css';

hljs.registerLanguage('go', go);
hljs.initHighlightingOnLoad();

const app = new App({
	target: document.body
});

export default app;
