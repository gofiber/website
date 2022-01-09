import styles from './MainBlock.module.scss';
import { Component } from 'react';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CodeBlock from 'components/windows/CodeBlock';
import BrowserWindow from 'components/windows/BrowserWindow';

const exampleCode = `package main

import (
    "log"

    "github.com/gofiber/fiber/v2"
)

func main() {
    app := fiber.New()

    app.Get("/", func (c *fiber.Ctx) error {
        return c.SendString("Hello, World!")
    })

    log.Fatal(app.Listen(":3000"))
}`;

class MainBlock extends Component {
  render() {
    return (
      <div>
        <section className={`mid ${styles.mainBlock}`}>
          <h2 className={styles.largeText}>
            An Express-inspired web framework written in Go.
          </h2>
          <div className={styles.description}>
            Fiber is a Go web framework built on top of Fasthttp, the{' '}
            <strong>fastest</strong> HTTP engine for Go. It's designed to{' '}
            <strong>ease</strong> things up for fast development with{' '}
            <strong>zero memory allocation</strong> and{' '}
            <strong>performance</strong> in mind.
          </div>
        </section>

        <section className={`mid ${styles.mainExample}`}>
          <div className={styles.codeExampleWrapper}>
            <CodeBlock>{exampleCode}</CodeBlock>
          </div>

          <div className={styles.arrowContainer}>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>

          <div className={styles.result}>
            <BrowserWindow url="http://localhost:3000">
              <pre>Hello, World!</pre>
            </BrowserWindow>
          </div>
        </section>

        <section className="emphasized-button">
          <div className="mid">
            <a href="https://docs.gofiber.io">
              <span>Get Started</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
            <div className={styles.orScroll}>...or scroll to learn more.</div>
          </div>
        </section>
      </div>
    );
  }
}

export default MainBlock;
