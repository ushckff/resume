import { initResumeDownload } from './download.js';
import { initContentStorage } from './storage.js';
import { initRipple } from './animation.js';

document.addEventListener('DOMContentLoaded', () => {
  initResumeDownload();
  initContentStorage();
  initRipple();
});