<script lang="ts">
  import '../app.css';
  import { base } from '$app/paths';
  import { slide, fade } from 'svelte/transition';

  // --- Buy Me A Coffee Logic ---
  let isDropdownOpen = false;

  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }

  function closeDropdown() {
    isDropdownOpen = false;
  }

  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (node && !node.contains(event.target as Node)) {
        node.dispatchEvent(new CustomEvent('click_outside'));
      }
    };
    document.addEventListener('click', handleClick, true);
    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      }
    };
  }

  // --- Theme Toggle Logic ---
  function toggleTheme() {
    const body = document.body;
    const current = body.getAttribute('data-bs-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-bs-theme', next);
  }
</script>

<header class="fixed-top p-3 w-100" style="pointer-events: none; z-index: 1040;">
  <nav class="container glass rounded-pill px-4 py-2 d-flex justify-content-between align-items-center"
       style="pointer-events: auto; max-width: 1200px;">

    <div class="d-flex align-items-center gap-3">
      <a href="{base}/" class="d-flex align-items-center gap-2 text-decoration-none logo-group">
        <img src="{base}/AxelLab-Logo.ico" alt="Logo" class="navbar-brand-logo" />
        <span class="fw-bold fs-5 d-none d-sm-block" style="color: var(--color-fern);">AxelBase</span>
      </a>

      <div class="position-relative ms-2" use:clickOutside on:click_outside={closeDropdown}>
        <button
          class="bmac-button d-flex align-items-center gap-2 text-white border-0 px-4 py-2 rounded-pill shadow-sm"
          on:click={toggleDropdown}
          aria-label="Support options"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2,21V19H20V21H2M20,8V5H4V8H20M20,10H4V13C4,14.38 4.5,15.63 5.31,16.58L11.64,19H12.36L18.69,16.58C19.5,15.63 20,14.38 20,13V10M16,2H8V4H16V2Z" />
          </svg>
          <span class="d-none d-sm-inline fw-semibold">Buy me a Coffee</span>
        </button>

        {#if isDropdownOpen}
          <div class="bmac-dropdown mt-2" transition:slide={{ duration: 200 }}>
            <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
              <span class="amount">$3</span> One Coffee
            </a>
            <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
              <span class="amount">$5</span> Two Coffees
            </a>
            <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
              <span class="amount">$10</span> Three Coffees
            </a>

            <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown} class="custom-amount">
              Custom Amount
            </a>

            <a
              href="bitcoin:bc1q3p0e6vt492m4w4fpz5m2cl4zcfuqqkgaj6myc9?label=AxelBase&message=Buy%20me%20a%20coffee"
              on:click={closeDropdown}
              class="custom-amount"
            >
              Buy via Crypto (Bitcoin)
            </a>
          </div>
        {/if}
      </div>
    </div>

    <div class="d-flex align-items-center gap-2">
      <ul class="d-none d-lg-flex list-unstyled m-0 align-items-center gap-1">
        <li><a class="nav-link-custom" href="{base}/">Home</a></li>
        <li><a class="nav-link-custom" href="{base}/#about">About</a></li>
        <li><a class="nav-link-custom" href="{base}/#how-to">How to</a></li>
        <li><a class="nav-link-custom" href="{base}/#faq">FAQ</a></li>
        <li><a class="nav-link-custom" href="{base}/blog">Blog</a></li>
      </ul>

      <button class="btn btn-theme-toggle ms-2" on:click={toggleTheme} aria-label="Toggle Dark Mode">
        <i class="bi bi-moon-stars-fill" id="theme-icon"></i>
      </button>

      <button class="d-lg-none btn border-0" type="button" aria-label="Menu">
        <i class="bi bi-list fs-2" style="color: var(--color-fern);"></i>
      </button>
    </div>
  </nav>
</header>

<main>
  <slot />
</main>

<footer class="custom-footer glass border-top">
  <div class="container text-center">
    <span>© AxelBase Real-Time Regex Highlighter – {new Date().getFullYear()}</span>
    <span class="mx-2">|</span>
    <a href="{base}/privacy" class="footer-link">Privacy</a>
    <a href="{base}/terms" class="footer-link">Terms</a>
  </div>
</footer>

<style>
  /* Navbar Styling */
  .navbar-brand-logo { height: 35px; width: auto; transition: transform 0.3s; }
  .logo-group:hover .navbar-brand-logo { transform: rotate(10deg) scale(1.1); }

  .nav-link-custom {
    padding: 0.5rem 1rem;
    color: var(--color-text-main);
    font-weight: 600;
    border-radius: 20px;
    transition: all 0.3s;
  }
  .nav-link-custom:hover {
    background-color: var(--color-fern);
    color: #fff;
    transform: translateY(-2px);
  }

  /* Footer Styling */
  .custom-footer {
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1rem 0;
    z-index: 1030;
  }
  .footer-link {
    color: var(--color-text-main);
    margin: 0 0.5rem;
    text-decoration: none;
  }
  .footer-link:hover {
    color: var(--color-fern);
    text-decoration: underline;
  }

  /* BMAC Button (exactly from File 1) */
  .bmac-button {
    background: var(--color-fern);
    font-size: 0.95rem;
    transition: all 0.3s ease;
  }
  .bmac-button:hover {
    background: var(--color-fern-hover);
    transform: translateY(-1px);
  }

  /* BMAC Dropdown (exactly from File 1, adapted to glass) */
  .bmac-dropdown {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 240px;
    background: var(--glass-bg);
    backdrop-filter: blur(12px);
    border-radius: 16px;
    box-shadow: var(--glass-shadow);
    overflow: hidden;
    border: 1px solid var(--glass-border);
    z-index: 1050;
  }

  .bmac-dropdown a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 20px;
    color: var(--color-text-main);
    text-decoration: none;
    font-size: 0.98rem;
    transition: all 0.2s ease;
  }

  .bmac-dropdown a:hover {
    background: rgba(61, 100, 45, 0.15);
    color: var(--color-fern);
    padding-left: 28px;
  }

  .bmac-dropdown .amount {
    font-weight: 700;
    color: var(--color-fern);
    font-size: 1.1rem;
  }

  .bmac-dropdown .custom-amount {
    font-weight: 600;
    color: var(--color-fern);
    border-top: 1px solid var(--glass-border);
    justify-content: center !important;
  }

  /* Theme Toggle */
  .btn-theme-toggle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid var(--glass-border);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-text-main);
  }
  .btn-theme-toggle:hover {
    background-color: var(--glass-border);
  }
  #theme-icon { transition: transform 0.5s ease; }

  :global([data-bs-theme="dark"]) #theme-icon {
    transform: rotate(360deg);
  }
</style>