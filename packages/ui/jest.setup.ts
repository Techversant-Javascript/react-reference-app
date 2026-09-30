import '@testing-library/jest-dom';
import 'jest-styled-components';

Object.defineProperty(
  window,
  'IntersectionObserver',
  {
    writable: true,

    value: class {
      observe() {}

      unobserve() {}

      disconnect() {}
    },
  }
);