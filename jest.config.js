const config = {
    collectCoverageFrom: [
      "**/*.{js,jsx}",
      "!**/node_modules/**",
      "!**/vendor/**",
    ],
    coverageThreshold: {
      branches: 100,
      functions: 100,
      lines: 100,
    },
  };
