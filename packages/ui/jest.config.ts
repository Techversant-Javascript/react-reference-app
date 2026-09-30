import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  transform: { '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: 'tsconfig.json' }] },
  testMatch: ['**/tests/**/*.test.{ts,tsx}'],
  moduleNameMapper: {
    // Resolves @techv/tokens to source TS directly — no build needed before test
    '^@techv/tokens$': '<rootDir>/../../packages/tokens/src/index.ts',
  },
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/index.ts'],
};

export default config;
