<script>
  import CodeBlock from '../CodeBlock.svelte';

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
</script>

<section class="generic-block">
  <div class="mid">
    <div class="left">
      <h3>Template Engines</h3>
      <p>
        Want to use a different template engine in your Fiber app?
        We've got you covered! Fiber supports multiple template engines,
        such as Handlebars and Pug, thanks to the
        <a href="https://github.com/gofiber/template" target="_blank">template
        middleware</a>.
      </p>
    </div>
    <div class="right">
      <CodeBlock>
        {exampleCode}
      </CodeBlock>
    </div>
  </div>
</section>
