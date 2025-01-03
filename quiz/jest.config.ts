export {};
module.exports = {
	collectCoverage: true,
	collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/*.d.ts", "!**/vendor/**"],
	coverageDirectory: "coverage",
	testEnvironment: "jsdom",
	transform: {
		".(ts|tsx)": "ts-jest",
		// "^.+\\.(css|less|scss)$": "jest-transform-stub",
		"^.+\\.(css|less|scss|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
			"jest-transform-stub",
	},

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
	moduleNameMapper: {
		"\\.(css|less|scss|sass)$": "identity-obj-proxy",
	},
};
