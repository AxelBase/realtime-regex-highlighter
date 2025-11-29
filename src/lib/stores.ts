// src/lib/stores.ts
import { writable, derived } from 'svelte/store';
import { goto } from '$app/navigation';
import { page } from '$app/stores';
import { browser } from '$app/environment';

// lz-string – correct import for both SSR and client
import lz from 'lz-string';
const { compressToEncodedURIComponent, decompressFromEncodedURIComponent } = lz;

// Stores
export const text = writable<string>('');
export const pattern = writable<string>('');
export const flags = writable<string>('g');

// Derived state for URL sharing
const stateForUrl = derived([text, pattern, flags], ([$text, $pattern, $flags]) => ({
  t: $text,
  p: $pattern,
  f: $flags
}));

export const shareParam = derived(stateForUrl, ($state) => {
  const hasContent = $state.t || $state.p;
  if (!hasContent) return '';
  return compressToEncodedURIComponent(JSON.stringify($state));
});

// Load from URL – only in browser
let unsubscribePage: (() => void) | null = null;

export function initUrlSync() {
  if (!browser) return;

  // Load initial state from URL
  const url = new URL(location.href);
  const param = url.searchParams.get('s');
  if (param) {
    try {
      const json = decompressFromEncodedURIComponent(param);
      if (json) {
        const data = JSON.parse(json);
        text.set(data.t ?? '');
        pattern.set(data.p ?? '');
        flags.set(data.f ?? 'g');
      }
    } catch {
      // Invalid param – ignore
    }
  }

  // Sync future changes to URL
  const unsub = shareParam.subscribe(($param) => {
    const url = new URL(location.href);
    if ($param) {
      url.searchParams.set('s', $param);
    } else {
      url.searchParams.delete('s');
    }
    history.replaceState(history.state, '', url);
  });

  unsubscribePage = unsub;
}

// Cleanup (optional, but clean)
export function cleanupUrlSync() {
  if (unsubscribePage) {
    unsubscribePage();
    unsubscribePage = null;
  }
}