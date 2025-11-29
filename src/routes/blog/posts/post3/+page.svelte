<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Mastering Regex Flags: g, i, m, s, u, y Fully Explained with Examples</title>
  <meta name="description" content="Visual guide to every JavaScript regex flags. See exactly how global, case-insensitive, multiline, dotAll, unicode, and sticky behave in real time." />
  <meta property="og:title" content="Mastering Regex Flags: g, i, m, s, u, y Fully Explained" />
  <meta property="og:description" content="Interactive examples of every regex flag in JavaScript, powered by live highlighting." />
  <meta property="og:url" content="{base}/blog/posts/post3" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a><span>/</span><p>Mastering Regex Flags</p>
  </div>

  <article class="prose">
    <h1>Mastering Regex Flags: g, i, m, s, u, y Explained</h1>
    <p class="post-meta">Published: November 29, 2025 • 8 min read</p>

    <p>
      Regex flags change everything. One checkbox can turn a broken pattern into a perfect match. Let’s see each one in action with live examples you can try right now.
    </p>

    <h2>g – Global: Find All Matches</h2>
    <p>Without <code>g</code>: only first match. With <code>g</code>: every match highlighted + accurate count.</p>

    <h2>i – Case Insensitive</h2>
    <p>Matches <code>JavaScript</code>, <code>javascript</code>, <code>JAVASCRIPT</code> with one pattern.</p>

    <h2>m – Multiline Mode</h2>
    <p>Makes <code>^</code> and <code>$</code> match the start/end of each line, not just the whole string. Essential for log parsing.</p>

    <h2>s – DotAll</h2>
    <p>Lets <code>.</code> match newline characters. Try <code>start.*end</code> with and without <code>s</code>.</p>

    <h2>u – Unicode Mode</h2>
    <p>Enables full Unicode support: café, résumé, etc. are matched correctly.</p>

    <h2>y – Sticky Mode</h2>
    <p>Forces matching to start exactly at <code>regex.lastIndex</code>. Great for tokenizers and parsers.</p>

    <h2>Try Them All Live</h2>
    <p>
      The best way to learn flags is to play with them. Open the tool and toggle each one — watch how the yellow highlights change instantly.
    </p>

    <h2>FAQ</h2>
    <details>
      <summary>Can I combine flags?</summary>
      <p>Yes! Use any combination: <code>gim</code>, <code>u</code>, <code>gy</code> — all supported.</p>
    </details>
    <details>
      <summary>Which flag is most overlooked?</summary>
      <p><code>s</code> (dotAll) — most people forget <code>.</code> doesn’t match newlines by default!</p>
    </details>

    <p class="italic-note">
      Mastered the flags? Go build something awesome.
      <a href="{base}/">Open the Regex Highlighter →</a>
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