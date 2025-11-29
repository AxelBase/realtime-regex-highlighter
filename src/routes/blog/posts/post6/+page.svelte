<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Best Practices for Writing Clean, Readable Regular Expressions</title>
  <meta name="description" content="Expert tips to make your regex maintainable, debuggable, and less terrifying — with live testing examples." />
  <meta property="og:title" content="Best Practices for Clean Regex" />
  <meta property="og:description" content="Stop writing regex spaghetti. Learn naming, comments, and structure that future-you will thank you for." />
  <meta property="og:url" content="{base}/blog/posts/post6" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a><span>/</span><p>Best Practices</p>
  </div>

  <article class="prose">
    <h1>Best Practices for Writing Clean, Readable Regex</h1>
    <p class="post-meta">Published: November 29, 2025 • 8 min read</p>

    <p>“Some people, when confronted with a problem, think ‘I know, I’ll use regular expressions.’ Now they have two problems.” — Jamie Zawinski</p>

    <p>But it doesn’t have to be this way.</p>

    <h2>Golden Rules for Sane Regex</h2>

    <h3>1. Use Verbose Mode (x flag) When Possible</h3>
    <p>JavaScript doesn’t support <code>/x</code>, but you can simulate it:</p>
    <pre><code>const regex = new RegExp(
  '^' + 
  '\\d{4}-\\d{2}-\\d{2}' +  // date
  '\\s+' +
  '\\w+'                     // log level
, 'gm');</code></pre>

    <h3>2. Name Your Capturing Groups</h3>
    <p>Use <code>(?\\d{4})</code> — supported in modern browsers and makes code self-documenting.</p>

    <h3>3. Break Complex Patterns into Parts</h3>
    <p>Build and test each piece separately in the highlighter before combining.</p>

    <h3>4. Avoid “Regex Hero” Syndrome</h3>
    <p>Sometimes two simple patterns + JavaScript logic beat one monster regex.</p>

    <h3>5. Always Test Edge Cases Live</h3>
    <p>Use the real-time highlighter to verify behavior on empty strings, newlines, Unicode, etc.</p>

    <h2>Pro Tips</h2>
    <ul>
      <li>Prefer <code>\d</code>, <code>\s</code>, <code>\w</code> over character classes when possible</li>
      <li>Use non-capturing groups <code>(?:…)</code> unless you need the capture</li>
      <li>Comment complex patterns in code, not in the regex itself</li>
    </ul>

    <h2>FAQ</h2>
    <details>
      <summary>Should I use regex for HTML parsing?</summary>
      <p>No. Never. Use a proper parser.</p>
    </details>

    <p class="italic-note">
      Write regex that your teammates won’t hate.
      <a href="{base}/">Practice clean patterns now →</a>
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