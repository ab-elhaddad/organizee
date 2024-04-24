import { FileType } from "../fileTypes";
import fileTypes from "../fileTypes";

const typesCache: { [key: string]: string } = {};

/**
 * Get the destination folder for a file based on its extension.
 */
export const getDest = (extension: string): string => {
  if (typesCache[extension]) return typesCache[extension];
  let dest;
  fileTypes.forEach((dir: FileType) => {
    if (dir.extensions.includes(extension)) dest = dir.name;
  });
  dest ||= "others";
  typesCache[extension] = dest;
  return dest;
};
