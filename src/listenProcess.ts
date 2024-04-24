import { existsSync, statSync, watch } from "fs";
import { join } from "path";
import {
  Logging,
  createDirs,
  deleteEmptyDirs,
  moveFile,
} from "./utility/index";

const dirPath = process.argv[2];
const isVerbose = process.argv.includes("-v");

// Listen for changes in the directory
watch(dirPath, (event, file) => {
  if (!file) return;
  if (event !== "rename") return;
  const fullPath = join(dirPath, file);
  try {
    if (!existsSync(fullPath)) return;
    if (statSync(fullPath).isDirectory()) return;
    Logging.info("Moving: ", isVerbose, fullPath);
    createDirs(dirPath);
    setTimeout(() => {
      moveFile(file, dirPath);
      deleteEmptyDirs(dirPath);
    }, 500);
  } catch (e) {
    Logging.error("Error: ", e);
  }
});
