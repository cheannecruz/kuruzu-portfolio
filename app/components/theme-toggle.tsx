'use client';

import { useSyncExternalStore } from 'react';

type Theme = 'dark' | 'light';
const storageKey = 'kuruzu-theme';
const changeEvent = 'kuruzu-theme-change';

function getTheme(): Theme {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
}
function subscribe(onChange: () => void) {
  const syncStorage = (event: StorageEvent) => {
    if (event.key !== storageKey && event.key !== null) return;
    document.documentElement.dataset.theme = event.newValue === 'light' ? 'light' : 'dark';
    onChange();
  };
  window.addEventListener(changeEvent, onChange);
  window.addEventListener('storage', syncStorage);
  return () => {
    window.removeEventListener(changeEvent, onChange);
    window.removeEventListener('storage', syncStorage);
  };
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getTheme, () => 'dark' as const);
  const label = `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`;
  function toggle() {
    const next = getTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem(storageKey, next); } catch { /* Theme still works without storage. */ }
    window.dispatchEvent(new Event(changeEvent));
  }
  return <button type="button" className="theme-toggle" onClick={toggle} aria-label={label} aria-pressed={theme === 'light'} title={label}>
    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {theme === 'dark' ? <><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></> : <path d="M20.9 13a9 9 0 0 1-9.9-9.9A9 9 0 1 0 20.9 13Z"/>}
    </svg>
  </button>;
}
