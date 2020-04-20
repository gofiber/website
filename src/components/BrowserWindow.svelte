<script>
  export let url = 'http://localhost:3000';
</script>

<div class="browser">
  <div class="window">
    <div class="titlebar">
      <div class="titlebar-buttons">
        <div class="titlebar-button close"></div>
        <div class="titlebar-button maximize"></div>
        <div class="titlebar-button minimize"></div>
      </div>
      <div class="url-bar">
        {url}
      </div>
    </div>

    <div class="window-content">
      <div class="generic-browser-content">
        <slot></slot>
      </div>
    </div>
  </div>
</div>

<style>
  .titlebar {
    padding-top: 6px;
  }

  .window-content {
    padding: 0;
  }

  .window-content .generic-browser-content {
    background: #fff;
    padding: 8px;
    font-family: 'Times New Roman', Times, serif;
    font-size: 14px;
    min-height: 150px;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  :global(.window-content .generic-browser-content pre) {
    margin: 0;
  }

  .url-bar {
    font-size: 13px;
    background: #fff;
    line-height: 1;
    padding: 5px;
    width: 50%;
    color: #777;
    margin: 0 auto;
    border-radius: 4px;
  }
</style>
