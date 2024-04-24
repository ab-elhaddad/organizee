import { getAbsoluteDirPath } from "../../src/utility/getAbsoluteDirPath";
import { userInfo } from "os";
import { join } from "path";

describe("getAbsoluteDirPath", () => {
  const username = userInfo().username;
  it("should return the correct absolute directory path for 'downloads'", () => {
    const expectedPath = join("C:", "Users", username, "Downloads");
    const actualPath = getAbsoluteDirPath("downloads");
    expect(actualPath).toBe(expectedPath);
  });

  it("should return the correct absolute directory path for 'desktop'", () => {
    const expectedPath = join("C:", "Users", username, "OneDrive", "Desktop");
    const actualPath = getAbsoluteDirPath("desktop");
    expect(actualPath).toBe(expectedPath);
  });

  it("should return the correct absolute directory path for other directories", () => {
    const expectedPath = join(
      __dirname,
      "..",
      "..",
      "path",
      "to",
      "current",
      "directory"
    );
    const actualPath = getAbsoluteDirPath(
      join("path", "to", "current", "directory")
    );
    expect(actualPath).toBe(expectedPath);
  });
});
