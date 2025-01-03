export {};
module.exports = {
	collectCoverage: true,
	collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/*.d.ts", "!**/vendor/**"],
	coverageDirectory: "coverage",
	testEnvironment: "jsdom",
	transform: {
		".(ts|tsx)": "ts-jest",
	},

	preset: "ts-jest", // Or the appropriate preset for your setup

	coveragePathIgnorePatterns: [
		"/node_modules/",
		"/coverage",
		"package.json",
		"package-lock.json",
		"reportWebVitals.ts",
		"setupTests.ts",
		"index.tsx",
	],
	setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};