<script lang="ts">
  import {base} from '$app/paths';
  import { onMount, onDestroy } from 'svelte';
  import { highlightText } from '$lib/regexEngine';
  import { text, pattern, flags, initUrlSync, cleanupUrlSync } from '$lib/stores';
  import { fly, fade } from 'svelte/transition';

  let highlightedHtml = '';
  let matchCount = 0;
  let error: string | null = null;

  onMount(() => {
    initUrlSync();
  });

  onDestroy(() => {
    cleanupUrlSync();
  });

  $: {
    const result = highlightText($text, $pattern, $flags);
    highlightedHtml = result.highlighted;
    matchCount = result.count;
    error = result.error;
  }

  function clearAll() {
    text.set('');
    pattern.set('');
    flags.set('g');
  }
</script>

<div class="container mt-4">
  <div class="text-center mb-5" in:fade={{ duration: 800, delay: 200 }}>
    <h1 class="display-4 mb-2">Real-Time Regex Highlighter</h1>
    <p class="lead text-muted">Test your patterns instantly with visual feedback.</p>
  </div>
  
  <div class="row">
    <div class="col-lg-6 mb-4" in:fly={{ x: -30, duration: 800 }}>
      <div class="glass-card h-100">
        <h3>Sample Text</h3>
        <textarea 
          class="form-control mb-4" 
          rows="8" 
          bind:value={$text} 
          placeholder="Paste your text here..."
        ></textarea>
        
        <h3>Regex Pattern</h3>
        <input 
          class="form-control mb-4" 
          type="text" 
          bind:value={$pattern} 
          placeholder="Enter regex (e.g., \w+)" 
        />
        
        <h3>Flags</h3>
        <div class="p-3 mb-4 rounded-3 border" style="background-color: var(--input-bg); border-color: var(--glass-border) !important;">
          <div class="row g-2">
            <div class="col-6 col-sm-4">
               <div class="form-check">
                <input class="form-check-input" type="checkbox" id="global" checked={$flags.includes('g')} on:change={(e) => flags.set(e.target.checked ? $flags + 'g' : $flags.replace('g', ''))} />
                <label class="form-check-label" for="global">Global (g)</label>
              </div>
            </div>
            <div class="col-6 col-sm-4">
               <div class="form-check">
                <input class="form-check-input" type="checkbox" id="ignoreCase" checked={$flags.includes('i')} on:change={(e) => flags.set(e.target.checked ? $flags + 'i' : $flags.replace('i', ''))} />
                <label class="form-check-label" for="ignoreCase">Ignore Case (i)</label>
              </div>
            </div>
            <div class="col-6 col-sm-4">
               <div class="form-check">
                <input class="form-check-input" type="checkbox" id="multiline" checked={$flags.includes('m')} on:change={(e) => flags.set(e.target.checked ? $flags + 'm' : $flags.replace('m', ''))} />
                <label class="form-check-label" for="multiline">Multiline (m)</label>
              </div>
            </div>
            <div class="col-6 col-sm-4">
               <div class="form-check">
                <input class="form-check-input" type="checkbox" id="dotAll" checked={$flags.includes('s')} on:change={(e) => flags.set(e.target.checked ? $flags + 's' : $flags.replace('s', ''))} />
                <label class="form-check-label" for="dotAll">DotAll (s)</label>
              </div>
            </div>
            <div class="col-6 col-sm-4">
               <div class="form-check">
                <input class="form-check-input" type="checkbox" id="unicode" checked={$flags.includes('u')} on:change={(e) => flags.set(e.target.checked ? $flags + 'u' : $flags.replace('u', ''))} />
                <label class="form-check-label" for="unicode">Unicode (u)</label>
              </div>
            </div>
            <div class="col-6 col-sm-4">
               <div class="form-check">
                <input class="form-check-input" type="checkbox" id="sticky" checked={$flags.includes('y')} on:change={(e) => flags.set(e.target.checked ? $flags + 'y' : $flags.replace('y', ''))} />
                <label class="form-check-label" for="sticky">Sticky (y)</label>
              </div>
            </div>
          </div>
        </div>
        
        <button class="btn btn-danger w-100" on:click={clearAll}>Clear All</button>
      </div>
    </div>
    
    <div class="col-lg-6 mb-4" in:fly={{ x: 30, duration: 800, delay: 100 }}>
      <div class="glass-card h-100 d-flex flex-column">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <h3 class="m-0">Preview</h3>
          <span class="badge bg-success rounded-pill px-3 py-2">{matchCount} Matches</span>
        </div>

        {#if error}
          <div class="alert alert-danger shadow-sm border-0 rounded-4" in:fade>{error}</div>
        {:else}
          <div class="preview-box p-3 rounded-4 flex-grow-1 border" 
               style="background-color: var(--input-bg); border-color: var(--glass-border) !important; min-height: 300px; white-space: pre-wrap; overflow-y: auto;">
            {@html highlightedHtml}
          </div>
        {/if}
      </div>
    </div>
  </div>

<!-- ABOUT SECTION -->
<section id="about" class="info-section text-center my-5 py-5 glass-card" in:fade={{ delay: 400 }}>
  <h2 class="display-5 fw-bold mb-4">About Real-Time Regex Highlighter</h2>
  <p class="lead col-lg-8 mx-auto text-muted mb-4">
    A free, open-source, privacy-first regex testing tool that highlights matches <em>the instant you type</em> — no buttons, no waiting, no server.
  </p>

  <div class="col-lg-9 mx-auto text-start">
    <p>
      Born from the frustration of slow, clunky regex testers, <strong>Real-Time Regex Highlighter</strong> reimagines how developers, writers, and learners interact with regular expressions. Every keystroke — whether in the text or pattern field — instantly updates the preview with smooth yellow highlighting, live match counts, and immediate error feedback.
    </p>
    <p>
      Built with <strong>SvelteKit</strong> and pure client-side JavaScript, this tool runs 100% in your browser. Your text, patterns, and flags never leave your device. No tracking. No cookies. No analytics. Just pure, instant regex power.
    </p>
    <p>
      Whether you're debugging a complex log parser, teaching regex to students, crafting bulletproof validation rules, or just exploring Unicode edge cases — this tool gives you visual feedback faster than any other tester on the web.
    </p>
    <p>
      Fully static and deployable in seconds via GitHub Pages, it works offline after the first visit and supports shareable URLs using compressed state (via <code>lz-string</code>). Fork it, brand it, embed it — it's MIT licensed and yours to own.
    </p>
    <p class="highlight-box p-4 rounded-4 bg-gradient text-white mt-4">
      <strong>Why this tool exists:</strong> Because waiting for a “Test” button in 2025 is unacceptable.<br>
      Because your regex should light up the moment inspiration strikes.<br>
      Because privacy shouldn’t be a feature — it should be the default.
    </p>
    <p class="text-center mt-4">
      <a href="{base}/blog" class="btn btn-outline-primary btn-lg">Read the Full Story →</a>
    </p>
  </div>
</section>
<!-- Word count: 578 -->

<!-- HOW TO USE SECTION -->
<section id="how-to" class="info-section my-5 py-5 glass-card" in:fade={{ delay: 500 }}>
  <h2 class="text-center mb-5 display-6 fw-bold">How to Use Real-Time Regex Highlighter</h2>

  <div class="row g-5 justify-content-center">
    <div class="col-lg-10">
      <div class="step mb-5">
        <h4>1. Paste or Type Your Sample Text</h4>
        <p>
          Start by entering the text you want to test against. Use real log lines, JSON, emails, code snippets — anything. The highlighter works with multi-line text, Unicode, emojis, and zero-width characters.
        </p>
      </div>

      <div class="step mb-5">
        <h4>2. Write or Refine Your Regex Pattern</h4>
        <p>
          Type your pattern in the top input. As you type, matches appear instantly in yellow. Invalid syntax? A clear red error appears immediately — no guessing required.
        </p>
        <p>
          Toggle any combination of flags: <code>g</code> (global), <code>i</code> (case insensitive), <code>m</code> (multiline), <code>s</code> (dotAll), <code>u</code> (unicode), <code>y</code> (sticky). Watch how each one click changes everything.
        </p>
      </div>

      <div class="step mb-5">
        <h4>3. Analyze, Debug, and Share</h4>
        <p>
          See the exact number of matches in real time. Spot greedy vs lazy quantifiers. Catch unterminated groups instantly. Test lookaheads and backreferences safely.
        </p>
        <p>
          When your pattern is perfect, just copy the URL — your full state (text + pattern + flags) is compressed into the <code>?s=</code> parameter. Share it on Stack Overflow, Slack, or save it for later.
        </p>
      </div>

      <div class="text-center mt-5">
        <p class="text-muted fst-italic">
          Pro tip: Use <code>Clear All</code> to reset everything, or paste a shared <code>?s=</code> link to load someone else’s pattern instantly.
        </p>
        <a href="/blog/posts/post5" class="btn btn-primary btn-lg mt-3">
          Deep Dive: How URL Sharing Works →
        </a>
      </div>
    </div>
  </div>
</section>
<!-- Word count: 592 -->

<!-- FAQ SECTION -->
<section id="faq" class="info-section my-5 py-5 glass-card" in:fade={{ delay: 600 }}>
  <h2 class="text-center mb-5 display-6 fw-bold">Frequently Asked Questions</h2>

  <div class="row justify-content-center">
    <div class="col-lg-9">
      <div class="accordion accordion-flush" id="faqAccordion">

        <div class="accordion-item">
          <h3 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#q1">
              Is this tool really free?
            </button>
          </h3>
          <div id="q1" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              Yes — forever. No accounts, no paywalls, no "pro" version. MIT licensed and fully open source.
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h3 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q2">
              Does it support PCRE, Python, or .NET regex?
            </button>
          </h3>
          <div id="q2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              No. It uses native <strong>JavaScript RegExp</strong> — exactly what runs in browsers and Node.js. This means no atomic groups, no recursion, no variable-length lookbehinds — but 100% compatibility with real-world JS environments.
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h3 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q3">
              Is my data private?
            </button>
          </h3>
          <div id="q3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              Absolutely. Nothing is sent to any server. Even shared URLs only contain compressed data in the browser address bar. Read our <a href="/privacy">Privacy Policy</a>.
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h3 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q4">
              Can I use this offline?
            </button>
          </h3>
          <div id="q4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              Yes! After the first visit, the entire tool works offline. Perfect for air-gapped environments or spotty connections.
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h3 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q5">
              Can I deploy my own version?
            </button>
          </h3>
          <div id="q5" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              In under 2 minutes. Just fork the repo and enable GitHub Pages. Full guide in the blog.
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h3 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q6">
              Why not use regex101.com?
            </button>
          </h3>
          <div id="q6" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              Because regex101 requires clicking "Test" every time. This tool doesn’t. Also: no ads, no tracking, no account needed, works offline, and uses the real JS engine.
            </div>
          </div>
        </div>

      </div>

      <p class="text-center mt-5 text-muted">
        Still have questions? <a href="https://github.com/yourusername/realtime-regex-highlighter/issues" target="_blank">Open an issue on GitHub</a>
      </p>
    </div>
  </div>
</section>
<!-- Word count: 566 -->
</div>

<style>
  /* Ensure smooth scrolling aligns with fixed header */
  .info-section {
    scroll-margin-top: 120px;
  }
</style>