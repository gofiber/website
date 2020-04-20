<script>
  import CodeBlock from '../CodeBlock.svelte';

  const exampleCode = `app.Get("/", func (c *fiber.Ctx) {
  c.Send("GET request")
})

app.Post("/", func (c *fiber.Ctx) {
  c.Send("POST request")
})`;
</script>

<section class="generic-block">
  <div class="mid">
    <div class="left">
      <h3>Robust Routing</h3>
      <p>
        Setting up routes for your application has never been so easy!
        The Express-like route definitions are easy to understand and
        work with.
      </p>
    </div>
    <div class="right">
      <CodeBlock>
        {exampleCode}
      </CodeBlock>
    </div>
  </div>
</section>
