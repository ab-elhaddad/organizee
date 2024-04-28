import { renameSync } from "fs";
import { join, extname } from "path";
import { getDest, flags } from "../utility";

/**
 * Moves the file to its categorized directory.
 */
export const moveFile = (file: string, dirPath: string): boolean => {
  const { ignoreIndex } = flags;
  let ignoreTypes = ignoreIndex ? process.argv[ignoreIndex].split(",") : [];
  ignoreTypes = ignoreTypes.map((type) => "." + type.toLowerCase());

  const srcPath = join(dirPath, file);
  const extension = extname(file).toLowerCase();
  const dest = getDest(extension);

  if (ignoreTypes.includes(extension)) return false;
  try {
    renameSync(srcPath, join(dirPath, dest, file));
  } catch (e: any) {
    if (e.code === "EBUSY") setTimeout(() => moveFile(file, dirPath), 500);
  }
  return true;
};
