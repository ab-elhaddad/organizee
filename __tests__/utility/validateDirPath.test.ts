import { join } from "path";
import { validateDirPath } from "../../src/utility/validateDirPath";
import fs from "fs";

describe("validateDirPath", () => {
  const testDir = "test";
  const file = "file.txt";

  beforeAll(() => {
    fs.mkdirSync(testDir);
    fs.writeFileSync(join(testDir, file), "Test file");
  });

  afterAll(() => {
    fs.rmSync(testDir, { recursive: true });
  });

  it("should return false if the path does not exist", () => {
    const path = "/path/does/not/exist";
    const result = validateDirPath(path);
    expect(result).toBe(false);
  });

  it("should return false if the path is a file", () => {
    const path = join(testDir, file);
    const result = validateDirPath(path);
    expect(result).toBe(false);
  });

  it("should return true if the path is a valid directory", () => {
    const result = validateDirPath(testDir);
    expect(result).toBe(true);
  });
});
