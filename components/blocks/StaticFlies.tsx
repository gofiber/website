import { Component } from 'react';
import CodeBlock from 'components/windows/CodeBlock';

const exampleCode = `app.Static("/", "./public")

// => http://localhost:3000/hello.html
// => http://localhost:3000/js/jquery.js
// => http://localhost:3000/css/style.css

// serve from multiple directories
app.Static("/", "./files")`;

class StaticFiles extends Component {
  render() {
    return (
      <section className="generic-block reverse faint">
        <div className="mid">
          <div className="right">
            <h3>Serve Static Files</h3>
            <p>
              Serve your static HTML, CSS, and JavaScript files with ease by
              defining static routes. You can also serve the contents of
              multiple directories on the same route!
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

export default StaticFiles;
