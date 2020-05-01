import styles from './CodeBlock.module.scss';
import { Component } from 'react';
import { findDOMNode } from 'react-dom';
import hljs from 'highlight.js';

class CodeBlock extends Component {
  componentDidMount() {
    hljs.highlightBlock(findDOMNode(this.refs.code));
  }

  render() {
    return (
      <div className="code-block">
        <div className="window dark">
          <div className="titlebar">
            <div className="titlebar-buttons">
              <div className="titlebar-button close"></div>
              <div className="titlebar-button maximize"></div>
              <div className="titlebar-button minimize"></div>
            </div>
          </div>

          <div className={`window-content ${styles.codeWindowContent}`}>
            <pre>
              <code className="go" ref="code">
                {this.props.children}
              </code>
            </pre>
          </div>
        </div>
      </div>
    );
  }
}

export default CodeBlock;
