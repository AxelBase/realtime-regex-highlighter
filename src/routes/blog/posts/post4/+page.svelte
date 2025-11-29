<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Debugging Regex: Why Your Pattern Isn’t Matching (And How to Fix It)</title>
  <meta name="description" content="Common regex mistakes and how real-time highlighting helps you spot them instantly — from greedy quantifiers to forgotten escapes." />
  <meta property="og:title" content="Debugging Regex: Why Your Pattern Isn’t Matching" />
  <meta property="og:description" content="Learn the most frequent regex failures and see them fixed live with instant visual feedback." />
  <meta property="og:url" content="{base}/blog/posts/post4" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a><span>/</span><p>Debugging Regex</p>
  </div>

  <article class="prose">
    <h1>Debugging Regex: Why Your Pattern Isn’t Matching</h1>
    <p class="post-meta">Published: November 29, 2025 • 7 min read</p>

    <p>You wrote what you thought was a perfect regex… and it matches nothing. Sound familiar?</p>

    <p>Traditional testers make debugging painful: change pattern → click test → wait → still broken → repeat.</p>

    <p>With <strong>real-time highlighting</strong>, you see exactly what’s going wrong the moment it happens.</p>

    <h2>Top 7 Regex Bugs (And How You’ll Spot Them Instantly)</h2>

    <h3>1. Greedy vs Lazy Quantifiers</h3>
    <p><code>.*</code> eats everything. Switch to <code>.*?</code> and watch the highlight shrink exactly where you expect.</p>

    <h3>2. Forgetting to Escape Special Characters</h3>
    <p>Typing <code>.com</code> matches <em>any</em> character before “com”. Add <code>\.com</code> → instant correct highlight.</p>

    <h3>3. Wrong Multiline Behavior</h3>
    <p><code>^hello</code> with <code>m</code> off = no match on line 2. Toggle <code>m</code> → boom, both lines light up.</p>

    <h3>4. Case Sensitivity Surprises</h3>
    <p><code>JavaScript</code> vs <code>javascript</code> → toggle <code>i</code> flag and see all variants glow.</p>

    <h3>5. Zero-Width Assertions</h3>
    <p>Lookaheads <code>(?=…)</code> and lookbehinds <code>(?=…)</code> don’t consume characters — but our highlighter still shows you exactly where they apply.</p>

    <h3>6. Unterminated Groups or Classes</h3>
    <p>Type <code>(abc</code> → immediate red error: “Unterminated group (missing closing ")")”</p>

    <h3>7. Catastrophic Backtracking</h3>
    <p>Try <code>(a+)+</code> on a long string of a’s → you’ll feel the lag and know instantly: “this will explode in production”.</p>

    <h2>Why Visual Feedback Beats Console Logging</h2>
    <p>Seeing is understanding. One glance at the yellow highlights tells you more than 10 console.log statements.</p>

    <h2>FAQ</h2>
    <details>
      <summary>Why does my regex work on regex101 but not here?</summary>
      <p>This tool uses native JavaScript RegExp — exactly what runs in browsers and Node.js. Some regex101 features (PCRE, .NET) aren’t available in JS.</p>
    </details>
    <details>
      <summary>How do I test lookaheads?</summary>
      <p>They don’t appear as highlights (they match zero width), but overlapping matches will show you where they succeed.</p>
    </details>

    <p class="italic-note">
      Stop guessing. Start seeing.
      <a href="{base}/">Open the Real-Time Regex Highlighter →</a>
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