import { readdirSync, lstatSync, rmdirSync } from "fs";
import { join } from "path";

/**
 * Deletes empty directories in the specified directory
 */
export const deleteEmptyDirs = (dirPath: string) => {
  readdirSync(dirPath).forEach((file: string) => {
    const current = join(dirPath, file);
    if (lstatSync(current).isDirectory()) {
      const isDirEmpty = readdirSync(current).length === 0;
      if (isDirEmpty) rmdirSync(current);
    }
  });
};
