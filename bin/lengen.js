#!/usr/bin/env node
import { program } from "commander";
import chalk from "chalk";
import { initProject } from "../lib/init.js";
import { installPackage } from "../lib/install.js";
import { publishPackage } from "../lib/publish.js";

program
  .name("langen")
  .description("Gestionnaire de paquets minimaliste (clone de npm)")
  .version("1.0.0");

program
  .command("init")
  .description("Initialise un nouveau projet langen")
  .action(initProject);

program
  .command("install [pkg]")
  .description("Installe un package depuis le registre langen ou npm")
  .action(installPackage);

program
  .command("publish")
  .description("Publie le package courant sur le registre langen")
  .action(publishPackage);

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  console.log(chalk.blueBright("Utilisation : langen <commande>"));
  console.log("Essayez : langen init, langen install, langen publish");
}
