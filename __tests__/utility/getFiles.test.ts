import { getFiles } from "../../src/utility/getFiles";
import fs from "fs";

jest.mock("../../src/utility/Logging", () => ({
  Logging: {
    info: jest.fn(),
  },
}));

describe("getFiles", () => {
  const testDir = "/test";

  beforeAll(() => {
    // Create a test directory with files
    fs.mkdirSync(testDir);
    fs.writeFileSync(`${testDir}/file1.txt`, "Test file 1");
    fs.writeFileSync(`${testDir}/file2.txt`, "Test file 2");
    fs.writeFileSync(`${testDir}/file3.txt`, "Test file 3");
  });

  afterAll(() => {
    fs.rmSync(testDir, { recursive: true });
  });

  it("should return an array of file names in the specified directory", () => {
    const isVerbose = false;

    const result = getFiles(testDir, isVerbose);

    expect(result).toEqual(["file1.txt", "file2.txt", "file3.txt"]);
  });

  it("should throw an error if the directory does not exist", () => {
    const dirPath = "/non/existent/directory";
    const isVerbose = false;

    expect(() => {
      getFiles(dirPath, isVerbose);
    }).toThrow("Directory does not exist");
  });
});
