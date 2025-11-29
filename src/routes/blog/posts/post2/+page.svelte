<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>How Real-Time Regex Highlighting Works Under the Hood</title>
  <meta name="description" content="Deep dive into the Svelte reactivity and safe RegExp execution that powers instant highlighting without page reloads." />
  <meta property="og:title" content="How Real-Time Regex Highlighting Works Under the Hood" />
  <meta property="og:description" content="Explore the technical magic behind zero-latency regex matching in the browser using Svelte stores and safe exec loops." />
  <meta property="og:url" content="{base}/blog/posts/post2" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a><span>/</span><p>How Real-Time Highlighting Works</p>
  </div>

  <article class="prose">
    <h1>How Real-Time Regex Highlighting Works Under the Hood</h1>
    <p class="post-meta">Published: November 29, 2025 • 7 min read</p>

    <p>
      You type a character → matches instantly appear highlighted. It feels like magic, but it’s just clever Svelte reactivity combined with safe RegExp handling.
    </p>

    <h2>Svelte Stores + Reactive Statements = Magic</h2>
    <p>
      The core of the tool uses three writable stores: <code>text</code>, <code>pattern</code>, and <code>flags</code>. A single reactive block watches all three:
    </p>
    <pre><code>$: result = highlightText($text, $pattern, $flags);</code></pre>
    <p>
      Every keystroke triggers this block, rebuilding the highlighted HTML in microseconds.
    </p>

    <h2>Safe Regex Execution (No Infinite Loops)</h2>
    <p>
      The biggest danger in real-time regex tools is zero-length matches (e.g. <code>^</code> or <code>(?:)</code>) causing infinite loops. We prevent this by:
    </p>
    <ul>
      <li>Using a fresh <code>RegExp</code> copy on each loop</li>
      <li>Manually advancing <code>lastIndex</code> on empty matches</li>
      <li>Escaping HTML to prevent injection</li>
    </ul>

    <h2>Why We Chose Client-Side Only</h2>
    <p>
      Zero server cost. Zero privacy risk. Instant response. Works offline. Deployable as a static site on GitHub Pages, Netlify, Vercel — anywhere.
    </p>

    <h2>FAQ</h2>
    <details>
      <summary>What happens with catastrophic backtracking?</summary>
      <p>JavaScript regex engine handles it gracefully — worst case is a brief freeze, never a crash.</p>
    </details>
    <details>
      <summary>Why not use Web Workers?</summary>
      <p>Tried it. The serialization cost killed the “instant” feel. Direct main-thread execution is faster for this use case.</p>
    </details>

    <p class="italic-note">
      Want to see the source? It’s all on GitHub — fork it, tweak it, make it yours.
    </p>
  </article>
</div>

<style>
  /* Same beautiful styles you already have – just keeping it clean */
  .post-layout { max-width: 800px; padding: 2rem 0 4rem; }
  .breadcrumbs { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.5rem; font-size: 0.9rem; color: var(--text-secondary); }
  .breadcrumbs a { color: var(--accent-secondary); text-decoration: none; }
  .breadcrumbs a:hover { text-decoration: underline; }
  .prose code { background: var(--secondary-bg); padding: 0.2em 0.4em; border-radius: 4px; font-size: 0.9em; }
</style>