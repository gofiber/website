import { Component } from 'react';
import CodeBlock from '../windows/CodeBlock';

const exampleCode = `package main

import (
  "github.com/gofiber/fiber"
  "github.com/gofiber/template/html"
  // "github.com/gofiber/template/pug"
)

func main() {
  app := fiber.New()

  app.Settings.Views = html.New("./views", ".html")
  // app.Settings.Views = pug.New("./views", ".pug")

	app.Get("/", func(c *fiber.Ctx) {
		c.Render("index", fiber.Map{
			"Title": "Hello, World!",
		})
	})

  app.Listen(3000)
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
