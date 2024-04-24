import { fork } from "child_process";
import { join } from "path";
import {
  Logging,
  createDirs,
  deleteEmptyDirs,
  getFiles,
  moveFile,
} from "./utility";

export const orgAndClose = (dirPath: string, isVerbose: boolean) => {
  const files = getFiles(dirPath, isVerbose);
  createDirs(dirPath);

  files.forEach((file) => moveFile(file, dirPath));

  deleteEmptyDirs(dirPath);
};

export const listenForChanges = (dirPath: string, isVerbose: boolean) => {
  const modulePath = join("dist", "backgroundProcess.mjs");

  const child = fork(modulePath, [dirPath, isVerbose ? "-v" : ""]);
  child.unref();

  Logging.main("Running in background 🚀");
  // process.exit(0);
};
