import { renameSync } from "fs";
import { join, extname } from "path";
import { getDest } from "../utility";

/**
 * Moves the file to its categorized directory.
 */
export const moveFile = (file: string, dirPath: string) => {
  const srcPath = join(dirPath, file);
  const extension = extname(file).toLowerCase();
  const dest = getDest(extension);
  renameSync(srcPath, join(dirPath, dest, file));
};
