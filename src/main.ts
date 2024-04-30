import { join } from "path";
import {
  Logging,
  createDirs,
  deleteEmptyDirs,
  getFiles,
  moveFile,
} from "./utility";
import { existsSync, statSync, watch } from "fs";

export const orgAndClose = (dirPath: string, isVerbose: boolean) => {
  const files = getFiles(dirPath, isVerbose);
  createDirs(dirPath);

  files.forEach((file) => moveFile(file, dirPath));

  deleteEmptyDirs(dirPath);
};

export const listenForChanges = (dirPath: string, isVerbose: boolean) => {
  watch(dirPath, (event, file) => {
    if (!file) return;
    if (event !== "rename") return;
    const fullPath = join(dirPath, file);
    try {
      if (!existsSync(fullPath)) return;
      if (statSync(fullPath).isDirectory()) return;
      createDirs(dirPath);
      const isMoved = moveFile(file, dirPath);
      Logging.info(isMoved ? "Moved: " : "Ignored: ", isVerbose, fullPath);
      // To give time for the file to be written to disk
      setTimeout(() => deleteEmptyDirs(dirPath), 500);
    } catch (e) {
      Logging.error("Error: ", e);
    }
  });

  Logging.main("Listening for changes...");
  // process.exit(0);
};
