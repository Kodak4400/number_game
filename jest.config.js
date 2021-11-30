module.exports = {
  roots: ['<rootDir>/tests'],
  testMatch: ['**/*.spec.ts', '**/*.test.ts'],
  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.vue$': "@vue/vue3-jest",
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'jsdom',
  testURL: 'http://localhost/',
  transformIgnorePatterns: ['node_modules'],
}