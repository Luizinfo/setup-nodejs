module.exports = {
  root: ["<rootDir>/src"],
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  coverageDirectory: "coverage",
  testEvironment: "node",
  transform: {
    ".+\\ts$": "ts-jest",
  },
}
