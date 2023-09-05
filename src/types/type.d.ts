export type FrameworkType =
	| "vanilla"
	| "node"
	| "nest"
	| "next"
	| "react"
	| "astro"
	| "remix"
	| "electron";

export type PackageManagerType = "npm" | "yarn" | "pnpm";

export type LanguageType = "typescript" | "javascript";

export type FrameworkTypeChoices = {
	name: string;

	value: FrameworkType;

	description: string;
};

export type PackageManagerTypeChoices = {
	name: string;

	value: PackageManagerType;

	description: string;
};