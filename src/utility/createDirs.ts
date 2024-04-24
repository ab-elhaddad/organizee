import { existsSync, mkdirSync } from "fs";
import { join } from "path";
import fileTypes from "../fileTypes";

/**
 * Creates the categorized directories (pictures, videos, documents...). *(If directories does not exist)
 */
export const createDirs = (dirPath: string) => {
  fileTypes.forEach((dir) => {
    if (!existsSync(join(dirPath, dir.name)))
      mkdirSync(join(dirPath, dir.name));
  });
};
