import { moveFile } from "../../src/utility/moveFile";
import { join } from "path";
import fs from "fs";

jest.mock("../../src/utility/Logging", () => ({
  Logging: {
    info: jest.fn(),
  },
}));

describe("moveFile", () => {
  const testDir = "test";
  const file = "test.txt";

  beforeAll(() => {
    fs.mkdirSync(testDir);
    fs.mkdirSync(join(testDir, "documents"));
    fs.writeFileSync(join(testDir, file), "Test file");
  });

  afterAll(() => {
    fs.rmSync(testDir, { recursive: true });
  });

  it("should move the file to the specified directory", () => {
    const srcPath = join(testDir, file);
    const destPath = join(testDir, "documents", file);

    moveFile(file, testDir);

    expect(fs.existsSync(srcPath)).toBeFalsy();
    expect(fs.existsSync(destPath)).toBeTruthy();
  });
});
