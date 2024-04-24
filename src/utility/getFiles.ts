import { readdirSync, statSync } from "fs";
import { join } from "path";
import { validateDirPath } from "./validateDirPath";
import { Logging } from "./Logging";

/**
 * Returns an array of files in the specified directory
 */
export const getFiles = (dirPath: string, isVerbose: boolean): string[] => {
  Logging.info("Directory Path:", isVerbose, dirPath);

  if (!validateDirPath(dirPath)) throw "Directory does not exist";

  // Filter directories
  const files = readdirSync(dirPath).filter((el) =>
    statSync(join(dirPath, el)).isFile()
  );

  Logging.info("files:", isVerbose, files);

  return files;
};
