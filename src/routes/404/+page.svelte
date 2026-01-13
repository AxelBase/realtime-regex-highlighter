<script lang="ts">
  import { base } from '$app/paths';
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>404 – Page Not Found | Real-Time Regex Highlighter</title>
  <meta name="description" content="Oops! The page you're looking for doesn't exist. But your regex adventures can still continue!" />
  <meta property="og:title" content="404 – Page Not Found" />
  <meta property="og:description" content="Lost in the regex wilderness? Let's get you back on track." />
  <meta property="og:url" content="{base}/404" />
  <meta property="og:type" content="website" />
  <meta name="robots" content="noindex" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in text-center py-5">
  <div class="error-content max-w-2xl mx-auto">

    <h1 class="display-1 fw-bold text-gradient">404</h1>
    <p class="lead mb-4">
      Oops! Looks like this pattern <em>doesn't match anything</em> on our site.
    </p>

    <p class="mb-5 text-muted">
      The page you were looking for has been moved, deleted, or — let’s be honest — never existed in the first place.
      Even regex gods make typos sometimes.
    </p>

    <div class="actions mb-5">
      <a href="{base}/" class="btn btn-primary btn-lg me-3">
        Back to Regex Highlighter
      </a>
      <a href="{base}/blog" class="btn btn-outline-secondary btn-lg">
        Read the Blog
      </a>
    </div>

    <h2 class="h4 mb-4">While you're here, try these:</h2>
    <div class="row g-4 text-start">
      <div class="col-md-4">
        <a href="{base}/" class="text-decoration-none">
          <div class="card h-100 text-center p-4 border-primary">
            <div class="display-5 mb-3">Test Regex</div>
            <p class="small text-muted">Instant highlighting as you type</p>
          </div>
        </a>
      </div>
      <div class="col-md-4">
        <a href="{base}/blog" class="text-decoration-none">
          <div class="card h-100 text-center p-4">
            <div class="display-5 mb-3">Blog</div>
            <p class="small text-muted">Master regex with in-depth guides</p>
          </div>
        </a>
      </div>
      <div class="col-md-4">
        <a href="https://github.com/axelbase/realtime-regex-highlighter" target="_blank" class="text-decoration-none">
          <div class="card h-100 text-center p-4">
            <div class="display-5 mb-3">GitHub</div>
            <p class="small text-muted">Star, fork, or contribute</p>
          </div>
        </a>
      </div>
    </div>

    <p class="italic-note mt-5 text-muted">
      <strong>Pro tip:</strong> Even the best regex can’t find a page that isn’t there.<br>
      But you can always find your way back home.
    </p>
  </div>
</div>

<style>
  .text-gradient {
    background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .error-content {
    padding: 4rem 0;
  }
  .display-1 {
    font-size: 8rem;
    font-weight: 900;
    line-height: 1;
  }
  .lead {
    font-size: 1.4rem;
    font-weight: 500;
  }
  .btn-lg {
    padding: 0.75rem 2rem;
    border-radius: 50px;
  }
  .card {
    transition: all 0.3s ease;
    border: 2px solid transparent;
  }
  .card:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(0,0,0,0.1);
  }
  .card.border-primary:hover {
    border-color: var(--accent-primary);
  }
  @media (max-width: 768px) {
    .display-1 { font-size: 6rem; }
    .lead { font-size: 1.2rem; }
  }
</style>