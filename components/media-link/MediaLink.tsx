import styles from './MediaLink.module.scss';
import { MediaLinkItem } from '../../typings';
import { Component } from 'react';

interface ModuleProps {
  data: MediaLinkItem;
}

class MediaLink extends Component<ModuleProps> {
  render() {
    return (
      <a
        className={styles.mediaLink}
        href={this.props.data.url}
        target="_blank"
      >
        <div className={styles.title}>{this.props.data.title}</div>
        <div className={styles.details}>
          by <strong>{this.props.data.author}</strong> on{' '}
          <strong>{this.props.data.date}</strong> via{' '}
          <strong>{this.props.data.website}</strong>
        </div>
      </a>
    );
  }
}

export default MediaLink;
