import { Component } from 'react';
import CodeBlock from '../windows/CodeBlock';

const exampleCode = `package main

import (
  "github.com/gofiber/fiber"
  "github.com/gofiber/template"
)

func main() {
  app := fiber.New()

  app.Settings.TemplateEngine = template.Mustache()
  // app.Settings.TemplateEngine = template.Amber()
  // app.Settings.TemplateEngine = template.Handlebars()
  // app.Settings.TemplateEngine = template.Pug()

  // ...

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
