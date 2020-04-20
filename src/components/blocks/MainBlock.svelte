<script>
  import CodeBlock from '../CodeBlock.svelte';
  import BrowserWindow from '../BrowserWindow.svelte';

  import Icon from 'fa-svelte';
  import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

  const exampleCode = `// server.go

package main

import "github.com/gofiber/fiber"

func main() {
  app := fiber.New()

  app.get("/", func (c *fiber.Ctx) {
    c.Send("Hello, World!")
  })

  app.Listen(3000)
}`;
</script>

<section class="mid main-block">
  <h2 class="large-text">An Express-inspired web framework written in Go.</h2>
  <div class="description">
    Fiber is a Go web framework built on top of Fasthttp, the <strong>fastest</strong>
    HTTP engine for Go. It's designed to <strong>ease</strong> things up for fast
    development with <strong>zero memory allocation</strong> and <strong>performance</strong>
    in mind.
  </div>
</section>

<section class="mid main-example">
  <div class="code-example-wrapper">
    <CodeBlock>
      {exampleCode}
    </CodeBlock>
  </div>

  <div class="arrow-container">
    <Icon icon={faArrowRight} />
  </div>

  <div class="result">
    <BrowserWindow>
      <pre style="word-wrap: break-word; white-space: pre-wrap;">
        Hello, World!
      </pre>
    </BrowserWindow>
  </div>
</section>

<section class="emphasized-button">
  <div class="mid">
    <a href="https://docs.gofiber.io">
      <span>Get Started</span>
      <Icon icon={faArrowRight} />
    </a>
    <div class="or-scroll">...or scroll to learn more.</div>
  </div>
</section>

<style>
  .main-block {
    text-align: center;
    padding: 5em 1em;
  }

  .main-block .large-text {
    font-weight: 800;
    font-size: 3em;
    margin: 0;
  }

  .main-block .description {
    font-size: 1.2em;
    width: 80%;
    margin: 0 auto;
  }

  .main-example {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3em;
  }

  .main-example .code-example-wrapper, .main-example .result {
    width: 40%;
  }

  .main-example .arrow-container {
    color: #676767;
    font-size: 2.2em;
  }

  .or-scroll {
    margin-top: 1em;
    color: #777;
  }

  @media only screen and ( max-width: 920px ) {
    .main-block {
      padding: 2em 1em;
    }

    .main-block .large-text {
      font-size: 2em;
      margin-bottom: 1em;
    }

    .main-block .description {
      width: auto;
    }

    .main-example {
      display: block;
    }

    .main-example .code-example-wrapper, .main-example .result {
      width: auto;
    }

    .main-example .arrow-container {
      padding: 1em 0;
      text-align: center;
    }

    :global(.main-example .arrow-container svg) {
      transform: rotate(90deg);
    }
  }
</style>
