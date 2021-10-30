import styles from '../components/blocks/MainBlock.module.scss';
import Head from 'next/head';
import { Component } from 'react';

class NotFound extends Component {
  render() {
    return (
      <div className="app">
        <Head>
          <title>Page Not Found</title>
        </Head>

        <section className={`mid ${styles.mainBlock}`}>
          <h2 className={styles.largeText}>404 - Page Not Found</h2>
          <div className={styles.description}>
            The requested page could not be found. If you think this is a
            mistake, please{' '}
            <a
              href="https://github.com/gofiber/website/issues/new"
              target="_blank"
              rel="noopener noreferrer"
            >
              report it
            </a>{' '}
            to us
          </div>
        </section>
      </div>
    );
  }
}

export default NotFound;
