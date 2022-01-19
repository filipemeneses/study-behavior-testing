module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    testMatch: ['**/*.spec.js'],
    transform: {
      '^[^.]+.vue$': 'vue-jest',
      '^.+\\.vue$': 'vue-jest'
    },
    watchPathIgnorePatterns: ['node_modules'],
    transformIgnorePatterns: ['<rootDir>/src/+.css$']
  };
  