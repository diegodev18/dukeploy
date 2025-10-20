import fs from "fs";

import { dukeployPaths } from "@/config";

export const createAllPaths = () => {
  console.log("Creating all necessary paths...");

  const filesToCreate = Object.values(dukeployPaths.FILES);
  const dirsToCreate = Object.values(dukeployPaths.DIRECTORIES);

  let dirsCreated = 0;
  let filesCreated = 0;

  filesToCreate.forEach((filePath) => {
    const dirPath = filePath.substring(0, filePath.lastIndexOf("/"));

    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    if (!fs.existsSync(filePath)) {
      console.log(`Creating file: ${filePath}`);

      if (filePath.endsWith(".json")) {
        fs.writeFileSync(filePath, JSON.stringify({}, null, 2));
      } else {
        fs.writeFileSync(filePath, "");
      }
      filesCreated++;
    }
  });

  dirsToCreate.forEach((dirPath) => {
    if (!fs.existsSync(dirPath)) {
      console.log(`Creating directory: ${dirPath}`);
      fs.mkdirSync(dirPath, { recursive: true });
      dirsCreated++;
    }
  });

  if (filesCreated > 0) {
    console.log(`Created ${filesCreated.toString()} files.`);
  }
  if (dirsCreated > 0) {
    console.log(`Created ${dirsCreated.toString()} directories.`);
  }
  if (filesCreated === 0 && dirsCreated === 0) {
    console.log(
      "All necessary paths already exist. No changes made. If you want to reset, please delete the existing files and directories manually.",
    );
  }
};
