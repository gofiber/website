<script>
  import CodeBlock from '../CodeBlock.svelte';

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
</script>

<div class="generic-block">
  <div class="mid">
    <div class="left">
      <h3>Rate Limiter</h3>
      <p>
        With Fiber, limiting repeated requests to public APIs and endpoints
        is very simple. No more abusive requests!
      </p>
    </div>
    <div class="right">
      <CodeBlock>
        {exampleCode}
      </CodeBlock>
    </div>
  </div>
</div>
