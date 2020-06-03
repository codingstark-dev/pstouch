<script>
  import Footer from "./../components/footer.svelte";
  import Header from "./../components/header.svelte";
  import { stores } from "@sapper/app";
  const { page } = stores();

  $: if (typeof gtag !== "undefined") {
    gtag("config", "UA-124602515-7", {
      page_path: $page.path
    });
  }
  // export let segment;
</script>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 10px;
    margin: 0 auto;
    box-sizing: border-box;
    @apply px-6;
  }
</style>

<!-- <style>
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding:10px;
    margin: 0 auto;
    box-sizing: border-box;
    @apply px-6;
  }
</style> -->
<!-- <Nav {segment} /> -->
<Header />
<main>
  <slot />
</main>
<Footer />
