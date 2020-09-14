import { Component } from 'react';
import CodeBlock from '../windows/CodeBlock';

const exampleCode = `package main

import (
    "log"

    "github.com/gofiber/fiber/v2"
    "github.com/gofiber/template/html"
)

func main() {
    app := fiber.New(fiber.Config{
        Views: html.New("./views", ".html"),
    })

    app.Get("/", func(c *fiber.Ctx) error {
      return c.Render("index", fiber.Map{
         "Title": "Hello, World!",
      })
    })

    log.Fatal(app.Listen(":3000"))
}`;

class Templating extends Component {
  render() {
    return (
      <section className="generic-block">
        <div className="mid">
          <div className="left">
            <h3>Template Engines</h3>
            <p>
              Want to use a different template engine in your Fiber app? Fear no more! Fiber
              supports multiple template engines, such as Handlebars and Pug, thanks to
              the <a href="https://github.com/gofiber/template" target="_blank">template
              middleware</a>.
            </p>
          </div>
          <div className="right">
            <CodeBlock>
              {exampleCode}
            </CodeBlock>
          </div>
        </div>
      </section>
    );
  }
}

export default Templating;
