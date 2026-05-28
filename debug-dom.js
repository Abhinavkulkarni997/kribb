// debug-dom.js
console.log('Checking for DOMException...');
console.log('global.DOMException:', typeof global.DOMException);
console.log('window.DOMException:', typeof window?.DOMException);

// Monkey patch to catch where it's being called
const originalDefineProperty = Object.defineProperty;
Object.defineProperty = function(obj, prop, descriptor) {
  if (prop === 'DOMException' && descriptor.value) {
    console.trace('DOMException being defined at:');
  }
  return originalDefineProperty.call(this, obj, prop, descriptor);
};