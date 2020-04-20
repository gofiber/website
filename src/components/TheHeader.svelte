<script>
  import Icon from 'fa-svelte';
  import { faBars } from '@fortawesome/free-solid-svg-icons';

  let opened = false;

  function toggleHamburger() {
    opened = !opened;
  }
</script>

<header>
  <div class="mid header-mid">
    <div class="header-left">
      <a href="/">
        <img src="/assets/images/logo.svg" alt="Fiber" class="logo" />
      </a>
    </div>
    <div class="header-right">
      <nav class={opened ? 'opened' : undefined}>
        <a href="https://docs.gofiber.io">Docs</a>
        <a href="https://github.com/gofiber/recipes">Examples</a>
        <a href="https://github.com/gofiber/fiber">GitHub</a>
        <a href="https://www.buymeacoffee.com/fenny">Buy a Coffee</a>
        <a href="https://t.me/gofiber">Telegram</a>
      </nav>
    </div>
  </div>

  <div class="hamburger-opener">
    <a href="javascript:;" on:click={toggleHamburger}>
      <Icon icon={faBars} />
    </a>
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

  .hamburger-opener {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
  }

  .hamburger-opener a {
    font-size: 2em;
    color: #222;
    display: block;
    padding: .4em;
  }

  @media only screen and ( max-width: 920px ) {
    header {
      padding: 0;
    }

    header .header-mid {
      display: block;
      padding: 0;
    }

    header .header-left {
      padding: .7em;
    }

    .hamburger-opener {
      display: block;
    }

    nav {
      background: #f4f4f4;
      display: none;
    }

    nav.opened {
      display: block;
    }

    nav a {
      display: block;
      margin-bottom: 5px;
      border-radius: 0;
    }
  }
</style>
