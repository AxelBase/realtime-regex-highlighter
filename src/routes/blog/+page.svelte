<script lang="ts">
  import { base } from '$app/paths';

  const posts = [
    {
      href: '/blog/posts/post1',
      title: 'Introducing Real-Time Regex Highlighter',
      description: 'A free, open-source tool that highlights regex matches instantly as you type — no refresh needed.'
    },
    {
      href: '/blog/posts/post2',
      title: 'How Real-Time Highlighting Works Under the Hood',
      description: 'Deep dive into Svelte reactivity, safe RegExp execution, and zero-latency matching.'
    },
    {
      href: '/blog/posts/post3',
      title: 'Mastering Regex Flags: g, i, m, s, u, y Explained',
      description: 'Visual examples of every JavaScript regex flag in action with live highlighting.'
    },
    {
      href: '/blog/posts/post4',
      title: 'Debugging Regex: Why Your Pattern Isn’t Matching',
      description: 'Common pitfalls and how the highlighter helps you spot them instantly.'
    },
    {
      href: '/blog/posts/post5',
      title: 'Sharing Regex Patterns via URL (and How It Works)',
      description: 'Learn how we compress your text + pattern + flags into a tiny ?s= link using lz-string.'
    },
    {
      href: '/blog/posts/post6',
      title: 'Best Practices for Writing Readable Regular Expressions',
      description: 'Tips from regex experts — now easier to test live in your browser.'
    },
    {
      href: '/blog/posts/post7',
      title: 'Understanding JavaScript Regex Engine Limitations',
      description: 'Why some regex101 patterns fail in browsers — backreferences in lookbehinds, atomic groups, and the truth about "real" regex support.'
    }
  ];
</script>

<svelte:head>
  <title>Blog | Real-Time Regex Highlighter</title>
  <meta name="description" content="Tutorials, tips, and deep dives into regular expressions with our free real-time highlighting tool." />
</svelte:head>

<div class="container fade-in blog-index">
  <header class="blog-header">
    <h1>Blog: Regex Mastery Hub</h1>
    <p class="subtitle">
      Learn regex faster with instant visual feedback. Tutorials, best practices, and behind-the-scenes of the 
      <strong>Real-Time Regex Highlighter</strong> — proudly open source on 
      <a href="https://github.com/axelbase/realtime-regex-highlighter" target="_blank" rel="noopener">GitHub</a>.
    </p>
  </header>

  <div class="posts-grid">
    {#each posts as post}
      <a href="{base}{post.href}" class="card post-card">
        <div class="card-body">
          <h2 class="post-title">{post.title}</h2>
          <p class="post-description">{post.description}</p>
          <span class="read-more">Read Article →</span>
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  /* Same beautiful styles as before – unchanged */
  .blog-index { padding: 2rem 0 4rem; }
  .blog-header { text-align: center; margin-bottom: 3rem; border-bottom: 1px solid var(--border-color); padding-bottom: 2rem; }
  .blog-header h1 { font-size: 2.8rem; margin-bottom: 1rem; }
  .subtitle { font-size: 1.1rem; color: var(--text-secondary); max-width: 700px; margin: 0 auto; line-height: 1.7; }
  .posts-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1.8rem; }
  .post-card { text-decoration: none; border: 1px solid var(--border-color); border-radius: 12px; overflow: hidden; transition: all 0.3s ease; }
  .post-card:hover { transform: translateY(-8px); box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
  .card-body { padding: 1.5rem; display: flex; flex-direction: column; height: 100%; }
  .post-title { font-size: 1.3rem; color: var(--accent-secondary); margin: 0 0 0.75rem; }
  .post-description { color: var(--text-secondary); flex-grow: 1; margin-bottom: 1rem; line-height: 1.6; }
  .read-more { color: var(--accent-primary); font-weight: 600; transition: transform 0.2s; }
  .post-card:hover .read-more { transform: translateX(6px); }
</style>