<div class="code-block">
  <div class="window dark">
    <div class="titlebar">
      <div class="titlebar-buttons">
        <div class="titlebar-button close"></div>
        <div class="titlebar-button maximize"></div>
        <div class="titlebar-button minimize"></div>
      </div>
    </div>
    <div class="window-content">
      <pre>
        <code class="go">
          <slot></slot>
        </code>
      </pre>
    </div>
  </div>
</div>

<style>
  pre code {
    background: #111;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    line-height: 1.2;
  }

  .window-content pre {
    margin: 0;
  }
</style>
