<script>
	import Layout from './Layout.svelte';

	import MainBlock from './components/blocks/MainBlock.svelte';
	import RobustRouting from './components/blocks/RobustRouting.svelte';
	import StaticFiles from './components/blocks/StaticFiles.svelte';
	import Benchmark from './components/blocks/Benchmark.svelte';
	import APIReady from './components/blocks/APIReady.svelte';
	import Middleware from './components/blocks/Middleware.svelte';
	import LowMemoryFootprint from './components/blocks/LowMemoryFootprint.svelte';
	import Templating from './components/blocks/Templating.svelte';
	import Websockets from './components/blocks/Websockets.svelte';
	import Limiter from './components/blocks/Limiter.svelte';
	import Languages from './components/blocks/Languages.svelte';
	import MediaBlock from './components/blocks/MediaBlock.svelte';
	import LastBlock from './components/blocks/LastBlock.svelte';
</script>

<Layout>
	<MainBlock />
	<RobustRouting />
	<StaticFiles />
	<Benchmark />
	<APIReady />
	<Middleware />
	<LowMemoryFootprint />
	<Templating />
	<Websockets />
	<Limiter />
	<Languages />
	<MediaBlock />
	<LastBlock />
</Layout>
