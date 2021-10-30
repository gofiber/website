import styles from './LowMemoryFootprint.module.scss';
import { Component } from 'react';

class LowMemoryFootprint extends Component {
  render() {
    return (
      <section className={`generic-block faint ${styles.lmfBlock}`}>
        <div className={`mid ${styles.mid}`}>
          <div className={`left ${styles.left}`}>
            <h3>Low Memory Footprint</h3>
            <p>
              Fiber's low memory footprint allows you to implement features
              without worrying too much about how much memory your application
              will use. This allows you to focus on your application and its
              business logic, rather than technical particularities.
            </p>
          </div>
          <div className={`right ${styles.right}`}>
            <h3>Rapid Programming</h3>
            <p>
              Take your idea and turn it into reality in no time! Thanks to the
              well-designed and easy-to-learn API, you can develop your
              application in record speed (especially if you're coming from an
              Express.js background).
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default LowMemoryFootprint;
