<script>
  import CodeBlock from '../CodeBlock.svelte';

  const exampleCode = `app.Get("/ws", websocket.New(func(c *websocket.Conn) {
  // Websocket logic
  for {
    mtype, msg, err := c.ReadMessage()
    if err != nil {
      break
    }
    log.Printf("Read: %s", msg)

    err = c.WriteMessage(mtype, msg)
    if err != nil {
      break
    }
  }
  log.Println("Error:", err)
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
