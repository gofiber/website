import styles from './Languages.module.scss';
import { Component } from 'react';

interface Language {
  id: string;
  name: string;
}

class LanguagesBlock extends Component {
  private readonly languages: Language[] = [
    { id: '', name: 'English' },
    { id: '_ru', name: 'Russian' },
    { id: '_es', name: 'Spanish' },
    { id: '_ja', name: 'Japanese' },
    { id: '_pt', name: 'Portuguese' },
    { id: '_zh-CN', name: 'Chinese' },
    { id: '_zh-TW', name: 'Taiwanese' },
    { id: '_de', name: 'German' },
    { id: '_nl', name: 'Dutch' },
    { id: '_ko', name: 'Korean' },
    { id: '_fr', name: 'French' },
    { id: '_tr', name: 'Turkish' },
    { id: '_id', name: 'Indonesian' },
    { id: '_he', name: 'Hebrew' },
    { id: '_ar_SA', name: 'Arabic' },
  ];

  render() {
    return (
      <section className={`generic-block ${styles.languagesBlock}`}>
        <div className={`mid ${styles.mid}`}>
          <div style={{ textAlign: 'center' }}>
            <h3>Translated To {this.languages.length} Languages</h3>
            <div className={styles.flags}>
              {this.languages.map((language, idx) => {
                return (
                  <a
                    href={`https://github.com/gofiber/fiber/blob/master/.github/README${language.id}.md`}
                    target="_blank"
                    title={language.name}
                    key={idx}
                  >
                    <img
                      src={`/assets/images/flags/${language.id}.svg`}
                      alt={language.name}
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LanguagesBlock;
