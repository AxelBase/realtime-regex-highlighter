<script lang="ts">
  import '../app.css';
  import { base } from '$app/paths';
  import { slide, fade } from 'svelte/transition';

  // --- Buy Me A Coffee Logic ---
  const paypalUsername = 'AxelLab427';
  const donationAmounts = [1, 3, 5, 10];
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
        <button class="btn-coffee" on:click={toggleDropdown}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
             <path d="M12.35,22.2L12,22A10,10,0,0,1,2,12V10A2,2,0,0,1,4,8H7.2A5.13,5.13,0,0,1,12,3A5.13,5.13,0,0,1,16.8,8H20A2,2,0,0,1,22,10V12A10,10,0,0,1,12.35,22.2M4,10V12A8,8,0,0,0,12,20A8,8,0,0,0,20,12V10H16.8A5.11,5.11,0,0,1,12.5,5.12A5.15,5.15,0,0,1,7.2,10H4Z"/>
          </svg>
          <span class="d-none d-md-inline">Buy me a coffee</span>
        </button>
  
        {#if isDropdownOpen}
          <div class="bmac-dropdown glass" transition:slide={{ duration: 200 }}>
            {#each donationAmounts as amount}
              <a href="https://paypal.me/{paypalUsername}/{amount}" target="_blank" rel="noopener noreferrer" on:click={closeDropdown}>
                ${amount}
              </a>
            {/each}
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

  /* BMAC Button */
  .btn-coffee {
    background: #ffdd00;
    color: #3d3d3d;
    border: none;
    border-radius: 50px;
    padding: 0.5rem 1rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
  .btn-coffee svg { width: 18px; height: 18px; }
  .btn-coffee:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(255, 221, 0, 0.4);
  }

  .bmac-dropdown {
    position: absolute;
    top: 120%;
    left: 50%;
    transform: translateX(-50%);
    min-width: 100px;
    padding: 0.5rem;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    z-index: 1050;
  }
  .bmac-dropdown a {
    display: block;
    padding: 0.5rem;
    text-align: center;
    color: var(--color-fern);
    font-weight: bold;
    border-radius: 10px;
  }
  .bmac-dropdown a:hover {
    background-color: rgba(61, 100, 45, 0.1);
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
  
  /* Global dark mode style for icon rotation */
  :global([data-bs-theme="dark"]) #theme-icon {
    transform: rotate(360deg);
  }
</style>