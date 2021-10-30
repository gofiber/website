import styles from './SponsorsBlock.module.scss';

import { Component } from 'react';

export interface Sponsor {
  name: string;
  url: string;
  imageName: string;
}

class SponsorsBlock extends Component {
  private readonly sponsors: Sponsor[] = [
    {
      name: 'Airbrake - Error Monitoring',
      url: 'https://airbrake.io/?utm_medium=sponsor&utm_source=Gofiber&utm_content=airbrake-home-page&utm_campaign=2021-sponsorships',
      imageName: 'airbrake.png',
    },
  ];

  render() {
    return (
      <section className={`generic-block ${styles.sponsorsBlock}`}>
        <div className={`mid ${styles.mid}`}>
          <div className="media-container">
            <h3>Official Sponsors</h3>

            <div className={styles.sponsors}>
              {this.sponsors.map((sponsor) => (
                <a
                  key={sponsor.url}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={sponsor.name}
                >
                  <img
                    src={`/assets/images/sponsors/${sponsor.imageName}`}
                    alt={sponsor.name}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SponsorsBlock;
