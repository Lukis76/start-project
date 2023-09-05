#! /usr/bin/env node

import select from "@inquirer/select";
import confirm from "@inquirer/confirm";
import input from "@inquirer/input";
import { choicesQuickStart } from "./lib/choices-quick-start.js";
import { FrameworkType, PackageManagerType } from "./types/type.js";
import { choicesManager } from "./lib/choices-manager.js";

class QuickStart {
	frameworkSelect: FrameworkType;
	packageManagerSelect: PackageManagerType;
	typescriptSelect: boolean;
	eslintSelect: boolean;
	prettirSelect: boolean;
	tailwindSelect: boolean;
	appSelect: boolean;
	srcDirSelect: boolean;
	importAliasSelect: string;

	constructor() {
		this.frameworkSelect = "vanilla";
		this.packageManagerSelect = "pnpm";
		this.typescriptSelect = false;
		this.eslintSelect = false;
		this.prettirSelect = false;
		this.tailwindSelect = false;
		this.appSelect = false;
		this.srcDirSelect = false;
		this.importAliasSelect = "@/*";
		this.start();
	}

	async start() {
		const framework = await select({
			message: "Select a project quick start",
			choices: choicesQuickStart,
		});
		this.framework(framework);
	}

	async framework(framework: FrameworkType) {
		this.frameworkSelect = framework;
		const packageManager = await select({
			message: "Select a project quick start",
			choices: choicesManager,
		});
		this.packageManager(packageManager);
	}

	async packageManager(packageManager: PackageManagerType) {
		this.packageManagerSelect = packageManager;
		const typescript = await confirm({ message: "Do you want to use TypeScript?" });
		this.typescript(typescript);
	}

	async typescript(typescript: boolean) {
		this.typescriptSelect = typescript;
		const eslint = await confirm({ message: "Do you want to use ESLint?" });
		this.eslint(eslint);
	}

	async eslint(eslint: boolean) {
		this.eslintSelect = eslint;
		const prettier = await confirm({ message: "Do you want to use Prettier?" });
		this.prettier(prettier);
	}

	async prettier(prettier: boolean) {
		this.prettirSelect = prettier;
		const tailwind = await confirm({ message: "Do you want to use Tailwind?" });
		this.tailwind(tailwind);
	}

	async tailwind(tailwind: boolean) {
		this.tailwindSelect = tailwind;
		let app = false;
		if (this.frameworkSelect === "next") {
			app = await confirm({ message: "Do you want to use App?" });
		}
		this.app(app);
	}

	async app(app: boolean) {
		this.appSelect = app;
		const srcDir = await confirm({ message: "Do you want to use srcDir?" });
		this.srcDir(srcDir);
	}

	async srcDir(srcDir: boolean) {
		this.srcDirSelect = srcDir;
		const importAlias = await input({ message: "Do you want to use importAlias?", default: "@/*" });
		this.importAlias(importAlias);
	}

	importAlias(importAlias: string) {
		this.importAliasSelect = importAlias;
		console.log("finaly", {
			frameworkSelect: this.frameworkSelect,
			packageManagerSelect: this.packageManagerSelect,
			typescriptSelect: this.typescriptSelect,
			eslintSelect: this.eslintSelect,
			prettirSelect: this.prettirSelect,
			tailwindSelect: this.tailwindSelect,
			appSelect: this.appSelect,
			srcDirSelect: this.srcDirSelect,
			importAliasSelect: this.importAliasSelect,
		});

		return this;
	}
}

new QuickStart();
