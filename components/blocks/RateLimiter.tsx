import { Component } from 'react';
import CodeBlock from '../windows/CodeBlock';

const exampleCode = `package main

import (
  "github.com/gofiber/fiber"
  "github.com/gofiber/limiter"
)

func main() {
  app := fiber.New()

  // 3 requests per 10 seconds max
  cfg := limiter.Config{
    Timeout: 10,
    Max: 3,
  }

  app.Use(limiter.New(cfg))

  // ...

  app.Listen(3000)
}`;

class RateLimiterBlock extends Component {
  render() {
    return (
      <div className="generic-block">
        <div className="mid">
          <div className="left">
            <h3>Rate Limiter</h3>
            <p>
              With Fiber, limiting repeated requests to public APIs and endpoints
              is very simple. No more abusive requests!
            </p>
          </div>
          <div className="right">
            <CodeBlock>
              {exampleCode}
            </CodeBlock>
          </div>
        </div>
      </div>
    );
  }
}

export default RateLimiterBlock;
