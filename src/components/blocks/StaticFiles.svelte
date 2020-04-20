<script>
  import CodeBlock from '../CodeBlock.svelte';

  const exampleCode = `app.Static("/", "./public")

// => http://localhost:3000/hello.html
// => http://localhost:3000/js/jquery.js
// => http://localhost:3000/css/style.css

// serve from multiple directories
app.Static("/", "./files")`;
</script>

<section class="generic-block reverse faint">
  <div class="mid">
    <div class="right">
      <h3>Serve Static Files</h3>
      <p>
        Serve your static HTML, CSS, and JavaScript files with ease by
        defining static routes. You can also serve the contents of
        multiple directories on the same route!
      </p>
    </div>
    <div class="left">
      <CodeBlock>
        {exampleCode}
      </CodeBlock>
    </div>
  </div>
</section>
