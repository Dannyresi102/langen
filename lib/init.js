import fs from "fs-extra";
import chalk from "chalk";

export async function initProject() {
  const pkg = {
    name: "my-langen-project",
    version: "1.0.0",
    description: "",
    main: "index.js",
    scripts: {},
    author: "",
    license: "MIT"
  };

  await fs.writeJson("package.json", pkg, { spaces: 2 });
  console.log(chalk.green("✅ Projet initialisé avec succès !"));
}
