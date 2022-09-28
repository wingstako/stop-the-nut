import { writable } from 'svelte/store';
import { browser } from "$app/environment";

export const startDateMillis = writable(browser && (Number(localStorage.getItem('startDateMillis')) || 0));
export const userId = writable(browser && (localStorage.getItem('userId') || ""));
export const hasStart = writable(browser && (Boolean(localStorage.getItem('hasStart')) || false));
export const cloudSync = writable(browser && (Boolean(localStorage.getItem('cloudSync')) || false));

startDateMillis.subscribe((value) => {
    browser && localStorage.setItem("startDateMillis", value.toString())
});

userId.subscribe(value => {
    browser && localStorage.setItem("userId", value.toString())
});

hasStart.subscribe(value => {
    browser && localStorage.setItem("hasStart", String(value));
});

cloudSync.subscribe(value => {
    browser && localStorage.setItem("cloudSync", String(value));
});

