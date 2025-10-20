import fs from "fs";

import { dukeployPaths } from "@/config";

export const createAllPaths = () => {
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
      fs.writeFileSync(filePath, "");
      filesCreated++;
    }
  });

  dirsToCreate.forEach((dirPath) => {
    if (!fs.existsSync(dirPath)) {
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
};
