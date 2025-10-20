import childProcess from "child_process";

import { REQUIRED_DEPENDENCIES } from "@/config";

export const checkRequiredDependencies = () => {
  console.log("Checking required dependencies...");

  for (const dep of REQUIRED_DEPENDENCIES) {
    try {
      childProcess.execSync(`${dep} --version`, { stdio: "ignore" });
      console.log(
        `${dep.charAt(0).toUpperCase() + dep.slice(1)} is installed.`,
      );
    } catch {
      console.error(
        `Error: ${dep.charAt(0).toUpperCase() + dep.slice(1)} is not installed. Please install ${dep.charAt(0).toUpperCase() + dep.slice(1)} to use Dukeploy.`,
      );
      process.exit(1);
    }
  }

  console.log("All required dependencies are installed.");
};
