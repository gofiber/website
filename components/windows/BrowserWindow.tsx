import styles from './BrowserWindow.module.scss';
import { Component } from 'react';

interface BrowserWindowProps {
  url: string;
}

class BrowserWindow extends Component<BrowserWindowProps> {
  render() {
    return (
      <div className="browser">
        <div className="window">
          <div className={`titlebar ${styles.titlebar}`}>
            <div className="titlebar-buttons">
              <div className="titlebar-button close"></div>
              <div className="titlebar-button maximize"></div>
              <div className="titlebar-button minimize"></div>
            </div>
            <div className={styles.urlBar}>{this.props.url}</div>
          </div>

          <div className={styles.browserWindowContent}>
            <div className={styles.genericBrowserContent}>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BrowserWindow;
