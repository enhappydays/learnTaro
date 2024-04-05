if (typeof window !== 'undefined' && !window.AbortController) {
    window.AbortController = require('abortcontroller-polyfill/dist/cjs-ponyfill').AbortController;
  }