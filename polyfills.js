// polyfills.js
// Fix for DOMException in React Native
if (typeof global.DOMException === 'undefined') {
    global.DOMException = class DOMException extends Error {
      constructor(message, name) {
        super(message);
        this.name = name || 'DOMException';
        this.message = message || '';
      }
    };
  }
  
  // Also add to window if needed
  if (typeof window !== 'undefined' && typeof window.DOMException === 'undefined') {
    window.DOMException = global.DOMException;
  }