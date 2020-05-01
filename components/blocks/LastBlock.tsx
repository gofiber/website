import styles from './LastBlock.module.scss';
import { Component } from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class LastBlock extends Component {
  render() {
    return (
      <section className={`generic-block blue ${styles.lastBlock}`}>
        <div className={`mid ${styles.mid}`}>
          <div style={{ textAlign: 'center' }}>
            <h3>...and much more!</h3>
            <div className={styles.exploreButton}>
              <a href="https://docs.gofiber.io">
                <span>Explore Fiber</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LastBlock;
