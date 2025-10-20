import { execSync } from "child_process";

export const checkIfUserIsAdmin = () => {
  let commandToExecute = "";

  switch (process.platform) {
    case "darwin":
    case "linux": {
      commandToExecute = "id -u";
      break;
    }
    case "win32": {
      commandToExecute = "net session";
      break;
    }
    default: {
      console.error("Unsupported platform for admin check.");
      process.exit(1);
    }
  }

  try {
    const output = execSync(commandToExecute, {
      encoding: "utf-8",
    });
    const isAdmin = parseInt(output, 10) === 0;
    if (!isAdmin) throw new Error("Not running as admin");
  } catch {
    console.error(
      "Error: This operation requires administrative privileges. Please run the application as an administrator.",
    );
    process.exit(1);
  }
};
