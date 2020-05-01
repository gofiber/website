import '../styles/base.scss';
import 'highlight.js/styles/monokai.css';

import { AppProps } from 'next/app';
import TheFooter from '../components/common/TheFooter';
import TheHeader from '../components/common/TheHeader';

import hljs from 'highlight.js/lib/highlight';
import go from '../lib/gohighlight';

export default function App({ Component, pageProps }: AppProps) {
  hljs.registerLanguage('go', go);

  return (
    <main>
      <TheHeader />

      <section className="wrapper">
        <Component {...pageProps} />
      </section>

      <TheFooter />
    </main>
  );
}
