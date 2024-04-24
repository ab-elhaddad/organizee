import { existsSync, statSync } from "fs";

export const validateDirPath = (path: string) => {
  if (!existsSync(path)) return false;
  if (statSync(path).isFile()) return false;
  return true;
};
