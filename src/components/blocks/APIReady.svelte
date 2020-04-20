<script>
  import CodeBlock from '../CodeBlock.svelte';

  const exampleCode = `app.Get("/api/posts", func (c *fiber.Ctx) {
  posts := getPosts() // your logic

  if len(posts) == 0 {
    c.Status(404).JSON(&fiber.Map{
      "ok": false,
      "error": "There are no posts!",
    })
    return
  }

  c.JSON(&fiber.Map{
    "ok": true,
    "posts": posts,
  })
})`;
</script>

<section class="generic-block faint">
  <div class="mid">
    <div class="left">
      <h3>API-ready</h3>
      <p>
        Are you building an API server? We've got you covered! Fiber is
        the perfect choice for building REST APIs in Go. Receiving and
        sending data is fast and easy!
      </p>
    </div>
    <div class="right">
      <CodeBlock>
        {exampleCode}
      </CodeBlock>
    </div>
  </div>
</section>
