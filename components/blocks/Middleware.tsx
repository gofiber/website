import { Component } from 'react';
import CodeBlock from 'components/windows/CodeBlock';

const exampleCode = `package main

import (
    "log"
    
    "github.com/gofiber/fiber/v2"
    "github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
    app := fiber.New()

    app.Use(cors.New())

    app.Use(func (c *fiber.Ctx) error {
        if c.Is("json") {
            return c.Next()
        }
        return c.SendString("Only JSON allowed!")
    })

    app.Get("/", func(c *fiber.Ctx) error {
        return c.JSON(fiber.Map{
            "message": "Hello World",
        })
    })

    log.Fatal(app.Listen(":3000"))
}`;

class MiddlewareBlock extends Component {
  render() {
    return (
      <section className="generic-block reverse">
        <div className="mid">
          <div className="right">
            <h3>Flexible Middleware Support</h3>
            <p>
              Choose from{' '}
              <a href="https://docs.gofiber.io/middleware" target="_blank">
                a number of already existing middleware
              </a>{' '}
              or create your own! Use them to verify and manipulate certain
              requests in your app before they reach your controller.
            </p>
          </div>
          <div className="left">
            <CodeBlock>{exampleCode}</CodeBlock>
          </div>
        </div>
      </section>
    );
  }
}

export default MiddlewareBlock;
