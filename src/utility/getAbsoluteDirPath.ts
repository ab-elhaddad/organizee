import { join } from "path";
import { userInfo } from "os";

export const getAbsoluteDirPath = (dir: string): string => {
  let dirPath = "";
  // Works only on windows
  switch (dir) {
    case "downloads":
      dirPath = join("C:", "Users", userInfo().username, "Downloads");
      break;

    case "desktop":
      dirPath = join("C:", "Users", userInfo().username, "OneDrive", "Desktop");
      break;

    default:
      dirPath = join(process.cwd(), dir);
  }

  return dirPath;
};
