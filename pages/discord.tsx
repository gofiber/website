import Head from 'next/head';
import { Component } from 'react';
import LastBlock from '../components/blocks/LastBlock';
import SponsorsBlock from '../components/blocks/SponsorsBlock';
import SupportBlock from '../components/blocks/Support';

class Discord extends Component {
  render() {
    return (
      <div className="app">
        <Head>
          <title>Discord | Fiber</title>
        </Head>
        <SupportBlock />
        <SponsorsBlock />
        <LastBlock />
      </div>
    );
  }
}

export default Discord;
