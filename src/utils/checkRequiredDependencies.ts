import childProcess from "child_process";

import { REQUIRED_DEPENDENCIES } from "@/config";

export const checkRequiredDependencies = () => {
  console.log("Checking required dependencies...");

  for (const dep of REQUIRED_DEPENDENCIES) {
    const name = dep.charAt(0).toUpperCase() + dep.slice(1);
    try {
      childProcess.execSync(`${dep} --version`, { stdio: "ignore" });
      console.log(`${name} is installed.`);
    } catch {
      console.error(
        `Error: ${name} is not installed. Please install ${name} to use Dukeploy.`,
      );
      process.exit(1);
    }
  }

  console.log("All required dependencies are installed.");
};
