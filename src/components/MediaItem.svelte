<script>
  export let data;
</script>

<a class="media-link" href={data.url} target="_blank">
  <div class="title">
    {data.title}
  </div>
  <div class="details">
    by <strong>{data.author}</strong> on <strong>{data.date}</strong>
    via <strong>{data.website}</strong>
  </div>
</a>

<style>
  .media-link {
    display: block;
    padding: 1em 2em;
    margin-bottom: 2em;
    border-radius: 4px;
    box-shadow: 0 1px 6px rgba(0,0,0,0.3);
    transition: box-shadow .15s linear;
  }

  .media-link:hover {
    text-decoration: none;
    box-shadow: 0 6px 20px rgba(0,0,0,0.3);
  }

  .media-link .title {
    font-weight: 600;
    font-size: 1.45em;
  }

  .media-link .details {
    color: #454545;
  }
</style>
