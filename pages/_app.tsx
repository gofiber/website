import 'styles/base.scss';
import 'highlight.js/styles/monokai.css';

import { AppProps } from 'next/app';
import TheFooter from 'components/common/TheFooter';
import TheHeader from 'components/common/TheHeader';

import hljs from 'highlight.js/lib/core';
import go from 'lib/gohighlight';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  hljs.registerLanguage('go', go);

  return (
    <main>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,user-scalable=no"
        />
        <meta name="title" content="Fiber" />
        <meta
          name="description"
          content="An Express-inspired web framework written in Go."
        />

        <meta property="og:title" content="Fiber" />
        <meta
          property="og:description"
          content="An Express-inspired web framework written in Go."
        />
        <meta
          property="og:image"
          content="https://gofiber.io/assets/images/embed.png"
        />
        <meta property="og:site_name" content="Fiber" />
        <meta property="og:url" content="https://gofiber.io" />
        <meta content="website" property="og:type" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://gofiber.io/assets/images/embed.png"
        />

        <link rel="icon" type="image/png" href="/assets/images/icon.png" />
      </Head>

      <TheHeader />

      <section className="wrapper">
        <Component {...pageProps} />
      </section>

      <TheFooter />
    </main>
  );
}
