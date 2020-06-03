<script>
	import Footer from './../components/footer.svelte';
	import Header from './../components/header.svelte';

  // export let segment;
</script>

<style>
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding:10px;
    margin: 0 auto;
    box-sizing: border-box;
    @apply px-6;
  }
</style>

<!-- <Nav {segment} /> -->
<Header/>
<main>
  <slot />
</main>
<Footer/>