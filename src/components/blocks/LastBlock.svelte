<script>
  import Icon from 'fa-svelte';
  import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
</script>

<section class="generic-block green last-block">
  <div class="mid">
    <center>
      <h3>...and much more!</h3>
      <div class="explore-button">
        <a href="https://docs.gofiber.io">
          <span>Explore Fiber</span>
          <Icon icon={faArrowRight} />
        </a>
      </div>
    </center>
  </div>
</section>

<style>
  .last-block .mid {
    display: block;
  }

  .explore-button {
    padding: 1.2em 0;
  }

  .explore-button a {
    display: inline-block;
    padding: .7em 2em;
    font-size: 1.2rem;
    border: 2px solid #fff;
    border-radius: 4px;
    color: #fff;
    transition: background .15s linear,
                color .15s linear;
  }

  .explore-button a:hover {
    text-decoration: none;
    background: #fff;
    color: #222;
  }

  .explore-button a span,
  :global(.explore-button a svg) {
    vertical-align: middle;
  }
</style>
