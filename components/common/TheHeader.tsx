import styles from './TheHeader.module.scss';

import { Component } from 'react';
import { GenericLink } from '../../typings';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

interface TheHeaderState {
  opened: boolean;
}

class TheHeader extends Component<{}, TheHeaderState> {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
    };

    this.toggleHamburger = this.toggleHamburger.bind(this);
  }

  private readonly links: GenericLink[] = [
    { url: 'https://docs.gofiber.io', text: '📖 Docs' },
    { url: 'https://docs.gofiber.io/recipes', text: '🍳 Recipes' },
    { url: 'https://github.com/gofiber/awesome-fiber', text: '😎 Awesome List' },
    { url: 'https://github.com/gofiber/fiber', text: '📝 GitHub' },
    { url: 'https://www.buymeacoffee.com/fenny', text: '☕ Buy a Coffee' },
    { url: '/discord', text: '💬 Discord' },
  ];

  private toggleHamburger() {
    this.setState({
      opened: !this.state.opened,
    });
  }

  render() {
    return (
      <header className={styles.header}>
        <div className={`mid ${styles.headerMid}`}>
          <div className={styles.headerLeft}>
            <a href="/">
              <picture>
                <source
                  srcSet="/assets/images/logo-dark.svg"
                  media="(prefers-color-scheme: dark)"
                />
                <img
                  src="/assets/images/logo.svg"
                  alt="Fiber"
                  className={styles.logo}
                />
              </picture>
            </a>
          </div>

          <div>
            <nav className={this.state.opened ? styles.opened : undefined}>
              {this.links.map((link, idx) => (
                <a href={link.url} key={idx}>
                  {link.text}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className={styles.hamburgerOpener}>
          <a href="#" onClick={this.toggleHamburger}>
            <FontAwesomeIcon icon={faBars} />
          </a>
        </div>
      </header>
    );
  }
}

export default TheHeader;
