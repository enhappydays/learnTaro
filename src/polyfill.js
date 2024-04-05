class AbortController {
    constructor() {
      this.signal = {
        aborted: false,
        onabort: null
      };
    }
  
    abort() {
      this.signal.aborted = true;
      if (typeof this.signal.onabort === 'function') {
        this.signal.onabort();
      }
    }
  }
  
  if (typeof window === 'undefined') {
    window = {};
  }
  window.AbortController = AbortController;
  