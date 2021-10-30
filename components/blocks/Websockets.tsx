import { Component } from 'react';
import CodeBlock from '../windows/CodeBlock';

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

class Websockets extends Component {
  render() {
    return (
      <section className="generic-block faint reverse">
        <div className="mid">
          <div className="right">
            <h3>WebSocket Support</h3>
            <p>
              Use the power of <strong>WebSockets</strong> in your Fiber app!
              Build fast interactive user experiences with performance and
              scalability guaranteed.
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

export default Websockets;
