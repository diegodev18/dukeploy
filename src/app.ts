import { checkIfUserIsAdmin } from "@/utils/checkPrivileges";
import { checkRequiredDependencies } from "@/utils/checkRequiredDependencies";
import { createAllPaths } from "@/utils/createPaths";

const argv = process.argv.slice(2);

if (argv.includes("--init") || argv.includes("-i")) {
  console.log(`
  Welcome to Dukeploy!
  
  What is Dukeploy?
  Dukeploy is a deployment tool designed to simplify and automate the process of deploying applications.
  
  Why use Dukeploy?
  - Easy to configure and use.
  - Easy cli commands for deployment tasks.
  - Fast and efficient deployment process.
  - Features in continuous development.
  
  Get started by configuring your applications and deploying them with Dukeploy!
  `);

  checkIfUserIsAdmin();

  createAllPaths();

  checkRequiredDependencies();
} else if (argv.includes("--new-key") || argv.includes("-nk")) {
  const gitProvider =
    argv[argv.indexOf("--new-key") + 1] || argv[argv.indexOf("-nk") + 1];
  if (!gitProvider) {
    console.error(
      "Error: Please specify a git provider (e.g., github, gitlab) after --new-key or -nk.",
    );
    process.exit(1);
  }

  if (gitProvider !== "github") {
    console.error(
      `Error: Unsupported git provider '${gitProvider}'. Currently, only 'github' is supported.`,
    );
    process.exit(1);
  }

  console.log(`Generating a new key pair for ${gitProvider}...`);
} else if (argv.includes("--new-project") || argv.includes("-np")) {
  const projectName =
    argv[argv.indexOf("--new-project") + 1] || argv[argv.indexOf("-np") + 1];
  if (!projectName) {
    console.error(
      "Error: Please specify a project name after --new-project or -np.",
    );
    process.exit(1);
  }

  console.log(`Setting up a new project: ${projectName}...`);
} else if (argv.includes("--help") || argv.includes("-h")) {
  console.log(`
  Dukeploy CLI - Available Commands:
  
  --init, -i          Initialize Dukeploy and set up necessary configurations.
  --new-key, -nk     Generate a new SSH key pair for the specified git provider (e.g., github).
                     Usage: --new-key <git-provider>
  --new-project, -np Create a new project with the specified name.
                     Usage: --new-project <project-name>
  --help, -h         Display this help message.
  `);
} else {
  console.log("Dukeploy CLI - Use --init or -i to get started.");
}
