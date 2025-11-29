<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Privacy Policy | Real-Time Regex Highlighter</title>
  <meta name="description" content="We collect zero personal data. Your regex patterns and text never leave your browser. Full privacy policy for the Real-Time Regex Highlighter." />
  <meta property="og:title" content="Privacy Policy | Real-Time Regex Highlighter" />
  <meta property="og:description" content="100% client-side. No tracking. No cookies. No servers. Your data stays yours — always." />
  <meta property="og:url" content="{base}/privacy" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a><span>/</span><p>Privacy Policy</p>
  </div>

  <article class="prose">
    <h1>Privacy Policy</h1>
    <p class="post-meta">Effective Date: November 29, 2025</p>

    <p>At <strong>Real-Time Regex Highlighter</strong>, your privacy is not just respected — it is <em>guaranteed by design</em>.</p>

    <h2>We Collect Nothing</h2>
    <p>This tool runs <strong>100% in your browser</strong>. When you paste text, write patterns, or toggle flags:</p>
    <ul>
      <li><strong>No data is sent</strong> to any server — ours or anyone else’s</li>
      <li><strong>No logs</strong> are created</li>
      <li><strong>No IP addresses</strong> are recorded</li>
      <li><strong>No analytics</strong>, cookies, fingerprints, or tracking pixels are used</li>
    </ul>
    <p>Your regex experiments — even sensitive log files, passwords, or internal data — <strong>never leave your device</strong>.</p>

    <h2>How It Works (And Why It’s Private)</h2>
    <p>All regex parsing, highlighting, URL compression, and sharing happen locally using JavaScript. The only external request is the initial page load (HTML, CSS, JS) from GitHub Pages or your own host. After that, it works fully offline.</p>

    <h2>Third-Party Services</h2>
    <p>We do <strong>not</strong> use:</p>
    <ul>
      <li>Google Analytics, Plausible, Umami, or any analytics</li>
      <li>Advertising networks</li>
      <li>Social media widgets</li>
      <li>External fonts that track users</li>
    </ul>
    <p>The only CDN used (Bootstrap Icons) is privacy-respecting and does not set cookies.</p>

    <h2>Shared URLs (?s=…)</h2>
    <p>When you share a pattern via URL, your text and regex are compressed and stored <strong>only in the URL itself</strong>. Anyone with the link can view it — just like sharing a Google Doc link. We do not store, index, or log these URLs.</p>

    <h2>Data Security</h2>
    <p>Since no data is transmitted or stored, there is no database to breach. Your security depends only on your browser and device — exactly as it should be.</p>

    <h2>Children’s Privacy</h2>
    <p>This tool is safe and appropriate for users of all ages. No personal information is ever requested or collected.</p>

    <h2>Changes to This Policy</h2>
    <p>We may update this policy if new features are added. Changes will be announced on the tool and GitHub repository.</p>

    <h2>Contact</h2>
    <p>Questions? Open an issue on <a href="https://github.com/axelbase/realtime-regex-highlighter" target="_blank">GitHub</a>.</p>

    <p class="italic-note">
      <strong>You own your data. Always have. Always will.</strong><br>
      Thank you for trusting a truly private regex tool.
    </p>
  </article>
</div>

<style>
  /* Same styling as your blog posts */
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
  .prose a { color: var(--accent-primary); text-decoration: underline; }
</style>