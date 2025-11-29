<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Terms & Conditions | Real-Time Regex Highlighter</title>
  <meta name="description" content="Terms of use for the free, open-source Real-Time Regex Highlighter — MIT licensed, no warranties, use at your own risk." />
  <meta property="og:title" content="Terms & Conditions | Real-Time Regex Highlighter" />
  <meta property="og:description" content="Free to use, modify, and deploy. No warranties. Licensed under MIT." />
  <meta property="og:url" content="{base}/terms" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a><span>/</span><p>Terms & Conditions</p>
  </div>

  <article class="prose">
    <h1>Terms & Conditions</h1>
    <p class="post-meta">Last Updated: November 29, 2025</p>

    <p>By using <strong>Real-Time Regex Highlighter</strong> ("the tool"), you agree to these Terms.</p>

    <h2>1. Nature of the Tool</h2>
    <p>This is a <strong>free, open-source</strong> web utility released under the <strong>MIT License</strong>. You are free to:</p>
    <ul>
      <li>Use it personally or commercially</li>
      <li>Modify and redistribute it</li>
      <li>Deploy your own copy</li>
      <li>Fork it on GitHub</li>
    </ul>

    <h2>2. No Warranty</h2>
    <p>The tool is provided **"as is"** without any warranties, expressed or implied. We do not guarantee:</p>
    <ul>
      <li>That it will work flawlessly in all browsers</li>
      <li>That regex behavior matches other engines (e.g., PCRE)</li>
      <li>That it will handle extremely large inputs without slowing down</li>
    </ul>
    <p>Use at your own risk. Test thoroughly before relying on it in production.</p>

    <h2>3. Limitation of Liability</h2>
    <p>In no event shall the authors be liable for any damages arising from use of this tool — including data loss, incorrect regex matches, or performance issues.</p>

    <h2>4. Shared URLs</h2>
    <p>When you share a pattern via URL (?s=…), the content becomes publicly accessible to anyone with the link. Do not share sensitive or confidential data.</p>

    <h2>5. Acceptable Use</h2>
    <p>You agree not to:</p>
    <ul>
      <li>Use the tool for illegal purposes</li>
      <li>Attempt to overload or attack the hosted version</li>
      <li>Remove attribution when redistributing modified versions (MIT license requires preserving copyright notice)</li>
    </ul>

    <h2>6. Changes to Terms</h2>
    <p>We may update these terms. Continued use constitutes acceptance.</p>

    <h2>7. Governing Law</h2>
    <p>These terms are governed by the laws of open-source goodwill and common sense.</p>

    <h2>8. Contact</h2>
    <p>Report issues or suggestions on <a href="https://github.com/axelbase/realtime-regex-highlighter" target="_blank">GitHub</a>.</p>

    <p class="italic-note">
      <strong>Thank you</strong> for using and supporting open-source tools.<br>
      Keep writing beautiful, correct regex — responsibly.
    </p>
  </article>
</div>

<style>
  .post-layout { max-width: 800px; padding: 2rem 0 4rem; }
  .breadcrumbs { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.5rem; font-size: 0.9rem; color: var(--text-secondary); }
  .breadcrumbs a { color: var(--accent-secondary); text-decoration: none; }
  .breadcrumbs a:hover { text-decoration: underline; }
  .prose h1, .prose h2 { color: var(--accent-secondary); }
  .prose h1 { font-size: 2.5rem; }
  .prose h2 { margin-top: 2.5rem; border-bottom: 1px solid var(--secondary-bg); padding-bottom: 0.5rem; }
  .prose ul { list-style-type: '→ '; padding-left: 1.5rem; }
  .prose ul li::marker { color: var(--accent-primary); }
  .prose .italic-note { font-style: italic; text-align: center; margin-top: 3rem; color: var(--text-secondary); }
</style>