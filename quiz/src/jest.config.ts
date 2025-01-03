export {};
module.exports = {
	collectCoverage: true,
	collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/*.d.ts", "!**/vendor/**"],
	coverageDirectory: "coverage",
	testEnvironment: "jsdom",
	transform: {
		"^.+\\.tsx?$": "ts-jest", // Use ts-jest for TypeScript and JSX
		// "\\.[jt]sx?$": "esbuild-jest", // You might not need this anymore
	},

	preset: "ts-jest/presets/js-with-ts",
	// Or the appropriate preset for your setup

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
