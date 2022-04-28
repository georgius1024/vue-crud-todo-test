module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  coverageReporters: ["text", "text-summary", "lcov"],
  transform: {
    '^.+\\.vue$': 'vue-jest'
  }
}
