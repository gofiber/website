import { Component } from 'react';
import CodeBlock from '../windows/CodeBlock';

const exampleCode = `app.Get("/api/posts", func (c *fiber.Ctx) error {
    posts := getPosts() // your logic
    if len(posts) == 0 {
        return c.Status(404).JSON(&fiber.Map{
            "success": false,
            "error":   "There are no posts!",
        })
    }
    return c.JSON(&fiber.Map{
        "success": true,
        "posts":   posts,
    })
})`;

class APIReady extends Component {
  render() {
    return (
      <section className="generic-block faint">
        <div className="mid">
          <div className="left">
            <h3>API-ready</h3>
            <p>
              Are you building an API server? We've got you covered! Fiber is the
              perfect choice for building REST APIs in Go. Receiving and sending data
              is fast and easy!
            </p>
          </div>
          <div className="right">
            <CodeBlock>{exampleCode}</CodeBlock>
          </div>
        </div>
      </section>
    );
  }
}

export default APIReady;
