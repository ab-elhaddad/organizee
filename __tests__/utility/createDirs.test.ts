import { createDirs } from "../../src/utility/createDirs";
import { join } from "path";
import fs from "fs";

describe("createDirs", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should create directories if they do not exist", () => {
    const dirPath = "path/to/dir";
    const fileTypes = [
      { name: "images" },
      { name: "documents" },
      { name: "videos" },
    ];

    // Mock the existsSync function
    jest.spyOn(fs, "existsSync").mockReturnValue(false);

    // Mock the mkdirSync function
    const mkdirMock = jest.spyOn(fs, "mkdirSync").mockReturnValue(undefined);

    createDirs(dirPath);

    // Verify that the mkdirSync function was called for each directory
    fileTypes.forEach((dir) => {
      expect(mkdirMock).toHaveBeenCalledWith(join(dirPath, dir.name));
    });
  });

  it("should not create directories if they already exist", () => {
    const dirPath = "path/to/dir";

    // Mock the existsSync function to return true for all directories
    jest.spyOn(fs, "existsSync").mockReturnValue(true);

    // Mock the mkdirSync function
    const mkdirMock = jest.spyOn(fs, "mkdirSync");

    createDirs(dirPath);

    // Verify that the mkdirSync function was not called
    expect(mkdirMock).not.toHaveBeenCalled();
  });
});
