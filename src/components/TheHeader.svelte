<header>
  <div class="mid header-mid">
    <div class="header-left">
      <a href="/">
        <img src="/assets/images/logo.svg" alt="Fiber" class="logo" />
      </a>
    </div>
    <div class="header-right">
      <nav>
        <a href="https://docs.gofiber.io">Docs</a>
        <a href="https://github.com/gofiber/recipes">Examples</a>
        <a href="https://github.com/gofiber/fiber">GitHub</a>
        <a href="https://www.buymeacoffee.com/fenny">Buy a Coffee</a>
        <a href="https://t.me/gofiber">Telegram</a>
      </nav>
    </div>
  </div>
</header>

<style>
  header {
    padding: 1em;
  }

  header .header-mid {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  header .header-mid .header-left .logo {
    width: 110px;
  }

  nav a {
    color: #000;
    display: inline-block;
    padding: .4em 1em;
    margin-right: .3em;
    border-radius: 3px;
    transition: background .15s linear,
                color .15s linear;
  }

  nav a:last-child {
    margin-right: 0;
  }

  nav a:hover {
    background: var(--accent);
    color: #fff;
    text-decoration: none;
  }
</style>
