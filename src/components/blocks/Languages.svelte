<script>
  const languages = [
    { id: 'en', name: 'English' },
    { id: 'ru', name: 'Russian' },
    { id: 'es', name: 'Spanish' },
    { id: 'ja', name: 'Japanese' },
    { id: 'pt', name: 'Portuguese' },
    { id: 'zh-CN', name: 'Chinese' },
    { id: 'de', name: 'German' },
    { id: 'nl', name: 'Dutch' },
    { id: 'ko', name: 'Korean' },
    { id: 'fr', name: 'French' },
    { id: 'tr', name: 'Turkish' },
    { id: 'id', name: 'Indonesian' }
  ];
</script>

<section class="generic-block faint">
  <div class="mid">
    <center>
      <h3>Translated in 11 Other Languages</h3>
      <div class="flags">
        {#each languages as language}
          <a
            href={`https://github.com/gofiber/fiber/blob/master/.github/README_${language.id}.md`}
            target="_blank"
            title={language.name}
          >
            <img
              src={`/assets/images/flags/${language.id}.svg`}
              alt={language.name}
            />
          </a>
        {/each}
      </div>
    </center>
  </div>
</section>

<style>
  .mid {
    display: block;
  }

  .flags {
    padding: 1.2em 0;
  }

  .flags a:hover {
    text-decoration: none;
  }

  .flags img {
    margin-right: 5px;
    height: 20px;
  }

  .flags img:last-child {
    margin-right: 0;
  }
</style>
