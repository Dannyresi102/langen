import fs from "fs-extra";
import chalk from "chalk";
import { execSync } from "child_process";

export async function publishPackage() {
  if (!fs.existsSync("package.json")) {
    console.log(chalk.red("Aucun package.json trouvé."));
    process.exit(1);
  }

  console.log(chalk.cyan("📦 Préparation de la publication..."));
  try {
    execSync("npm publish", { stdio: "inherit" });
    console.log(chalk.green("✅ Publication réussie sur npm (ou registre configuré)"));
  } catch (err) {
    console.error(chalk.red("Erreur de publication :"), err.message);
  }
}
