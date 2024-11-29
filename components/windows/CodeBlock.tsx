import styles from './CodeBlock.module.scss';
import React, { Component, createRef } from 'react';
import hljs from 'highlight.js';

interface CodeBlockProps {
  children: React.ReactNode;
}

class CodeBlock extends Component<CodeBlockProps> {
  codeRef = createRef<HTMLElement>();
  componentDidMount() {
    if (this.codeRef.current) {
      hljs.highlightBlock(this.codeRef.current);
    }
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
              <code className="go" ref={this.codeRef}>
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
