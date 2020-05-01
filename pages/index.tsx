import Head from 'next/head';
import { Component } from 'react';
import MainBlock from '../components/blocks/MainBlock';
import RobustRouting from '../components/blocks/RobustRouting';
import StaticFiles from '../components/blocks/StaticFlies';
import Benchmark from '../components/blocks/Benchmark';
import APIReady from '../components/blocks/APIReady';
import MiddlewareBlock from '../components/blocks/Middleware';
import LowMemoryFootprint from '../components/blocks/LowMemoryFootprint';
import Templating from '../components/blocks/Templating';
import Websockets from '../components/blocks/Websockets';
import RateLimiterBlock from '../components/blocks/RateLimiter';
import LanguagesBlock from '../components/blocks/Languages';
import MediaBlock from '../components/blocks/MediaBlock';
import LastBlock from '../components/blocks/LastBlock';

class Home extends Component {
  render() {
    return(
      <div className="app">
        <Head>
          <title>Fiber</title>
          <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no" />
          <meta name="title" content="Fiber" />
          <meta name="description" content="An Express-inspired web framework written in Go." />

          <meta property="og:title" content="Fiber" />
          <meta property="og:description" content="An Express-inspired web framework written in Go." />
          <meta property="og:image" content="https://gofiber.io/assets/images/embed.png" />
          <meta property="og:site_name" content="Fiber" />
          <meta property="og:url" content="https://gofiber.io" />
          <meta content="website" property="og:type" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content="https://gofiber.io/assets/images/embed.png" />

          <link rel="icon" type="image/png" href="/assets/images/icon.png" />
        </Head>

        <MainBlock />
        <RobustRouting />
        <StaticFiles />
        <Benchmark />
        <APIReady />
        <MiddlewareBlock />
        <LowMemoryFootprint />
        <Templating />
        <Websockets />
        <RateLimiterBlock />
        <LanguagesBlock />
        <MediaBlock />
        <LastBlock />
      </div>
    );
  }
}

export default Home;
