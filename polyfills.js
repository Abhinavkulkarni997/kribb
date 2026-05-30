// // polyfills.js
// // Fix for DOMException in React Native
// if (typeof global.DOMException === 'undefined') {
//     global.DOMException = class DOMException extends Error {
//       constructor(message, name) {
//         super(message);
//         this.name = name || 'DOMException';
//         this.message = message || '';
//       }
//     };
//   }
  
//   // Also add to window if needed
//   if (typeof window !== 'undefined' && typeof window.DOMException === 'undefined') {
//     window.DOMException = global.DOMException;
//   }

  // polyfills.js
import 'react-native-url-polyfill/auto';

// Robust DOMException polyfill
if (typeof global.DOMException === 'undefined') {
  global.DOMException = class DOMException extends Error {
    constructor(message = '', name = 'DOMException') {
      super(message);
      this.name = name;
      this.message = message;
      
      // Add standard properties
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, DOMException);
      }
    }
  };
}

// Also expose on window for libraries that check there
if (typeof window !== 'undefined') {
  if (typeof window.DOMException === 'undefined') {
    window.DOMException = global.DOMException;
  }
}

// // Optional: Fix for other common missing globals
// if (typeof global.crypto === 'undefined') {
//   global.crypto = require('crypto');
// }