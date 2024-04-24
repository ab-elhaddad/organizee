import { deleteEmptyDirs } from "../../src/utility/deleteEmptyDirs";
import fs from "fs";

describe("deleteEmptyDirs", () => {
  const testDir = "/test";

  beforeAll(() => {
    fs.mkdirSync(testDir);
  });

  afterAll(() => {
    fs.rmSync(testDir, { recursive: true });
  });

  it("should delete empty directories", () => {
    // Create an empty directory
    const emptyDir = `${testDir}/empty-dir`;
    fs.mkdirSync(emptyDir);

    deleteEmptyDirs(testDir);

    expect(fs.existsSync(emptyDir)).toBe(false);
  });

  it("should not delete non-empty directories", () => {
    // Create a non-empty directory
    const nonEmptyDir = `${testDir}/non-empty-dir`;
    fs.mkdirSync(nonEmptyDir);
    fs.writeFileSync(`${nonEmptyDir}/file.txt`, "Test file");

    deleteEmptyDirs(testDir);

    expect(fs.existsSync(nonEmptyDir)).toBe(true);
  });
});
