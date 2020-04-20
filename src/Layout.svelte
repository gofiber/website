<script>
  import TheHeader from './components/TheHeader.svelte';
  import TheFooter from './components/TheFooter.svelte';
</script>

<main>
  <TheHeader />

  <section class="wrapper">
    <slot></slot>
  </section>

  <TheFooter />
</main>
