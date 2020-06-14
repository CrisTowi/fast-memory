import { writable } from 'svelte/store';

export const cards = writable([]);
export const activeCards = writable([]);
export const foundCards = writable([]);
export const startTime = writable(null);
export const endTime = writable(null);
