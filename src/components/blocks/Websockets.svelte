<script>
  import CodeBlock from '../CodeBlock.svelte';

  const exampleCode = `app.Get("/ws", websocket.New(func(c *websocket.Conn) {
  fmt.Println(c.Locals("Hello")) // "World"
  // Websocket logic...
  for {
    mt, msg, err := c.ReadMessage()
    if err != nil {
      log.Println("read:", err)
      break
    }
    log.Printf("recv: %s", msg)
    err = c.WriteMessage(mt, msg)
    if err != nil {
      log.Println("write:", err)
      break
    }
  }
}))`;
</script>

<section class="generic-block faint reverse">
  <div class="mid">
    <div class="right">
      <h3>WebSocket Support</h3>
      <p>
        Use the power of <strong>WebSockets</strong> in your Fiber app! Build fast
        interactive user experiences with performance and scalability
        guaranteed.
      </p>
    </div>
    <div class="left">
      <CodeBlock>
        {exampleCode}
      </CodeBlock>
    </div>
  </div>
</section>
