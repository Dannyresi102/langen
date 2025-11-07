import fs from "fs-extra";
import chalk from "chalk";
import { execSync } from "child_process";
import axios from "axios";

export async function installPackage(pkg) {
  if (!pkg) {
    console.log(chalk.yellow("Aucun package spécifié, installation des dépendances..."));
    execSync("npm install", { stdio: "inherit" });
    return;
  }

  console.log(chalk.cyan(`🔍 Recherche de ${pkg} sur le registre...`));
  try {
    const { data } = await axios.get(`https://registry.npmjs.org/${pkg}`);
    const latest = data["dist-tags"].latest;
    const tarball = data.versions[latest].dist.tarball;
    console.log(chalk.green(`📦 Installation de ${pkg}@${latest}`));
    execSync(`npm install ${tarball}`, { stdio: "inherit" });
  } catch (err) {
    console.error(chalk.red("Erreur lors de l’installation :"), err.message);
  }
}
