import { extractFlags, flags } from "../../src/utility/extractFlags";

describe("extractFlags", () => {
  it("should correctly extract flags from arguments", () => {
    const args = ["-v", "--listen", "-p", "/path/to/directory", "-i", "txt,md"];

    extractFlags(args);

    expect(flags.isVerbose).toBe(true);
    expect(flags.isListening).toBe(true);
    expect(flags.dirPathIndex).toBe(3);
    expect(flags.ignoreIndex).toBe(5);
  });

  it("should return default values when no flags are present", () => {
    const args = ["/path/to/directory"];

    extractFlags(args);

    expect(flags.isVerbose).toBe(false);
    expect(flags.isListening).toBe(false);
    expect(flags.dirPathIndex).toBe(0);
    expect(flags.ignoreIndex).toBe(0);
  });

  it("should return default values when only -p flag is present", () => {
    const args = ["-p", "/path/to/directory"];

    extractFlags(args);

    expect(flags.isVerbose).toBe(false);
    expect(flags.isListening).toBe(false);
    expect(flags.dirPathIndex).toBe(1);
    expect(flags.ignoreIndex).toBe(0);
  });
});
