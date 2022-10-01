import styles from './Languages.module.scss';
import { Component } from 'react';

interface Language {
  id: string;
  name: string;
}

class LanguagesBlock extends Component {
  private readonly languages: Language[] = [
    { id: 'en', name: 'English' },
    { id: 'ru', name: 'Russian' },
    { id: 'es', name: 'Spanish' },
    { id: 'ja', name: 'Japanese' },
    { id: 'pt', name: 'Portuguese' },
    { id: 'zh-CN', name: 'Chinese' },
    { id: 'zh-TW', name: 'Taiwanese' },
    { id: 'de', name: 'German' },
    { id: 'nl', name: 'Dutch' },
    { id: 'ko', name: 'Korean' },
    { id: 'fr', name: 'French' },
    { id: 'tr', name: 'Turkish' },
    { id: 'id', name: 'Indonesian' },
    { id: 'he', name: 'Hebrew' },
    { id: 'sa', name: 'Arabic' },
    { id: 'fa', name: 'Persian' },
    { id: 'it', name: 'Italian' },
    { id: 'ckb', name: 'Central Kurdish' },
  ];

  render() {
    return (
      <section className={`generic-block ${styles.languagesBlock}`}>
        <div className={`mid ${styles.mid}`}>
          <div style={{ textAlign: 'center' }}>
            <h3>Translated To {this.languages.length} Languages</h3>
            <div className={styles.flags}>
              {this.languages.map((language, idx) => {
                const languageID = idx ? `_${language.id}` : '';
                return (
                  <a
                    href={`https://github.com/gofiber/fiber/blob/master/.github/README${languageID}.md`}
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
