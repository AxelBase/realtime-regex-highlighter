<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Share Your Regex Instantly with One Click (Using Compressed URLs)</title>
  <meta name="description" content="Learn how we pack your entire regex state — text, pattern, flags — into a tiny shareable ?s= link using lz-string compression." />
  <meta property="og:title" content="Share Your Regex Instantly with One Click" />
  <meta property="og:description" content="No accounts, no pastebin. Just copy a link and send your exact regex setup to anyone." />
  <meta property="og:url" content="{base}/blog/posts/post5" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a><span>/</span><p>Shareable Regex URLs</p>
  </div>

  <article class="prose">
    <h1>Share Your Regex Instantly with One Click</h1>
    <p class="post-meta">Published: November 29, 2025 • 6 min read</p>

    <p>You finally crafted the perfect regex. Now you want to show your teammate, ask on Stack Overflow, or save it for later.</p>

    <p>Most tools force you to copy-paste text + pattern + flags manually.</p>

    <p>We made it one-click simple.</p>

    <h2>How the Magic ?s= Link Works</h2>
    <p>Every time you type, we:</p>
    <ul>
      <li>Combine your text, pattern, and flags into a tiny JSON object</li>
      <li>Compress it using <code>lz-string</code> (up to 90% smaller)</li>
      <li>Encode it safely for URLs</li>
      <li>Update the address bar silently with <code>history.replaceState()</code></li>
    </ul>

    <p>Result: a clean, short link like:</p>
    <p><code>.../realtime-regex-highlighter/?s=4Zy8...</code></p>

    <p>Anyone who opens that link gets your <strong>exact</strong> setup — instantly.</p>

    <h2>Real-World Use Cases</h2>
    <ul>
      <li>Share a tricky log-parsing pattern with your team</li>
      <li>Ask for help on forums with full context</li>
      <li>Bookmark your favorite regex snippets</li>
      <li>Embed in documentation or tutorials</li>
    </ul>

    <h2>Privacy First</h2>
    <p>Everything stays in the URL and browser. No server ever sees your text.</p>

    <h2>FAQ</h2>
    <details>
      <summary>How long can the shared text be?</summary>
      <p>Up to ~4,000 characters reliably (URL length limits). For longer text, use a gist + link.</p>
    </details>
    <details>
      <summary>Can I disable URL sync?</summary>
      <p>Yes — just don’t type anything. The ?s= param only appears when content exists.</p>
    </details>

    <p class="italic-note">
      Crafted a masterpiece? Share it in seconds.
      <a href="{base}/">Try sharing now →</a>
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