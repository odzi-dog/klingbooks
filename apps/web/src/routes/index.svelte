<script lang="ts">
  import { onMount } from 'svelte';
  import JSONTree from 'svelte-json-tree';

  let mounted = false;
  onMount(() => {
    mounted = true;
    
    // @ts-ignore
    window.Telegram.WebApp.ready();

    // @ts-ignore
    window.Telegram.WebApp.MainButton.show();
  });
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{ #if mounted }
  <JSONTree value={{ json: true, window: window, telegram: window?.Telegram, webapp: window?.Telegram?.WebApp }} />
{ /if }